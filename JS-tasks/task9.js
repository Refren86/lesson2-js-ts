// Напиши функцию filter(), которая принимает функцию-предикат и массив.
// Возвращает она массив значений, для которых предикат вернет true.

const isEven = (num) => num % 2 === 0;

function filter(arr, fn) {
  let localArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      localArray.push(arr[i]);
    }
  }

  return localArray;
}

console.log(filter([1, 2, 3, 4, 5], isEven));
