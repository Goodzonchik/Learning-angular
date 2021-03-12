import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { todoAny } from '@utils';

type NavLink = { link: string; title: string };

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() breadcrumbs: todoAny[];

  links: NavLink[] = [
    { link: 'company-info', title: 'About SpaceX' },
    { link: 'launches', title: 'Launches' },
    { link: 'rockets', title: 'Rockets' },
  ];
}
