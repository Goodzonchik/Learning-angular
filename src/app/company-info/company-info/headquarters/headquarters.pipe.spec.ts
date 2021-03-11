import { HeadquartersPipe } from './headquarters.pipe';

import { Headquarters } from '@models';

describe('HeadquartersPipe', () => {
  const pipe = new HeadquartersPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms headquarters object to "state city address"', () => {
    const headquarters: Headquarters = {
      address: 'address',
      city: 'city',
      state: 'state',
    };
    expect(pipe.transform(headquarters)).toBe('state city address');
  });
});
