import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrorService } from '@shared';
import { FieldErrorComponent } from './field-error.component';

describe('FieldErrorComponent', () => {
  let component: FieldErrorComponent;
  let fixture: ComponentFixture<FieldErrorComponent>;
  let fieldErrorService: FieldErrorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldErrorComponent],
      providers: [FieldErrorService],
    }).compileComponents();
  });

  beforeEach(() => {
    //fieldErrorService = fixture.debugElement.injector.get(FieldErrorService);
    fixture = TestBed.createComponent(FieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
