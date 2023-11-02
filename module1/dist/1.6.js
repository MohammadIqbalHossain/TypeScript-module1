"use strict";
// Learning function.
// Normal function.
function add(num1, num2) {
    return num1 + num2;
}
// When we don't give parameters data type explicitly it'll implicitly take type 'any'. it's not recommended. we can also give what type of data the function will return, and a parameters default or optional value. 
// Arrow function.
const arrowAdd = (num1, num2) => num1 + num2; // It's also same.
// Obejct function / Method. 
const poorUser = {
    name: 'Iqbal',
    balance: 0,
    addBalance(balance) {
        return `My balance is: ${this.balance + balance}`;
    },
};
// Here arrow function wouldn't work because we can't write an arrow function as method. 
// Map in an array.
const arr = [2, 4, 5, 10];
const newArr = arr.map((elem) => elem * elem);
console.log(newArr);
