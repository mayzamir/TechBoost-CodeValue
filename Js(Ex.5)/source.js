var numbers = {
  *[Symbol.iterator]({ start = 0, step = 1, end = 100 } = {}) {
    for (let i = start; i <= end; i = i + step) {
      yield this.values[i];
    }
  },
  values: [
    0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
    40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76,
    78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
  ],
};
//should print 0..100 by 1s
for (let num of numbers) {
  console.log(num);
}
for (let num of numbers[Symbol.iterator]({
  start: 6,
  step: 4,
  end: 30,
})) {
  console.log(num);
}
