// lessons 32
// "use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function () {
        console.log("Test");                    // метод
    }
};

options.makeTest();

const {border, bg} = options.colors;            // Деструктуризация


console.log(`${border}, ${bg}`);


console.log(Object.keys(options));              // [ 'name', 'width', 'height', 'colors' ] - arr key
console.log(Object.keys(options).length);       // применяем .length - 4


console.log(options["name"]);
console.log(options.colors.bg);
console.log(options["colors"]["border"]);


delete options.colors.bg;
console.log(options);

delete options.width.colors;
console.log(options);


for (let key in options) {   // перебор свойств объекта, цикл будет работать столько раз сколько свойств внутри объекта
    console.log(`свойство ${key} имеет значение ${options[key]}`)    // key - ключ
}

let couter = 0;
let couter1 = 0;
let couter2 = 0;
let couter3 = 0;

for (let key in options) {                             // перебор объекта for in
    if (typeof (options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            couter++;
            couter1++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        couter++;
        couter2++;
    }
    couter3++;
}

console.log(couter);   //5
console.log(couter1);  //2
console.log(couter2);  //3
console.log(couter3);  //4
