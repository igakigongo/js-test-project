const calculator = () => {
  function guard(...args) {
    if (args.length <= 1) throw new Error('too few arguments');
  }
  /**
   * Sums two operands
   * @param {Number} a
   * @param {Number} b
   * @returns {Number} the sum
   */
  function add(...args) {
    if (args.length === 0) return 0;
    if (args.length === 1) {
      return args[0];
    }
    return args.reduce((a, c) => a + c, 0);
  }
  /**
   * Divides two operands
   * @param {Number} a - the dividend
   * @param {Number} d - the divisor
   * @returns {Number} the result (a number)
   * @throws {Error} error if the the divisor is zero
   */
  function divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  }
  /**
   * Multiplies 2 or more operands
   * @param  {...any} args
   * @returns {Number} the result
   * @throws {Error} error if less than 2 args are passed
   */
  function multiply(...args) {
    guard(...args);
    return args.reduce((a, c) => a * c, 1);
  }
  /**
   * Subtracts 2 or more operands
   * @param  {...any} args
   * @returns {Number} the difference
   * @throw {Error} error if less than 2 args are passed
   */
  function subtract(...args) {
    guard(...args);
    return args.reduce((a, c) => a - c);
  }
  return {
    add,
    divide,
    multiply,
    subtract,
  };
};

export default calculator;
