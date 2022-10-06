// lessons 25
// "use strict";

let num = 20;                          // глобальная переменная

function showFirstMessage(text) {
    let num = 28;                      // локальная переменная, если убрать переменную, то console.log(num) подымится на
                                       // уровень выше
    console.log(text);
    console.log(num);
}

showFirstMessage("Hellow World");
console.log(num)


// Function Declaration может быть вызвана раньше, чем она объявлена.
function calc(a, b) {
    return (a + b);                    // на return ф-я завершается и возвращает значении ф-и наружу

    //console.log("1123")               // Недостижимый код (Unreachable code) не может быть исполнен,
                                      // поскольку является недостижимым в графе потока управления.
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(6, 9));

function ret() {
    //let num = 50;                     // локальная переменная 'num' является избыточной
    return num = 50;
}

const anotherNum = ret();
console.log(anotherNum);

// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
const logger = function () {
    console.log("Hello")
};
logger();

const sum = (a, b) => {return a + b};
const sum2 = (a, b) => a + b;

console.log(sum(2, 5));
console.log(sum2(3, 5));



// lessons 26

const usdCurr = 28;
const eurCurr = 35;

function convert(amount, curr) {
    console.log(curr * amount)
}

convert(500, usdCurr);
convert(500, eurCurr);


// lessons 26

// ф-я всегда что-то возвращает, если нет значение то это undefaind
// return стоит по умолчанию, если даже его и не нет.