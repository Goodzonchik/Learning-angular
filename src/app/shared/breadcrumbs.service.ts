import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { todoAny } from '@utils';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  breadcrumbs = new BehaviorSubject<todoAny>(null);

  constructor() {}

  setBreadcrumbs(value: todoAny[]) {
    this.breadcrumbs.next(value);
  }
}
