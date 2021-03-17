import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';

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
  isLoader: boolean = false;

  constructor(
    public readonly breadcrumbsService: BreadcrumbsService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.isLoader = true;
      }
      if (event instanceof NavigationEnd) {
        this.isLoader = false;
      }
    });
  }
}
