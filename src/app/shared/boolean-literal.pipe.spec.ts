import { BooleanLiteralPipe } from './boolean-literal.pipe';

describe('BooleanLiteralPipe', () => {
  it('create an instance', () => {
    const pipe = new BooleanLiteralPipe();
    expect(pipe).toBeTruthy();
  });
});
