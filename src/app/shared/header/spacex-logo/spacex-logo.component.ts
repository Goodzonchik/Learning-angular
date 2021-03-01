import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'spacex-logo',
  templateUrl: './spacex-logo.component.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacexLogoComponent {}
