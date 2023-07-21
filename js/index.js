function createCalculator(base) {
  let num = base;

  return {
    add: function add(number) {
      if (!isNaN(number)) {
        num = num + number;
      }
    },
    sub: function sub(number) {
      if (!isNaN(number)) {
        num = num - number;
      }
    },
    set: function set(number) {
      if (!isNaN(number)) {
        num = number;
      }
    },
    get: function get() {
      return num;
    },
    reset: function reset() {
      num = base;
    },
  };
}

const calculator = createCalculator(100);

calculator.add(10);
calculator.add(10);
calculator.sub(20);
calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add("qwe");
console.log(calculator.get());

calculator.reset();
console.log(calculator.get());
