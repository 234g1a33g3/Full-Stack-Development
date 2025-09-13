function calculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      return "Division by zero is not allowed";
    } else {
      return num1 / num2;
    }
  } else {
    return "Invalid operator";
  }
}

const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));
const operator = prompt("Enter operator (+, -, *, /):");

const result = calculator(num1, num2, operator);
console.log("Result:", result);
