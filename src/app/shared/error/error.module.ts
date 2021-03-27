import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsPipe } from './errors-pipe/errors.pipe';
import { FieldErrorComponent } from './field-error/field-error.component';
import { ObjectsKeysPipe } from './objects-keys.pipe';

@NgModule({
  declarations: [ErrorsPipe, FieldErrorComponent, ObjectsKeysPipe],
  imports: [CommonModule],
  exports: [ErrorsPipe, FieldErrorComponent, ObjectsKeysPipe],
})
export class ErrorModule {}
