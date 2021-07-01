import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, take, tap } from 'rxjs/operators';

import { Rocket } from '@types';
import { BreadcrumbsService } from '@shared';
import { pathGen } from '@utils';
import { Observable } from 'rxjs';

interface RocketPageResolver {
  rocket: Rocket;
}

@Component({
  selector: 'rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketComponent implements OnInit{
  rocket$: Observable<Rocket>;
  
  constructor(private router: ActivatedRoute, private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit(): void {
    this.rocket$ = this.router.data.pipe(
      take(1),
      map(({ rocket }: RocketPageResolver) => rocket),
      tap(({rocket_id}: Rocket) => {
        this.breadcrumbsService.setBreadcrumbs(
          pathGen('rockets', `Rockets №${rocket_id}`)
        );
      })
    );
  }
}
