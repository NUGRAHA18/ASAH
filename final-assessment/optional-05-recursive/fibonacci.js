function fibonacci(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }

  const prevSeries = fibonacci(n - 1);
  const nextNumber =
    prevSeries[prevSeries.length - 1] + prevSeries[prevSeries.length - 2];
  prevSeries.push(nextNumber);

  return prevSeries;
}
// Jangan hapus kode di bawah ini!
export default fibonacci;
