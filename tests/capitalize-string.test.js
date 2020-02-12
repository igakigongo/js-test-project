import capitalize from '../src/capitalize-string';

it('throws an error if the type is not a string', () => {
  expect(() => capitalize(null)).toThrow(Error);
  expect(() => capitalize({})).toThrow();
  expect(() => capitalize([])).toThrow('operand is not a string');
});

it('returns empty if the string is empty', () => {
  const longStringWithWhiteSpace = '       ';
  expect(capitalize('')).toMatch('');
  expect(capitalize(longStringWithWhiteSpace)).toBe(longStringWithWhiteSpace);
});

it('capitalizes the first letter', () => {
  const mapOfStrings = new Map([
    ['a', 'A'],
    ['one', 'One'],
    ['two', 'Two'],
    ['three', 'Three'],
    ['four', 'Four'],
  ]);

  mapOfStrings.forEach((value, key) => {
    expect(capitalize(key)).toMatch(value);
  });
});