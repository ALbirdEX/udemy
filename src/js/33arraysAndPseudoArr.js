// lessons 33
// "use strict";

/*
const arr = [1, 2, 3, 4, 5, 6, 8];

arr.pop();           //  удаляет последний элемент массива, предпочтительны методы работающие с последними элементами массива,
                     // по причине того что не надо менять индексы всех остальных элементов
console.log(arr);    // [ 1, 2, 3, 4, 5, 6 ]


arr.push(10);        // добавляет в конец массива.
console.log(arr);    // [ 1, 2, 3, 4, 5, 6, 10]

const arr1 = [1, 2, 3, 4, 5, 6, 8];

arr1.shift();         // удаляет первый элемент => меняет индексы остальных!
console.log(arr1);    // [ 2, 3, 4, 5, 6, 8 ]

arr1.unshift(10); // добавляет первый элемент => меняет индексы остальных!
console.log(arr1);      // [ 10, 2, 3, 4, 5, 6, 8 ]

const arr2 = [1, 2, 3, 4, 5, 6, 8];

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

for (let value of arr2) {               // for of работает только с массивами и подобными.
    console.log(value);
}

console.log(arr2.length);   // порядковый номер 7 (по индексу 6)  length => последний индекс +1

const arr3 = [1, 2, 3, 4, 5, 6, 8, 9];
arr3[99] = 0;

console.log(arr3.length);    // 100 т.к. 99 + 1
console.log(arr3);           // [ 1, 2, 3, 4, 5, 6, 8, <92 empty items>, 0 ]


const arr4 = [2, 3, 4, 5, 6, 8];




// метод forEach проходит по каждому элементу массива применяя к енму ф-ю

// item - элемент перебира
// index - № по индексу
// arr4 - ссылка на массив который перебираем

arr4.forEach(function (item, index, arr4) {
    console.log(`Массива ${arr4} => элемент ${item} с индексом ${index}`)
});
*/


/*const str = prompt("", "");
const products = str.split(", ");//из веденной строки создаем массив ориентируясь по элементам на separator ", "
products.sort();   // сортировка поалфавиту, сортирует как строки
console.log(products.join("; ")); // массив склеиваем в строку с разделением через  (;)*/

const arrNumb = [2, 20, 15, 10, 1, 35, 65, 200];
arrNumb.sort();
console.log(arrNumb);  // [1,  10, 15,  2, 20, 200, 35, 65] - сортирует как строку

const arrNumber = [2, 20, 15, 10, 1, 35, 65, 200];
arrNumber.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arrNumber);
