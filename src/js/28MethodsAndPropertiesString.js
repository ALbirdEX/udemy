// lessons 28
// "use strict";

const str = "test";
const strBig = "TEST";
const arr = [1, 2, 3];

console.log(str[1]);
console.log(arr[1]);

console.log(str.toUpperCase());
console.log(strBig.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("u"));
console.log(fruit.indexOf("Some"));


let fruit2 = "Some Fruit";
let fruit3 = fruit2.toLowerCase();
let fruit4 = fruit2.toUpperCase();

console.log(fruit3.indexOf("fruit"));
console.log((fruit2.toLowerCase()).indexOf("fruit"));
console.log((fruit2.toUpperCase()).indexOf("U"));       // поиск подстроки
console.log((fruit2.toUpperCase()).indexOf("u"));


const logg = "Hello World";

console.log(logg.slice(6, 11));     // вырезаем с 6 до 11 не включая => World
console.log(logg.slice(6));         // вырезаем с 6 до конца => World
console.log(logg.slice(-5));        // вырезаем с -5 с конца => World
console.log(logg.slice(-11, -6));   // вырезаем с -11 до - 6 конца => Hello
console.log(fruit3.slice(5, 10));
console.log(fruit4.slice(0, 5));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 3));    // устаревшее, с какого символа и сколько нам надо отрезать => Wor


const num = 12.3;

console.log(Math.round(num));    //  возвращает число, округлённое к ближайшему целому => 12


const test = "12.2px";

console.log(parseInt(test));   // переводит в другую систему исчисления => 12
console.log(parseFloat(test));   // берет строку и возвращает в десятичном варианте с плавающей запятой => 12.2
