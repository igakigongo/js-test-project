import reverse from '../src/reverse-string';

it('throws an error if the type is not a string', () => {
  expect(() => reverse([])).toThrow(Error);
  expect(() => reverse({})).toThrow(Error);
  expect(() => reverse(undefined)).toThrow('operand is not a string');
});

it('returns empty string if the string is empty', () => {
  const str = '';
  const longStringWithWhiteSpace = '       ';
  expect(reverse(str)).toBe('');
  expect(reverse(longStringWithWhiteSpace)).toBe(longStringWithWhiteSpace);
});

it('reverses a string', () => {
  const mapOfStrings = new Map([
    ['a', 'a'],
    ['one', 'eno'],
    ['two', 'owt'],
    ['three', 'eerht'],
    ['four', 'ruof'],
  ]);

  mapOfStrings.forEach((value, key) => {
    expect(reverse(key)).toMatch(value);
  });
});
