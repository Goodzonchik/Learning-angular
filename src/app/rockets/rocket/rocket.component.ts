import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Rocket } from '@models';
import { DataService, BreadcrumbsService } from '@shared';

@Component({
  selector: 'rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketComponent implements OnInit {
  rocket$: Observable<Rocket> = null;

  constructor(
    private dataService: DataService,
    private readonly router: ActivatedRoute,
    private readonly breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit(): void {
    const rocket_id = this.router.snapshot.params.rocket_id;
    this.rocket$ = this.dataService.getData<Rocket>(`rockets/${rocket_id}`);
  }
}
