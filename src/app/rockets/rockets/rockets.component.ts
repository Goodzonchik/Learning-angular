import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from '@shared/data.service';
import { BreadcrumbsService } from '@shared/breadcrumbs.service';
import { Rocket } from 'src/app/models/rocket';

@Component({
  selector: 'rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketsComponent implements OnInit {
  rockets$: Observable<Rocket> = this.dataService.getData<Rocket>(
    'rockets?limit=3'
  );

  constructor(
    private dataService: DataService,
    private readonly breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit() {
    this.breadcrumbsService.setBreadcrumbs([
      {
        caption: 'Rockets',
      },
    ]);
  }
}
