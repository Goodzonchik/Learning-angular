import { Pipe, PipeTransform } from '@angular/core';

import { getHeadquart } from '@utils/get-headquart';
import { Headquarters } from '../../../models/headquarters';

@Pipe({
  name: 'headquarters',
})
export class HeadquartersPipe implements PipeTransform {
  transform(value: Headquarters): string {
    return getHeadquart(value);
  }
}
