import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { Rocket } from '@types';
import { BreadcrumbsService } from '@shared';
import { pathGen } from '@utils';

interface RocketPageResolver {
  rocket: Rocket;
}

@Component({
  selector: 'rocket',
  templateUrl: './rocket.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketComponent {
  rocket: Rocket | null = null;

  constructor(router: ActivatedRoute, breadcrumbsService: BreadcrumbsService) {
    router.data.pipe(take(1)).subscribe((response: RocketPageResolver) => {
      this.rocket = response.rocket;
    });

    breadcrumbsService.setBreadcrumbs(
      pathGen('rockets', `Rockets №${this.rocket.rocket_id}`)
    );
  }
}
