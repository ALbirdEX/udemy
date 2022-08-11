// lessons 13

"use strict"

console.log(1);

alert('Hello');

const result = confirm("Are you here?");
console.log(result);

const answer = prompt("Вам есть 18 лет?","18"); // При пресваивании переменной всегда получаем строку (string),
                                                               // второе значение не обязательно, но для некоторых браузеров надо оставлять пустые "".
                                                               // Вся информация приходящая от пользователя приходит в виде строк!!!
console.log(typeof (answer)); // typeof - показать тип данных.

const answer2 = prompt("Вам есть 18 лет?","18");
console.log(answer2 + 5);                                         // получаем 105, так как складываем строку и число

const answer3 = +prompt("Вам есть 18 лет?","18"); // преобразование строки в число по средствам оператора + (+prompt)
console.log(answer3 + 5);                                        // получаем 15, так как складываем числа

const answers = [];
answers[0] = prompt("Как Ваше имя?", "");
answers[1] = prompt("Как Ваша фамилия?", "");
answers[2] = prompt("Сколько Вам лет?", "");

document.write(answers);
console.log(typeof (answers));
console.log(answers);

//prompt, alert, confirm блокируют построение страницы до момента выполнения.
