let num = 10;
let greeting = "Hello, World!";
let isActive = true;
let numbers = [1, 2, 3, 4, 5];
let person = { name: "Shiva", age: 25 };
let nothing = null;
let undefinedValue;

function add(a, b) {
    return a + b;
}

let result = add(5, 7);
console.log("The result of the addition is: " + result);

numbers.forEach((num) => {
    console.log(num * 2);
});

function showPersonInfo(person) {
    console.log(person.name + " is " + person.age + " years old.");
}

showPersonInfo(person);
