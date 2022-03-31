// Напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:

// let characters = [
//   { name: "barney", age: 36 },
//   { name: "fred", age: 40 },
// ];

// console.log(pluck(characters, 'name')); // ['barney', 'fred']

function pluck(objects, fieldName) {
  const result = [];
  for (let object of objects) {
    for (let key in object) {
      if (key === fieldName) {
        result.push(object[key]);
      }
    }
  }
  return result;
}
