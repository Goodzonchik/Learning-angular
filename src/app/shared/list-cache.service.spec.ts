import { TestBed } from '@angular/core/testing';

import { ListCacheService } from './list-cache.service';

describe('ListCacheService', () => {
  let service: ListCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
