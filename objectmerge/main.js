// ES2018で追加されたオブジェクトのマージを行う...(spread構文)

const objectA = { a: "a" };
const objectB = { b: "b" };
const merge1 = {
  ...objectA,
  ...objectB,
};
// { a: 'a', b: 'b' }
console.log(merge1);

const objectC = { c: "c" };
const objectD = { c: "d" };
const merge2 = {
  ...objectC,
  ...objectD,
};
// { c: 'd' }
console.log(merge2);
