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
    let sum=numbers.reduce((el,nxt)=>{
        return el+nxt
    },0)
    return sum/numbers.length;
  }

  console.log(calculateAverage([1,2,3,4,5]));