export const Calculo = {
  mult(numberOne, numberTwo) {
    alert('A multiplicação dos 2 números é:  ' + numberOne * numberTwo);
  },

  sum(numberOne, numberTwo) {
    const sum = numberOne + numberTwo;
    alert('A soma dos 2 números é:  ' + sum);

    return sum;
  },

  sub(numberOne, numberTwo) {
    const sub = numberOne - numberTwo;
    alert('A subtração dos 2 números é:  ' + Math.abs(sub));
  },

  div(numberOne, numberTwo) {
    const div = (numberOne / numberTwo).toFixed(2);
    alert('A divisão dos 2 números é:  ' + div);
  },

  rest(numberOne, numberTwo) {
    const rest = numberOne % numberTwo;
    alert('O resto é:  ' + rest);
  },
};
