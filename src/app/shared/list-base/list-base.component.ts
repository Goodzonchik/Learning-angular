import { Component, Inject } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { DataService, ListCacheService } from '@shared';

const pageSize = 5;
const latestLaunch = 92;

@Component({
  selector: 'list-base',
  template: ``,
})
export class ListBaseComponent<T> {
  items$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>(null);

  page = 0;
  lastPage = Math.ceil(latestLaunch / pageSize);

  private readonly path;

  constructor(
    @Inject('pathValue') pathValue: string,
    private dataService: DataService,
    private readonly listCacheService: ListCacheService
  ) {
    this.path = pathValue;
    this.getPage(0);
  }

  next() {
    this.page++;
    this.getPage(this.page);
  }

  prev() {
    this.page--;
    this.getPage(this.page);
  }

  private getPage(page: number): void {
    const cache = this.listCacheService.getData<T[]>(page);
    if (cache) {
      this.items$.next(cache);
      return;
    }
    this.dataService
      .getData<T[]>(`${this.path}?limit=${pageSize}&offset=${page * pageSize}`)
      .pipe(take(1))
      .subscribe((data) => {
        this.items$.next(data);
        this.listCacheService.setData<T[]>(page, data);
      });
  }
}
