import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class FieldErrorService {
  private readonly _showError$: Subject<boolean> = new Subject<boolean>();

  get showError$(): Subject<boolean> {
    return this._showError$;
  }

  enableShowError(): void {
    this._showError$.next(true);
  }

  disableShowError(): void {
    this._showError$.next(false);
  }
}
