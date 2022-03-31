// Также, нужна функция take(fn, count) которая вызвает функцию fn заданное число(count)
// раз и возвращает массив с результатами вызовов.Она нам пригодится для отладки:

// var gen2 = sequence(0, 2);
// console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

function take(fn, count) {
  const resultArr = [];

  for (let i = 0; i < count; i++) {
    resultArr[i] = fn();
  }

  return resultArr;
}
