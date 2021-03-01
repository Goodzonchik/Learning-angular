import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BreadcrumbsService } from '@shared';
import { todoAny } from '@utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'learning-angular';
  breadcrumbs: todoAny[] = [];

  constructor(public readonly breadcrumbsService: BreadcrumbsService) {}
}
