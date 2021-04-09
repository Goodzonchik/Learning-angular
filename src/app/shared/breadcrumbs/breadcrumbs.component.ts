import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BreadcrumbsService } from '../breadcrumbs.service';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  constructor(public breadcrumbsService: BreadcrumbsService) {}
}
