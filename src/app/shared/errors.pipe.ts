import { Pipe, PipeTransform } from '@angular/core';

import { getError } from '../utils/get-errors';

@Pipe({
  name: 'errors',
})
export class ErrorsPipe implements PipeTransform {
  transform(value: string): string {
    return getError(value);
  }
}
