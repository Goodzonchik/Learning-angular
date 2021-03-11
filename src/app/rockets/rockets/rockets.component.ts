import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { Rocket } from '@models';
import { BreadcrumbsService, DataService, ListCacheService } from '@shared';
import { ListBaseComponent } from '@shared/list-base/list-base.component';

const pageSize = 5;
const latestLaunch = 92;

@Component({
  selector: 'rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
  providers: [ListCacheService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketsComponent implements OnInit {
  rockets$: BehaviorSubject<Rocket[]> = new BehaviorSubject<Rocket[]>(null);

  page = 0;
  lastPage = Math.ceil(latestLaunch / pageSize);

  constructor(
    private dataService: DataService,
    private readonly breadcrumbsService: BreadcrumbsService,
    private readonly listCacheService: ListCacheService
  ) {}

  ngOnInit() {
    this.breadcrumbsService.setBreadcrumbs([
      {
        caption: 'Rockets',
      },
    ]);
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
    const cache = this.listCacheService.getData<Rocket[]>(page);
    if (cache) {
      this.rockets$.next(cache);
      return;
    }
    this.dataService
      .getData<Rocket[]>(`rockets?limit=${pageSize}&offset=${page * pageSize}`)
      .pipe(take(1))
      .subscribe((data) => {
        this.rockets$.next(data);
        this.listCacheService.setData<Rocket[]>(page, data);
      });
  }
}
