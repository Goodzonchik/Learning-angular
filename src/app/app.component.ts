import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';

import { BreadcrumbsService } from '@shared';
import { Breadcrumb } from '@utils';
import { slideInAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation]
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
