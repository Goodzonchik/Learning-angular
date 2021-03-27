import { Pipe, PipeTransform } from '@angular/core';

import { todoAny } from '@utils';

@Pipe({
  name: 'objectsKeys',
})
export class ObjectsKeysPipe implements PipeTransform {
  transform(value: todoAny): string[] | null {
    return value ? Object.keys(value) : null;
  }
}
