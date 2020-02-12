const calculator = () => {
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
   * @param {Numerator} n
   * @param {Denominator} d
   */
  function divide(a, b) {
    
  }
  function multiply(a, b) {}
  function subtract(a, b) {}
  return {
    add,
    divide,
    multiply,
    subtract,
  };
};

export default calculator;
