import { Pipe, PipeTransform } from '@angular/core';

import { getHeadquart } from '@utils';
import { Headquarters } from '@types';

@Pipe({
  name: 'headquarters',
})
export class HeadquartersPipe implements PipeTransform {
  transform(value: Headquarters): string {
    return getHeadquart(value);
  }
}
