// ASCII Code values
// A-Z 065 - 090
// a-z 097 - 122

/**
 * Determines if a character should be encoded. Only checks the
 * first character, it's not useful to pass strings longer than
 * one character
 * @param {String} char
 * @returns bool
 */
const shouldEncode = (char) => {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};

/**
 * Encrypts a string using the Caesar's cipher algorithm
 * @param {String} argument
 * @param {Number} shift
 */
const cipher = (argument, shift) => {
  if ((typeof argument) !== 'string') throw new Error('expected string argument');

  return argument.split('').map((char) => {
    if (shouldEncode(char) === false) {
      return char;
    }

    const v = (char.toLowerCase().charCodeAt(0) - 97 + shift) % 26;
    return String.fromCharCode(v + 97);
  }).join('');
};

export default cipher;