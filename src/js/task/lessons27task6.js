//lessons 27 task 6
//"use strict"
/*
function sayHello(text) {
    return (`Привет, ${text}`)
}

// sayHello("Антоха");
console.log(sayHello("Антоха"));

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1]
}

// returnNeighboringNumbers(5);
console.log(returnNeighboringNumbers(5))*/

function getMathResult(num1, num2) {
    if (typeof (num2) !== "number" || num2 <= 0) {
        return num1;
    }

    let str = "";

    for (let i = 1; i <= num2; i++) {
        if (i < num2) {
            str += `${num1 * i}---`;
        } else {
            str += `${num1 * i}`;
        }
    }
    return str;
}



//getMathResult(5, 3);
console.log(getMathResult(5, 4))