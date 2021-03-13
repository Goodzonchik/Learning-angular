import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldErrorComponent {
  @Input() show: boolean = false;
  @Input() errorMessage: string | null = '';
}
