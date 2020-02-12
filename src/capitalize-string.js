/**
 * Capitalizes the first letter of a string
 * @param {String} operand
 */
const capitalize = (operand) => {
  if ((typeof operand) !== 'string') {
    throw new Error('operand is not a string');
  }

  if (operand.match(/^(\s)*$/)) {
    return operand;
  }

  let first = operand[0].toUpperCase();
  const len = operand.length;
  if (len === 0) {
    return first;
  }
  first += operand.substr(1, len - 1);
  return first;
};

export default capitalize;