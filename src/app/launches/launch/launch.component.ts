import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, take, tap } from 'rxjs/operators';

import { BreadcrumbsService } from '@shared';
import { Launch } from '@types';
import { pathGen } from '@utils';
import { Observable } from 'rxjs';

interface LaunchPageResolver {
  launch: Launch;
}

@Component({
  selector: 'launch',
  templateUrl: './launch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchComponent implements OnInit {
  launch$: Observable<Launch>;

  constructor(
    private readonly router: ActivatedRoute,
    private readonly breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit(): void {
    this.launch$ = this.router.data.pipe(
      take(1),
      map(({ launch }: LaunchPageResolver) => launch),
      tap(({flight_number}: Launch) => {
        this.breadcrumbsService.setBreadcrumbs(
          pathGen('launches', `Launche №${flight_number}`)
        );
      })
    );
  }
}
