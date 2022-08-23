// lessons 21 + 22
// "use strict";

/*let num = 50;*/

/*
while (num <= 55) {        // пока наше условие не выполнено
    console.log(num);
    num++;                 // выполнять такие-то действия
}
*/

// итерация - повторение цикла

/*
do {
    console.log(num);       // сначало выполняем действие
    num++;
}
while (num <= 55);          // потом проверяем условия
*/

/*
for (let i = 1; i < 8; i++) {
    console.log(i);       // сначало выполняем действие
}
 */

/*
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 0; i++) {  // бесконечный цикл т.к. i < 0, let num = 50;
    console.log(num);
    num++;
}
*/

/*
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;     // останавливает цикл при i === 6
    }
    console.log(i)
}
*/

/*
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;  // позволяет пропустить шаг без прерывания цикла
    }
    console.log(i)
}
*/

// lessons 22

/*
for (let i = 0; i < 3; i++) {        // запускается цикл и выполнив его 1 раз запускаем внутренний цикл, и так 3 раза
    console.log(i);
    for (let j = 0; j < 3; j++) {    // отрабатывает 3 раза и завершается, переходим к внешнему циклу, и так 3 раза
        console.log(j);
    }
}
*/

// *
// **
// ***
// ****
// *****
// ******

/*
let result = '';   // результат, который будем выводить (сторка)
const lenght = 7;  // ограничение рядов

for (let i = 1; i < lenght; i++) {    // внешний цикл формирует строки, внутренний - содержимое строки; i = 1 - нет пустой строки
    for (let j = 0; j < i; j++) {     // j < i - ориентируется на строку внешнего цикла
        result +='*';                 // записываем в result '*'
    }
    result +='\n';  // перенос строку (внешний цикл)
}

console.log(result);
*/

first: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level ${k}`)
        }
    }
}
