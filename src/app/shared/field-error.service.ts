import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class FieldErrorService {
  private showError: Subject<boolean> = new Subject<boolean>();

  getSubject(): Subject<boolean> {
    return this.showError;
  }

  enableShowError(): void {
    this.showError.next(true);
  }

  disableShowError(): void {
    this.showError.next(false);
  }
}
