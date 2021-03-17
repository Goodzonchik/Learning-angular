import { Component, Inject, OnDestroy } from '@angular/core';

import { BehaviorSubject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { DataService } from '../data.service';
import { ListCacheService } from '../list-cache.service';

const pageSize = 5;

@Component({
  selector: 'list-base',
  template: ``,
})
export abstract class ListBaseComponent<T> implements OnDestroy {
  items$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>(null);

  page = 0;

  private dataSubscription$: Subscription | null = new Subscription();

  constructor(
    @Inject('pathValue') private readonly pathValue: string,
    private dataService: DataService,
    private readonly listCacheService: ListCacheService
  ) {}

  next() {
    this.page++;
    this.getPage(this.page);
  }

  prev() {
    this.page--;
    this.getPage(this.page);
  }

  getPage(page: number): void {
    const cache = this.listCacheService.getData<T[]>(page);
    if (cache) {
      this.items$.next(cache);
      return;
    }
    this.dataSubscription$.add(
      this.dataService
        .getData<T[]>(
          `${this.pathValue}?limit=${pageSize}&offset=${page * pageSize}`
        )
        .pipe(take(1))
        .subscribe((data) => {
          this.items$.next(data);
          this.listCacheService.setData<T[]>(page, data);
        })
    );
  }

  ngOnDestroy(): void {
    if (this.dataSubscription$) {
      this.dataSubscription$.unsubscribe();
      this.dataSubscription$ = null;
    }
  }
}
