import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

let moduleCount = 0;

const loadRoute = (load: Function) => {
  moduleCount++;
  return timer(2500 * moduleCount).pipe(mergeMap((_) => load()));
};

export class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route?.data?.preload ? loadRoute(load) : of(null);
  }
}
