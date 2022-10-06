// lessons 29
// "use strict";

function first() {
    //Do something
    setTimeout(function () {
        console.log(1);
    }, 5000);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log("Я прошёл этот урок!");
}

learnJS("JavaScript", done);     // done а не done() т.к. мы передаем а не вызываем.