import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';

import { RocketComponent } from './rocket.component';
import { BreadcrumbsService, BooleanLiteralPipe, DataService } from '@shared';
import { Rocket } from '@types';
import { getBooleanLiterals } from '@utils';

const mockRocket: Rocket = {
  id: 1,
  active: true,
  success_rate_pct: 100,
  first_flight: '2020-01-03',
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
  images: [],
};

describe('RocketComponent', () => {
  let component: RocketComponent;
  let fixture: ComponentFixture<RocketComponent>;
  let dataService: DataService;
  let spy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [RocketComponent, BooleanLiteralPipe],
      providers: [
        DataService,
        BreadcrumbsService,
        {
          provide: ActivatedRoute,
          useClass: class {
            data = of({ rocket: mockRocket });
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(DataService);

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
    const tempalteValues = {
      active: getTextContent(compiled, 'active'),
      first_flight: getTextContent(compiled, 'first_flight'),
      success_rate_pct: getTextContent(compiled, 'success_rate_pct'),
      height: getTextContent(compiled, 'height'),
      diameter: getTextContent(compiled, 'diameter'),
      mass: getTextContent(compiled, 'mass'),
      description: getTextContent(compiled, 'description'),
    };

    const mockRocketValues = {
      active: getBooleanLiterals(mockRocket.active, 'yesNo'),
      first_flight: mockRocket.first_flight.toString(),
      success_rate_pct: mockRocket.success_rate_pct.toString(),
      height: mockRocket.height.meters.toString(),
      diameter: mockRocket.diameter.meters.toString(),
      mass: mockRocket.mass.kg.toString(),
      description: mockRocket.description,
    };
    fixture.detectChanges();
    expect(tempalteValues).toEqual(mockRocketValues);
  });
});

const getTextContent = (compiled: any, querySelector: string): string =>
  compiled.querySelector(`[data-testid="${querySelector}"]`).textContent;
