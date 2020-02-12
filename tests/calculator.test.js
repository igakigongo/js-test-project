import calculator from '../src/calculator';

const calc = calculator();

describe('addition', () => {
  it('returns zero if no arguments are given', () => {
    expect(calc.add()).toEqual(0);
  });

  it('returns same value if given one operand', () => {
    expect(calc.add(3)).toEqual(3);
  });

  it('returns correct sum for multiple arguments', () => {
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(calc.add(1, 2, 3)).toEqual(6);
    expect(calc.add(1, 2, 3, 4)).toEqual(10);
    expect(calc.add(1, 2, 3, 4, 5)).toEqual(15);
  });

  test.each`
    a     | b     | sum
    ${0}  | ${0}  | ${0}
    ${10} | ${12} | ${22}
    ${15} | ${70} | ${85}
  `('expect calc.add($a, $b) to return $sum', ({ a, b, sum }) => {
  expect(calc.add(a, b)).toEqual(sum);
});
});

describe('division', () => {
  it('throws an exception when denominator is zero', () => {
    expect(() => calc.divide(2, 0)).toThrow();
  });

  test.each`
    a     | b     | result
    ${10} | ${12} | ${0.833}
    ${15} | ${70} | ${0.214}
  `('expect calc.divide($a, $b) to return $result', ({ a, b, result }) => {
  expect(calc.divide(a, b)).toBeCloseTo(result);
});
});

describe('multiplication', () => {
  it('throws an error for args less than 2', () => {
    expect(() => calc.multiply()).toThrow();
    expect(() => calc.multiply(1)).toThrow('too few arguments');
  });

  it('should work for multiple args', () => {
    expect(calc.multiply(0, 3, 4)).toBeCloseTo(0);
    expect(calc.multiply(2, 3, 4)).toBeCloseTo(24.0);
    expect(calc.multiply(5, 1, 9)).toBeCloseTo(45.0);
  });

  test.each`
    a     | b      | multiple
    ${33} | ${2.5} | ${82.5}
    ${45} | ${0.2} | ${9.0}
  `('expect calc.multiply($a, $b) to return $multiple', ({ a, b, multiple }) => {
  expect(calc.multiply(a, b)).toBeCloseTo(multiple);
});
});

describe('subtraction', () => {
  it('throws an error for args less than 2', () => {
    expect(() => calc.subtract(1)).toThrow('too few arguments');
  });

  it('should work for multiple args', () => {
    expect(calc.subtract(0, 3, 4)).toEqual(-7);
    expect(calc.subtract(2, 3, 4)).toEqual(-5);
    expect(calc.subtract(5, 1, 9)).toEqual(-5);
  });
});