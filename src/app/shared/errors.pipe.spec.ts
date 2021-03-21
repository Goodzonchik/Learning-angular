import { errorsMap } from '@utils';
import { ErrorsPipe } from './errors.pipe';

describe('ErrorsPipe', () => {
  const pipe = new ErrorsPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('trasform required key to required message', () => {
    const required = 'required';
    expect(pipe.transform(required)).toEqual(errorsMap.get(required));
  });

  it('trasform invald key to null', () => {
    const invald = 'invald';
    expect(pipe.transform(invald)).toEqual(null);
  });
});
