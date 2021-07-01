import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataRowComponent {
  // TODO заменить на один объект, отрефакторить
  @Input() title: string;
  @Input() value: string | number;
}
