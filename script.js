/* 
Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello there')
Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 10;
const numberTwo = 11;
const result = Number(numberOne) + Number(numberTwo);
alert(`Result: ${result}`);
Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let randomValue = 2;
const varType = typeof randomValue;
if (varType === "number") {
  alert("It is a number.");
} else alert("Not a number.");
Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let randomValue = `test`;
const varType = typeof randomValue;
if (varType === "string") {
  alert("It is a string.");
} else alert("Not a string.");
Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".// let randomValue = `test`;
let randomValue = true;
const varType = typeof randomValue;
if (varType === "boolean") {
  alert("It is a boolean.");
} else alert("Not a boolean.");
Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const number1 = 10;
const number2 = 3;
const subResult = Number(number1) - Number(number2);
alert(`Result: ${subResult}`);
Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const number1 = 10;
const number2 = 3;
const multiResult = Number(number1) * Number(number2);
alert(`Result: ${multiResult}`);
Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const number1 = 10;
const number2 = 3;
const divResult = Number(number1) / Number(number2);
alert(`Result: ${divResult}`);
Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/
const number = 5;
const numberRemainder = number % 2;
if (numberRemainder != 0) {
  alert("It is an even number.");
} else alert("It is an odd number.");
