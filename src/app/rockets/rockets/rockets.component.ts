import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Rocket } from '@models';
import {
  BreadcrumbsService,
  DataService,
  ListCacheService,
  ListBaseComponent,
} from '@shared';

const pageSize = 5;
const latestLaunch = 5;

@Component({
  selector: 'rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
  providers: [ListCacheService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketsComponent
  extends ListBaseComponent<Rocket>
  implements OnInit {
  lastPage = Math.ceil(latestLaunch / pageSize);

  constructor(
    dataService: DataService,
    private readonly breadcrumbsService: BreadcrumbsService,
    listCacheService: ListCacheService
  ) {
    super('rockets', dataService, listCacheService);
  }

  ngOnInit() {
    this.breadcrumbsService.setBreadcrumbs([
      {
        caption: 'Rockets',
      },
    ]);
    this.getPage(0);
  }
}
