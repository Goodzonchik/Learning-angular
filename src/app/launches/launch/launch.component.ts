import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { DataService, BreadcrumbsService } from '@shared';
import { Launch } from '@models';
import { pathGen } from '@utils';

const launchesPath = '/launches';

@Component({
  selector: 'launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchComponent implements OnInit {
  launch$: Observable<Launch> = null;

  constructor(
    private readonly dataService: DataService,
    private readonly router: ActivatedRoute,
    private readonly breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit(): void {
    const flight_number = this.router.snapshot.params.flight_number;
    this.launch$ = this.dataService.getData<Launch>(
      `launches/${flight_number}`
    );
    this.breadcrumbsService.setBreadcrumbs(
      pathGen('launches', `Launche №${flight_number}`)
    );
  }
}
