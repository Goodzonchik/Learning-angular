import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'list-button',
  templateUrl: './list-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListButtonComponent {
  @Input() firstPage: number = 0;
  @Input() lastPage: number = 0;
  @Input() page: number = 0;

  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() prev: EventEmitter<void> = new EventEmitter<void>();
}
