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

// class Pessoa {
//  constructor(nome='', idade) {
//   this.nome = nome;
//   this.idade = idade;
//  }
//  saudacao() {
//   console.log(`olá, ${this.nome} e tenho ${this.idade}` );
//  }
// }
// let pessoa = new Pessoa();
// pessoa.saudacao();

// class Aluno extends Pessoa {
//  constructor() {
//   super('renata', 30); //acessa o construtor da classe pai
//   this.notas = { t1: 7, t2: 8, p1: 6, p2: 9 };
//  }
//  mediaPonderada() {
//   let m = this.notas.t1 * 2;
//   m += this.notas.t2 * 2;
//   m += this.notas.p1 * 3;
//   m += this.notas.p2 * 3;
//   m = m / 10;

//   return m;
//  }
// }

// let aluno = new Aluno();
// console.log("Aluno ", aluno.mediaPonderada());
// aluno.saudacao();

// function* testeGenerator() {
//  yield console.log("Teste 1");

//  yield console.log("Teste 2");
//  yield console.log("Teste 3");

//  return "Teste 4";
// }

// let meuGenerator = testeGenerator(); // obj iterador
// console.log(meuGenerator);
// meuGenerator.next();
// console.log("----------");
// meuGenerator.next();
// console.log("----------");
// meuGenerator.next();
// console.log("----------");
// console.log(meuGenerator.next());

