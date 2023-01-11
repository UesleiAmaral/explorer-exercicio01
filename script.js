import { Calculo } from './module/Calculo.js ';
import { CheckEqual } from './module/Check.js ';

const NotAnumber = (value) => {
  return isNaN(value) || value == '';
};

let numberOne = Number(prompt('Digite o primeiro número '));

while (NotAnumber(numberOne)) {
  numberOne = Number(prompt('Digite apenas numeros '));
}

let numberTwo = Number(prompt('Digite o segundo números '));

while (NotAnumber(numberTwo)) {
  numberTwo = Number(prompt('Digite apenas números '));
}

Calculo.mult(numberOne, numberTwo);
const sum = Calculo.sum(numberOne,numberTwo);
Calculo.sub(numberOne, numberTwo);
Calculo.div(numberOne, numberTwo);
Calculo.rest(numberOne, numberTwo);

if (sum % 2 == 0){
  alert("A soma dos números é Par! ");
}
else{
  alert("A soma dos números é ímpar! ");
}

CheckEqual(numberOne, numberTwo);