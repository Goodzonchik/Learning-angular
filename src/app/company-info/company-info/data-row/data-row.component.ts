import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DataRow } from '@types';

@Component({
  selector: 'data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataRowComponent {
  @Input() data: DataRow
}
