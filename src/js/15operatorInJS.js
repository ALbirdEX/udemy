// lessons 15

"use strict"

/*
console.log('arr' + '- object');   // string + string = string
console.log('arr' + 5);            // string + number = string
console.log(5 + +'- object');      // NaN - действие не подлежит математической логике
console.log(5 + +'5');             // number + +string = number - +'5' => number, унарный + использует один аргумент
*/

// инкрименд и дикримент

let incr = 10,
    decr = 10;

/*
incr++;   //+1 постфиксная        //++incr; +1 префиксная
decr--;   //-1 постфиксная        //--decr; -1 префиксная
console.log(incr); // 11
console.log(decr); // 9
*/

/*
console.log(incr++); // 10
console.log(decr--); // 10
*/

/*
console.log(++incr); // 11
console.log(--decr); // 9
*/

/*
console.log(5 % 2); // целый остаток от деления
*/

/*
console.log(2 * 4 == 8);     //true - сравнение по значению
console.log(2 * 4 == '8');   //true - сравнение по значению
console.log(2 * 4 === 8);    //true - сравнение по типу данных
console.log(2 * 4 === '8');  //false - сравнение по типу данных
*/

// && - и, работает когда 2 или более правдивых выражения - возвращает правду
// || - или, когда один правда - возвращает правду

/*
const isCheked = true,
    isClose = true,
    isOpen = true;

console.log(isCheked && isClose && isOpen); // true когда 2 или более правдивых выражения - возвращает правду

const isCheked1 = true,
    isClose1 = true,
    isOpen1 = false;

console.log(isCheked1 && isClose1 && isOpen1); // false

const isCheked2 = true,
    isClose2 = false,
    isOpen2 = false;

console.log(isCheked2 || isClose2 || isOpen2); // true когда один правда - возвращает правду
                                               // если все false то false :)
*/

// ! оператор отрицания

const isCheked3 = false,
    isClose3 = true,
    isOpen3 = true;

console.log(isCheked3 || !isClose3); // false т.к. меняем значение isOpen3 оператор отрицания ! и получаем все false
console.log(!isCheked3 && isOpen3 && isOpen3); //true т.к. меняем значение isCheked3 оператор отрицания ! - все true
