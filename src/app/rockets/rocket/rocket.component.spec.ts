import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { DataService } from '@shared/data.service';
import { RocketComponent } from './rocket.component';
import { BreadcrumbsService } from '@shared/breadcrumbs.service';
import { Rocket } from '@models';
import { BooleanLiteralModule } from '@shared/boolean-literal';

describe('RocketComponent', () => {
  let component: RocketComponent;
  let fixture: ComponentFixture<RocketComponent>;
  let dataService: DataService;
  let spy: jasmine.Spy;
  let mockRocket: Rocket;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BooleanLiteralModule,
      ],
      declarations: [RocketComponent],
      providers: [DataService, BreadcrumbsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(DataService);

    mockRocket = {
      id: 1,
      active: true,
      success_rate_pct: 100,
      first_flight: new Date(),
      height: {
        meters: 20,
      },
      diameter: {
        meters: 5,
      },
      mass: {
        kg: 100500,
      },
      flickr_images: ['1', '2'],
      description: 'test description',
      rocket_id: 'test rocket id',
      rocket_name: 'big fucking rocket',
      rocket_type: 'super heavy',
    };

    spy = spyOn(dataService, 'getData').and.returnValue(of(mockRocket));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title of rocket component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(
      `Rocket ${mockRocket.rocket_name}`
    );
  });

  it('should render active value with pipe', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.row-active').textContent).toContain('yes');
  });
});
