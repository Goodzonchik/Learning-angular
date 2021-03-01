import { Injectable } from '@angular/core';
import { todoAny } from '@utils/todo-any';
import { BehaviorSubject } from 'rxjs';

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
