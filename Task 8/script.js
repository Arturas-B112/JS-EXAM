/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {}

Calculator.prototype.sum = (a, b) => {
  const sum = a + b;
  console.log(sum);
  return sum;
};

Calculator.prototype.substraction = (a, b) => {
  const sub = a - b;
  console.log(sub);
  return sub;
};

Calculator.prototype.multiplication = (a, b) => {
  const multi = a * b;
  console.log(multi);
  return multi;
};

Calculator.prototype.division = (a, b) => {
  const div = a / b;
  console.log(div);
  return div;
};

const calculator = new Calculator();

calculator.sum(1, 2);
calculator.substraction(10, 5);
calculator.multiplication(2, 2);
calculator.division(20, 2);
