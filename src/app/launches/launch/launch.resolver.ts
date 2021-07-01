import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Launch } from '@types';
import { DataService } from '@shared';
import { launchRoute } from '@utils';

@Injectable()
export class LaunchResolver implements Resolve<Launch> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Launch> {
    return this.dataService.getData<Launch>(
      launchRoute(route.paramMap.get('flight_number'))
    );
  }
}
