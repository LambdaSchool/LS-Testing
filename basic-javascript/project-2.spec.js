const funcs = require('./project-2');

describe('return larger value', () => {
  it('should return the larger value', () => {
    expect(funcs.getBiggest(0, 1)).toEqual(1);
    expect(funcs.getBiggest(1, 1)).toEqual(1);
    expect(funcs.getBiggest(2, 1)).toEqual(2);
  });

  it('should return false when one of the arguments is undefined', () => {
    expect(funcs.getBiggest(undefined, 1)).toEqual(false);
  });

  it('should return false if one or both arguments are not numbers', () => {
    expect(funcs.getBiggest(6, 'abc')).toEqual(false);
  });
});
