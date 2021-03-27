import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { CompanyInfo } from '@types';
import { DataService } from '@shared';

@Injectable()
export class CompanyInfoResolver implements Resolve<CompanyInfo> {
  constructor(private dataService: DataService) {}

  resolve(): Observable<CompanyInfo> {
    return this.dataService.getData<CompanyInfo>('info');
  }
}
