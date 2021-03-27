import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Breadcrumb } from '@utils';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>(null);

  setBreadcrumbs(value: Breadcrumb[]) {
    this.breadcrumbs$.next(value);
  }
}
