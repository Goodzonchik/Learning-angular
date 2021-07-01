import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { api } from '@utils';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getData<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${api}/${path}`);
  }
}
