import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Rocket } from '@types';
import {
  BreadcrumbsService,
  DataService,
  ListCacheService,
  ListBaseComponent,
  GetFirstPage,
} from '@shared';
import { pageSize, pathGen } from '@utils';

const rocketCount = 4;

@Component({
  selector: 'rockets',
  templateUrl: './rockets.component.html',
  providers: [ListCacheService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketsComponent
  extends ListBaseComponent<Rocket>
  implements OnInit {
  lastPage = Math.floor(rocketCount / pageSize);

  constructor(
    dataService: DataService,
    private readonly breadcrumbsService: BreadcrumbsService,
    listCacheService: ListCacheService
  ) {
    super('rockets', dataService, listCacheService);
  }

  @GetFirstPage()
  ngOnInit() {
    this.breadcrumbsService.setBreadcrumbs(pathGen('rockets'));
  }
}
