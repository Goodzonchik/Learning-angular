import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });

    service = TestBed.inject(DataService);
    spy = spyOn(service, 'getData').and.returnValue(of(null));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get data', () => {
    expect(service.getData('rockets/1')).toBeTruthy(null);
  });
});
