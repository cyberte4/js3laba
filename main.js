'use strict'

document.addEventListener('DOMContentLoaded',() => {
  function getValidNumber(promptMessage, defaultValue) {
    while (true) {
      let input = prompt(promptMessage, defaultValue)
      input = +input;

      if (!isNaN(input)) {
        return input;
      }

      alert('Ви ввели не число')
    }
  }

  function getValidOperation(promptMessage, defaultValue) {
    const operations = ['+', '-', '*', '/'];
    while (true) {
      let operation = prompt(promptMessage, defaultValue);

      if (operations.includes(operation)) {
        return operation;
      }

      alert('Невідома дія,повторіть спробу')
    }
  }

  const number1 = getValidNumber('Введіть перше число:', '');
  const number2 = getValidNumber('Введіть друге число:', '');
  const oper = getValidOperation('Введіть дію(+, -, *, /):', '');

  function calculate(num1, num2, op) {
    switch(op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return 'Помилка:на нуль ділити не можна'
        }
      default:
        return 'Невідома операція'
    }
  }
  const result = calculate(number1, number2, oper);
  console.log(`Результат: ${number1} ${oper} ${number2} = ${result}`)
});