// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает
// каждый элемент массива этой функцией, возвращая новый массив.Пример:

// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []

function map(fn, array) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(fn(array[i]));
  }

  return newArr;
}
