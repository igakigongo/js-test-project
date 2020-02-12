function analyze(array) {
  const average = array.reduce((a, c) => a + c) / array.length;
  const min = Math.min.apply(null, array);
  const max = Math.max.apply(null, array);
  const { length } = array;

  return {
    average,
    min,
    max,
    length,
  };
}

export default analyze;