import cipher from '../src/caesars-cipher';

describe("caesar's cipher", () => {
  it('throws an error for ', () => {
    expect(() => cipher(1234)).toThrow('expected string argument');
  });
});


describe("caesar's cipher - non alphabets", () => {
  test.each`
      input    |  output
      ${'1'}   |  ${'1'}
      ${';'}   |  ${';'}
      ${'%$'}  |  ${'%$'}
    `('expect cipher("$input") to return "$output"', ({ input, output }) => {
  expect(cipher(input)).toMatch(output);
});
});

describe("caesar's cipher - with alphabets", () => {
  test.each`
      shift     |  input                                    |  output
      ${1}      |  ${'defend the east wall of the castle'}  |  ${'efgfoe uif fbtu xbmm pg uif dbtumf'}
      ${5}      |  ${'defend the east wall of the castle'}  |  ${'ijkjsi ymj jfxy bfqq tk ymj hfxyqj'}
      ${10}     |  ${'Defend the east wall of the castle'}  |  ${'nopoxn dro okcd gkvv yp dro mkcdvo'}
    `('expect cipher("$input", $shift) to return "$output"', ({ input, shift, output }) => {
  expect(cipher(input, shift)).toMatch(output);
});
});