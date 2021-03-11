import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { Launch } from '@models';
import { BreadcrumbsService, DataService, ListCacheService } from '@shared';

const pageSize = 5;
const latestLaunch = 92;

@Component({
  selector: 'launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  providers: [ListCacheService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesComponent implements OnInit {
  launches$: BehaviorSubject<Launch[]> = new BehaviorSubject<Launch[]>(null);

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
        caption: 'Launches',
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
    const cache = this.listCacheService.getData<Launch[]>(page);
    if (cache) {
      this.launches$.next(cache);
      return;
    }
    this.dataService
      .getData<Launch[]>(`launches?limit=${pageSize}&offset=${page * pageSize}`)
      .pipe(take(1))
      .subscribe((data) => {
        this.launches$.next(data);
        this.listCacheService.setData<Launch[]>(page, data);
      });
  }
}
