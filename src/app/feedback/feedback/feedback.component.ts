import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Observable } from 'rxjs';
import { isEqual } from 'lodash';

import { ComponentCanDeactivate, FieldErrorService } from '@shared';

const defaultFeedbackValue = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  subject: '',
  comment: '',
  rate: 1,
  subscribe: false,
};

const emptyRequiredFormControl = [null, Validators.required];

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
      name: emptyRequiredFormControl,
      lastName: emptyRequiredFormControl,
      phone: null,
      email: [null, [Validators.required, Validators.email]],
      subject: emptyRequiredFormControl,
      comment: emptyRequiredFormControl,
      rate: null,
      subscribe: null,
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
    this.form.patchValue(defaultFeedbackValue);
    this.form.valueChanges.subscribe(() => {
      this.hasChanges = !isEqual(this.form.getRawValue(), defaultFeedbackValue);
    });
  }

  submit() {
    this.fieldErrorService.enableShowError();
    if (this.form.valid) {
      const formData = JSON.stringify(this.form.getRawValue(), null, 2);
      alert(`You sended data is \n\n${formData}`);
    }
  }

  reset() {
    this.form.patchValue(defaultFeedbackValue);
    this.fieldErrorService.disableShowError();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.hasChanges) {
      return confirm(
        'You have unsaved data. Are you sure you want to leave the page?'
      );
    }
    return true;
  }
}
