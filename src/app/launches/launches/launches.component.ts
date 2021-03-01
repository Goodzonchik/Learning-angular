import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from '@shared/data.service';
import { Launch } from 'src/app/models/launch';
import { BreadcrumbsService } from '@shared/breadcrumbs.service';

@Component({
  selector: 'launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesComponent implements OnInit {
  launches$: Observable<Launch> = this.dataService.getData<Launch>(
    'launches?limit=3'
  );

  constructor(
    private dataService: DataService,
    private readonly breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit() {
    this.breadcrumbsService.setBreadcrumbs([
      {
        caption: 'Launches',
      },
    ]);
  }
}
