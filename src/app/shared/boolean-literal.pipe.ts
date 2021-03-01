import { Pipe, PipeTransform } from '@angular/core';

import { BooleanLiteral, getBooleanLiterals } from '@utils';

@Pipe({
  name: 'booleanLiteral',
})
export class BooleanLiteralPipe implements PipeTransform {
  transform(value: boolean, literal: BooleanLiteral): string {
    return getBooleanLiterals(value, literal);
  }
}
