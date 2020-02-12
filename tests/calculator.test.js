import calculator from '../src/calculator';

describe('when adding', () => {
  const calc = calculator();

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

// describe('when dividing', () => {
//   const calc = calculator();

//   it('throws an exception when denominator is zero', () => {
//     expect(calc.divide(2, 0)).throw();
//   });

//   test.each`
//     a     | b     | sum
//     ${0}  | ${0}  | ${0}
//     ${10} | ${12} | ${22}
//     ${15} | ${70} | ${85}
//   `('expect calc.add($a, $b) to return $sum', ({ a, b, sum }) => {
//   expect(calc.divide(a, b)).toBe(sum);
// });
// });

it.skip('multiplies two numbers', () => {

});

it.skip('subtracts two numbers', () => {

});