// destructuring no contexto de objetos

// let produto = {
//  description: "Notebook",
//  preco: 2500,
//  detalhes: {
//   fabricante: "asus",
//   modelo: "FDS2",
//   facbricacao: "data",
//  },
// };

// let {description, preco} = produto
// console.log(produto)

// // renomear as variáveis
// let {description: descricao, preco: price} = produto
// console.log(descricao, price)

//valores default para lidar com atributos undefined

// let { description: descricao, preco: price = 0, desconto =5 } = produto;
// console.log(desconto);

//extrair atributos de objetos pertences a atributos de objetos
// let {
//  description,
//  detalhes: { fabricante, modelo },
// } = produto;
// console.log(description, fabricante, modelo);

// destructuring no contexto de array

// let arr = [10, 20, 30, 40, 15];

// function test(a, b) {
//  console.log(a, b);
// }
// function test([a, b]) { //desestruturing
// function test([a, b, , c]) { //pular valores
// function test([a, b, , c, d = "não existe"]) {
//  //pular valores
//  console.log(a, b, c, d);
// }
// // test(arr);

// let obj = {
//  a: 10,
//  b: 20,
//  c: 30,
//  d: 40,
// };

// function test2({a, b}) {
//         console.log(a,b)
// }
// test2(obj)

// destructuring no contexto rest - condensar índices de um array ou atributo de um obj

//array
// let [a, ...x] = arr
// console.log(a, x)

// let {a, ...x} = obj
// console.log(a,x)

