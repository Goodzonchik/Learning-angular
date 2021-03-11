import { BooleanLiteralPipe } from './boolean-literal.pipe';

describe('BooleanLiteralPipe', () => {
  const pipe = new BooleanLiteralPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms true to "Yes"', () => {
    expect(pipe.transform(true, 'yesNo')).toBeTruthy('Yes');
  });

  it('transforms false to "No"', () => {
    expect(pipe.transform(false, 'yesNo')).toBeTruthy('No');
  });

  it('transforms null to "No"', () => {
    expect(pipe.transform(null, 'yesNo')).toBeTruthy('No');
  });

  it('transforms null to "Close"', () => {
    expect(pipe.transform(null, 'openClose')).toBeTruthy('Close');
  });
});
