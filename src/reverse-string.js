/**
 * Reverses a String
 * @param {String} operand
 */
const reverse = (operand) => {
  if ((typeof operand) !== 'string') {
    throw new Error('operand is not a string');
  }

  if (operand.match(/^(\s)*$/)) return operand;
  if (operand.length === 1) return operand;
  return operand.split('').reduceRight((a, c) => a + c, '');
};

export default reverse;