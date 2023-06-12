// console.log("oi 2"),

// const imagens = document.querySelectorAll("exemplo-id");

// const teste = imagens.forEach((e) => {
//  return console.log(e);
// });
// console.log(imagens);

const arrayCursos = {
 boolean: true,
 color: "gold",
 number: 1,
 cursos: [
  {
   id: 1,
   materiaA: "materiaA",
   materiaB: "materiaB",
  },
  {
   id: 2,
   materiaA: "materiaC",
   materiaB: "materiaD",
  },
  {
   id: 3,
   materiaA: "materiaE",
   materiaB: "materiaF",
  },
 ],
};

let idReceived = 4;
// const teste = arrayCursos.filter((curso) => curso.id === idReceived);
// console.log(teste);

const randomNumbers = [10, 42, 84, 5];

const numbersGreateThan42 = randomNumbers.filter((iten) => iten > 37);
console.log(numbersGreateThan42);

const teste = arrayCursos.cursos.filter((curso) => curso.id === idReceived);

console.log(teste);
