// Наша функция partial позволяет фиксировать только первые аргументы.
// Усовершенствуй ее, чтобы зафиксировать можно было любые аргументы, пропущенные аргументы обозначаются с помощью undefined:

// function test(a, b, c) {
//   return "a=" + a + ",b=" + b + ",c=" + c;
// }

// var test1_3 = partialAny(test, 1, undefined, 3);
// console.log(test1_3(5)); // a=1,b=5,c=3

// Solution 1:
// function partialAny(fn, ...args) {
//   return (...args2) => {
//     return fn(
//       ...args.map((arg) => (arg === undefined ? args2.shift() : arg)),
//       ...args2
//     );
//   };
// }

// Solution 2:
const partialAny = (fn, ...args) => {
  return (...args2) => {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < args.length) {
      let outerArg = args[i++];

      if (outerArg === undefined) {
        let innerArg = args2[j++];

        result.push(innerArg);
      } else {
        result.push(outerArg);
      }
    }

    while (j < args2.length) {
      let innerArg = args2[j++];

      result.push(innerArg);
    }

    return fn.apply(this, result);
  };
};
