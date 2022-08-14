// lessons 20

"use strict";

if (4 == 9) {
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
// тернарное вырпжение
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