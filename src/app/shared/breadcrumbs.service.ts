import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Breadcrumb } from '@utils';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  breadcrumbs$: Subject<Breadcrumb[]> = new Subject<Breadcrumb[]>();

  setBreadcrumbs(value: Breadcrumb[]) {
    this.breadcrumbs$.next(value);
  }
}
