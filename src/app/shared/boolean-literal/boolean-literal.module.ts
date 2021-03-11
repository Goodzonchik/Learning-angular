import { NgModule } from '@angular/core';

import { BooleanLiteralPipe } from './boolean-literal.pipe';

@NgModule({
  declarations: [BooleanLiteralPipe],
  exports: [BooleanLiteralPipe],
})
export class BooleanLiteralModule {}
