import { ListCacheService } from './list-cache.service';

describe('ListCacheService', () => {
  let service: ListCacheService;

  beforeEach(() => {
    service = new ListCacheService();
  });

  it('should be created ListCacheService', () => {
    expect(service).toBeTruthy();
  });

  it('get and set data from ListCacheService', () => {
    service.setData(1, 'test');
    expect(service.getData(1)).toBeTruthy('test');
  });
});
