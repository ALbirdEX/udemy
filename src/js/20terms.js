// lessons 20

//"use strict";

if (4 === 9) {
    console.log('Ok!');  // если ровно то выводим Ok
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}

const num2 = 55;
// тернарное выражение
(num2 === 50) ? console.log('Ok') : console.log('Error'); // если выражение верно, то Ok, иначе Error

const num3 = '60';
// всегда строгое соответствие
switch (num3) {                 // если написать (+num3)/(Number(num3)) - приводим значение к числовому =>'В точку'
    case 59:                    // указывает то что хотим проверить
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно'); // так как сравниваем string и number
        break;
    case 60:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз') // если не одно условие не совпало
        break;
}

// 0, '', null, undefaind, NaN - всегда false

const hamburger = 5; // true
const fries = 1;  // false
//const fries = 0;  // false
// const fries = null;  // false

if (hamburger && fries) {
    console.log('Я сыт');  // 'Я сыт'
}

console.log((hamburger && fries));  // 1

const hamburgers = 5;
const friesBig = 1;
const cola = 0;

if (hamburgers >= 3 && cola === 1 && friesBig) {    // таблица приоритетов операторов; friesBig то же самое что и friesBig === 1
    console.log('Все сыты');
} else {
    console.log('Мы уходим');
}

// оператор И (&&) всегда возвращает первое ложное значение если оно есть, на нем он останавливается и дальше код не идет!!!
// если все аргументы верны и код дошёл до конца, то возвращается значение последнего аргумента!!!

// && запинается на лжи

// || запинается на правде

// Логическое ИЛИ (||)
// expr1 || expr2
// Возвращает 'expr1', если он может быть преобразован в true; в противном случае возвращает 'expr2.

console.log(hamburgers >= 3 && cola === 1 && friesBig); // false т.к. cola - 0, возвращает первое ложное значение

console.log(1 && 0);                     // 0 - возвращает первое ложное значение - false
console.log(1 && 5);                     // 5 - возвращается значение последнего аргумента - true
//console.log(null && 0);                  // null - возвращает первое ложное значение - false
console.log(0 && 'kdfhgkhaosdhgoi sgo'); // 0 - возвращает первое ложное значение - false

const hamburgers1 = 5;
const friesBig1 = 0;
const cola1 = 0;

if (hamburgers1 || cola1 || friesBig1) {    // таблица приоритетов операторов; friesBig то же самое что и friesBig === 1
    console.log('Все довольны');
} else {
    console.log('Мы уходим');
}

console.log(hamburgers1 || cola1 || friesBig1); // 5 т.к. || запинается на правде

let johnReport,
    aleReport,
    samReport,
    mariaReport = 'done';

console.log(johnReport || aleReport || samReport || mariaReport);

const hamburgersSmall = 3;
const friesSmall = 3;
const colaSmall = 0;
const nuggets = 2;
// if (hamburgersSmall === 3 && colaSmall === 3 || friesSmall === 3 && nuggets)
if ((hamburgersSmall === 3 && colaSmall === 3) || (friesSmall === 3 && nuggets)) {// более правильно поставить >= вместо ===
    console.log('Все довольны');
} else {
    console.log('Мы уходим');
}

console.log(hamburgersSmall === 3 && colaSmall === 3); // false
console.log(friesSmall === 3 && nuggets); // 2 (true) все аргументы верны и код дошёл до конца
                                          // возвращается значение последнего аргумента!!!
console.log((hamburgersSmall === 3 && colaSmall === 3) || (friesSmall === 3 && nuggets)); // 2 - смотри выше
// console.log(hamburgersSmall === 3 && colaSmall === 3 || friesSmall === 3 && nuggets); // 2 - смотри выше

console.log(hamburgersSmall === 3 && (colaSmall === 3 || friesSmall) === 3 && nuggets); // сначало скобки!
                                                                                       // таблица приоритетов операторов

console.log(!0); // true т.к. оператор НЕ (!), с начало аргумент к которому применен превращает в логический тип данных
                 // потом возвращает противоположное значение, 0 - false значит true