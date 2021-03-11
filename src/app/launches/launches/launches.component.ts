import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Launch } from '@models';
import {
  BreadcrumbsService,
  DataService,
  ListCacheService,
  ListBaseComponent,
} from '@shared';

const pageSize = 5;
const latestLaunch = 92;

@Component({
  selector: 'launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  providers: [ListCacheService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesComponent
  extends ListBaseComponent<Launch>
  implements OnInit {
  lastPage = Math.ceil(latestLaunch / pageSize);

  constructor(
    dataService: DataService,
    private readonly breadcrumbsService: BreadcrumbsService,
    listCacheService: ListCacheService
  ) {
    super('launches', dataService, listCacheService);
  }

  ngOnInit() {
    this.breadcrumbsService.setBreadcrumbs([
      {
        caption: 'Launches',
      },
    ]);
    this.getPage(0);
  }
}
