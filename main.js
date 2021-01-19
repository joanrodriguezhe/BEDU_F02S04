//Ejemplo 1

function multiplyByTwo(numbers) {
    var multipliedNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        multipliedNumbers.push(numbers[i] * 2);
    }
    return multipliedNumbers;
}

console.log(multiplyByTwo([1, 3, 4, 7, 2, 1, 9, 0]));