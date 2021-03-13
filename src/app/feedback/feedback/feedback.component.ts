import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ComponentCanDeactivate } from '@shared';
import { FieldErrorService } from '@shared/field-error.service';
import { compareObjects } from '@utils';
import { Observable } from 'rxjs';

const defaultFormValue = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  subject: '',
  comment: '',
  rate: 0,
  subscribe: false,
};

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  providers: [FieldErrorService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent implements OnInit, ComponentCanDeactivate {
  form: FormGroup;
  hasChanges: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    private readonly fieldErrorService: FieldErrorService
  ) {
    this.form = formBuilder.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      phone: null,
      email: [null, [Validators.required, Validators.email]],
      subject: [null, Validators.required],
      comment: [null, Validators.required],
      rate: null,
      subscribe: false,
    });
  }

  get nameControl(): AbstractControl {
    return this.form.get('name');
  }

  get lastNameControl(): AbstractControl {
    return this.form.get('lastName');
  }

  get emailControl(): AbstractControl {
    return this.form.get('email');
  }

  get subjectControl(): AbstractControl {
    return this.form.get('subject');
  }

  get commentControl(): AbstractControl {
    return this.form.get('comment');
  }

  ngOnInit(): void {
    this.form.patchValue(defaultFormValue);
    this.form.valueChanges.subscribe(() => {
      this.hasChanges = !compareObjects(
        this.form.getRawValue(),
        defaultFormValue
      );
    });
  }

  submit() {
    this.fieldErrorService.enableShowError();
  }

  reset() {
    this.form.patchValue(defaultFormValue);
    this.fieldErrorService.disableShowError();
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (this.hasChanges) {
      return confirm(
        'You have unsaved data. Are you sure you want to leave the page?'
      );
    }
    return true;
  }
}
