function createCalculator(base) {
  // implement
}

const calculator = createCalculator(100);

calculator.add(10);
calculator.add(10);
calculator.sub(20);
calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add("qwe"); // NaN и значение 40 не менять
console.log(calculator.get()); // 40

calculator.reset();
console.log(calculator.get()); // 100
