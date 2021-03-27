import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { BreadcrumbsService } from '@shared';
import { Launch } from '@types';
import { pathGen } from '@utils';

interface LaunchPageResolver {
  launch: Launch;
}

@Component({
  selector: 'launch',
  templateUrl: './launch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchComponent implements OnInit {
  launch: Launch | null = null;

  constructor(
    private readonly router: ActivatedRoute,
    private readonly breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit(): void {
    this.router.data.pipe(take(1)).subscribe((response: LaunchPageResolver) => {
      this.launch = response.launch;
    });

    this.breadcrumbsService.setBreadcrumbs(
      pathGen('launches', `Launche №${this.launch.flight_number}`)
    );
  }
}
