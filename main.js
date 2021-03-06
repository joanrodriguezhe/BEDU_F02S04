//Ejemplo 1

function multiplyByTwo(numbers) {
    var multipliedNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        multipliedNumbers.push(numbers[i] * 2);
    }
    return multipliedNumbers;
}

//console.log(multiplyByTwo([1, 3, 4, 7, 2, 1, 9, 0]));

//Reto 01
function calculateAverage(numbers) {
    let sum = numbers.reduce((el, nxt) => {
        return el + nxt
    }, 0)
    return sum / numbers.length;
}

//console.log(calculateAverage([1,2,3,4,5]));
//Ejemplo 2
let cars = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}

function objectToArray(obj) {
    let keys = Object.keys(obj);
    let pair = [];
    for (let i = 0; i < keys.length; i++) {
        pair.push([keys[i], obj[keys[i]]])
    }
    return pair;
}

//console.log(objectToArray(cars));

//Reto 02
function arrayToObject(array) {
    let obj = {};
    array.forEach(element => {
        obj[element[0]] = element[1];
    });
    return obj;
}

//console.log(arrayToObject([['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]))

const singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {
    return list.map(el =>el[propertyName]);
}

console.log(pluck(singers, 'name'));
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log(pluck(singers, 'band'));
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log(pluck(singers, 'born'));
  // [1948, 1950, 1967, 1964]
