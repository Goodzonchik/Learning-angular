import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Launch } from '@types';
import {
  BreadcrumbsService,
  DataService,
  ListCacheService,
  ListBaseComponent,
  GetFirstPage,
} from '@shared';
import { pageSize, pathGen } from '@utils';

const latestLaunch = 92;

@Component({
  selector: 'launches',
  templateUrl: './launches.component.html',
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

  @GetFirstPage()
  ngOnInit() {
    this.breadcrumbsService.setBreadcrumbs(pathGen('launches'));
  }
}
