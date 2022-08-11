// lessons 12

const arr = ['a', 'd', 'c'];
const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    a: 'd'
};

console.log(arr[1]);
console.log(arrObj["1"]);
console.log(arrObj[1]);
console.log(arrObj.a)    //если в ключе цифры, то через точку не получится только через []

arrObj.b = '1234';  // создаем свойство
console.log(arrObj.b);  // обращаемся к нему

arrObj['c'] = '4321';  // создаем свойство
console.log(arrObj['c']);  // обращаемся к нему

const d = 'd';           // создаем переменную
arrObj[d] = '911';        // создаем новое свойство и записываем значение '911'
console.log(arrObj[d])

const obj = {
    Anna: 500,
    'Alice': 800     // можно ключ и в '', но JS и понимает что это string и '' не используем.
};
