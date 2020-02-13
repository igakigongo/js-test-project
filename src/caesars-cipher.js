// ASCII Code values
// A-Z 065 - 090
// a-z 097 - 122

// eslint-disable-next-line no-extend-native, func-names
String.prototype.shouldEncode = function () {
  const code = this.charCodeAt(0);
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
    if (char.shouldEncode() === false) {
      return char;
    }

    const v = (char.toLowerCase().charCodeAt(0) - 97 + shift) % 26;
    return String.fromCharCode(v + 97);
  }).join('');
};

export default cipher;