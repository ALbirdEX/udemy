/*
function result(num1, num2) {
    if (typeof (num1) === "string" || num1 <= 0) {
        return num2
    }

    let str = "";

    for (let i = 1; i <= num1; i++) {
        if (i < num1) {
            str += `${num2 * i}---`;
        } else {
            str += `${num2 * i}`;
        }
    }
    return str;
}
console.log(result(-3, 10))*/

/*

let count = null;

const fn = () => {
    const num = prompt("Send me number");

    if (!isNaN(Number(num))) {
        count = Number(num);
    } else {
        fn();
    }
}

fn();
*/


function calcSum(numOne, numTow) {
    if (numTow === 1) {
        return numOne;
    } else {
        return numOne * calcSum(numOne, numTow - 1);
    }
}

console.log(calcSum(4, 6));
