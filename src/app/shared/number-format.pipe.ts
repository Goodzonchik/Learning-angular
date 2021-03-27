import { Pipe, PipeTransform } from '@angular/core';

import { Currency, numberFormat } from '@utils/number-format';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number, currency?: Currency): string {
    return numberFormat(value, currency);
  }
}
