import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';

import { Subject } from 'rxjs';

import { todoAny } from '@utils';
import { FieldErrorService } from '../field-error.service';

@Component({
  selector: 'field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldErrorComponent implements OnDestroy {
  @Input() customMessage: string = '';
  @Input() errors: todoAny;

  show$: Subject<boolean> | null = null;

  constructor(private readonly fieldErrorService: FieldErrorService) {
    this.show$ = this.fieldErrorService.showError$;
  }

  ngOnDestroy() {
    if (this.show$) {
      this.show$.unsubscribe();
      this.show$ = null;
    }
  }
}
