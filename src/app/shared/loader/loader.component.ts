import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {}
