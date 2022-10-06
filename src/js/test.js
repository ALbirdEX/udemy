// 1
// Создайте переменную, которая будет отображать имя пользователя. (Пользователь - user, имя - name). В неё поместите значение "John"
// На следующей строке создайте переменную, отображающую номер пользователя (номер - number). В неё поместите значение 25.
// Измените значение второй переменной с 25 на 24 на следующей строке.

/*const userName = "John";
let userNumber = "25";
userNumber = 24*/

// 2
// Создайте переменную с названием магазина (магазин - store, имя - name) и поместите в неё любое название на ваш выбор.
// Создайте объект под названием storeDescription
// Внутрь этого объекта напрямую поместите свойство budget и укажите его как 10000. Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте
// Внутрь объекта storeDescription напрямую поместите свойство employees. Это должен быть массив, который содержит имена трех сотрудников на ваш выбор
// Внутрь объекта storeDescription напрямую поместите свойство products. Это должен быть тоже объект, который содержит два товара и их цену.
// То есть, нужно создать пару ключ-значение в виде, товар: цена Данные на ваш выбор.
// Внутрь объекта storeDescription напрямую поместите свойство open. Тут можно контролировать: или магазин открыт, или закрыт, то есть логическое значение.
// Сделайте его открытым

/*
let storeName = '100';

const storeDescription = {
    budget: 10000,
    employees: ['Alex', 'Oleg', 'Dima'],
    products: {
        apple: 100,
        banana: 200
    },
    open: true
};
*/

// 2 (lessons 21)
//Что выведет в консоль код?

/*console.log( NaN || 2 || undefined ); // 2 т.к. || запинается на правде

console.log( NaN && 2 && undefined ); // NaN (false)*/
// оператор && всегда возвращает первое ложное значение если оно есть, на нем он останавливается и дальше код не идет

/*console.log( 1 && 2 && 3 ); // 3 (true)*/
// оператор && всегда возвращает первое ложное значение если оно есть, на нем он останавливается и дальше код не идет!!!
// если все аргументы верны и код дошёл до конца, то возвращается значение последнего аргумента!!!

/*
console.log( !1 && 2 || !3 ); // false т.к. !(НЕ)

console.log( 25 || null && !3 ); // 25 т.к. null && !3 - null, 25 || null - 25 т.к. || запинается на правде

console.log( NaN || null || !3 || undefined || 5); // 5

console.log( NaN || null && !3 && undefined || 5); // 5

console.log( 5 === 5 && 3 > 1 || 5); //true
*/

// Выполняется ли условие?

/*const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!')
}*/
// да т.к.
// hamburger === 3 && cola - 0 (0, '', null, undefaind, NaN - всегда false),
// fries === 3 && nuggets - 2
// 0 || 2 получаем 2 (true) - условие выполняется

// Выполняется ли условие?
// Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение.
// С const будет ошибка, можете проверить.
// А без значения там undefined

/*let hamburger2;
const fries2 = NaN;
const cola2 = 0;
const nuggets2 = 2;

if (hamburger2 || cola2 || fries2 === 3 || nuggets2) {
   console.log('Done!')
}*/
// да т.к. ||(или) запинается на правде, nuggets = 2 по условию что-то одно (...или...или...или...)

//Выполняется ли условие?

/*let hamburger3;
const fries3 = NaN;
const cola3 = 0;
const nuggets3 = 2;

if (hamburger3 && cola3 || fries3 === 3 && nuggets3) {
    console.log('Done!')
}*/

//нет т.к.
// hamburger3 && cola3 - undefined т.к. hamburger3 - неопределенный,
// fries3 === 3 && nuggets3 - false (0, '', null, undefaind, NaN - всегда false), && запинается на лжи
// false && nuggets3 будет false
// undefined || false - false

// 3 (lessons 23)

// 1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

/*for (let i = 5; i <= 10; i++) {
    console.log(i);
}

let num = 5;

for (num; num <= 10; num++) {  // (; num <= 10; num++) нет необходимости в "начале"
    console.log(num);
}

let num1 = 5;

while (num1 <= 10) {
    console.log(num1);
    num1++;
}

let num2 = 5;

do {
    console.log(num2);
    num2++;
}
while (num2 <= 10)*/
;

// 2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...).
// Когда цикл дойдет до числа 13 - остановить весь цикл

/*for (let i = 20; i >= 10; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}*/

// 3. При помощи цикла for выведите чётные числа от 2 до 10 включительно

/*for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}*/

// 4. Перепишите цикл for на вариант с while.
// Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// Цикл, который нужно переписать:

/*for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}*/


/*let num3 = 2;

while (num3 <= 16) {
    if (num3 % 2 === 0) {
        num3++;
    } else {
        console.log(num3);
        num3++;
    }
}*/

//Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же,
// как и обращаться к ним: arr[0]
//
/*
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
*/

//4 (lessons 23)

//1. Заполните новый массив (result) числами из старого (arr).
// Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив
//
/*const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result.push(arr[i])
}
console.log(result)*/
//2. Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
//
/*const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
        data[i] = data[i] + ' - done'
    } else {data[i] = data[i] * 2}
}
console.log(data)*/
//3. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
//
/*
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = data.length -1; i >= 0; i--) {
    result.push(data[i])
}
console.log(result)*/