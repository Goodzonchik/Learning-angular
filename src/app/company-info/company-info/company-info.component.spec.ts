import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';

import { CompanyInfo } from '@models';
import { CompanyInfoComponent } from './company-info.component';
import { TuiFormatNumberPipe } from '@taiga-ui/core';
import { HeadquartersPipe } from './headquarters/headquarters.pipe';

const mockData: CompanyInfo = {
  name: 'SpaceX',
  founder: 'Elon Mask',
  founded: 2010,
  employees: 100,
  vehicles: 1000,
  ceo: 'CEO',
  cto: 'CTO',
  coo: 'COO',
  cto_propulsion: 'CEO',
  valuation: 1000,
  headquarters: {
    address: '19-n Avenu',
    city: 'New-York',
    state: 'Uta',
  },
  summary: 'summary',
};

describe('CompanyInfoComponent', () => {
  let component: CompanyInfoComponent;
  let fixture: ComponentFixture<CompanyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CompanyInfoComponent,
        TuiFormatNumberPipe,
        HeadquartersPipe,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: class {
            data = of({ companyInfo: mockData });
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title of CompanyInfo', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(mockData.name);
  });

  it('should render active value with pipe', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.row-data').textContent).toContain(
      'Elon Mask'
    );
  });
});
