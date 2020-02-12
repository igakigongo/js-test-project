import analyze from '../src/array-analyzer';

describe('array analyzer', () => {
  const array = [1, 8, 3, 4, 2, 6];

  const obj = analyze(array);
  const {
    average, min, max, length,
  } = obj;

  it('returns an object instance', () => {
    expect(obj).toBeInstanceOf(Object);
  });

  it('computes the average', () => {
    expect(average).toBeCloseTo(4.0);
  });

  it('finds the min value', () => {
    expect(min).toEqual(1);
  });

  it('finds the max value', () => {
    expect(max).toEqual(8);
  });

  it('finds the length', () => {
    expect(length).toEqual(array.length);
  });
});