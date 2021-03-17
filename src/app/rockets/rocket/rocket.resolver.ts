import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { Rocket } from '@models';
import { DataService } from '@shared';

@Injectable()
export class RocketResolver implements Resolve<Rocket> {
  constructor(private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Rocket> {
    return this.dataService.getData<Rocket>(
      `rockets/${route.paramMap.get('rocket_id')}`
    );
  }
}
