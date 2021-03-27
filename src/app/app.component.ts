import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';

import { BreadcrumbsService } from '@shared';
import { Breadcrumb } from '@utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'learning-angular';
  breadcrumbs: Breadcrumb[] = [];
  isLoader: boolean = false;

  constructor(
    public readonly breadcrumbsService: BreadcrumbsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.isLoader = true;
      }
      if (event instanceof NavigationEnd) {
        this.isLoader = false;
      }
    });
  }
}
