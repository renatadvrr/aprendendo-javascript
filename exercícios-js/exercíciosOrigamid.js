// //Crie uma função para verificar se um valor é Truthy

// function verificaTruthy(x){
//     if(!!x === true){
//         return 'x é um valor verdadeiro';
//     } else {
//         return 'não é um valor verdadeiro';
//     }
// }

// //Crie uma função matemática que retorne o tipo de
// //dado do argumento passado nela (typeof)

// function verifica(x){
//     if(typeof(x) === "number"){
//         return `${x} é um typeof(x)`;
//     } else{
//         return `${x} é do tipo typeof(x)`;
//     }
// }

// //AddEventListener é uma função nativa do Javascript
// //o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// // utilize essa função para mostrar no console o seu nome completo
// // quando o evento 'scroll' ocorrer.

// function meuNome(){
//     console.log("Renata do Valle")
// }
// document.addEventListener("scroll", meuNome);

// // Corrija o erro abaixo

// var totalPaises = 193;
// function precisoVisitar(paisesVisitados) {
//     return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//     return `Já visitei ${paisesVisitados} do toal de ${totalPaises} países`;
// }

// precisoVisitar(20);
// jaVisitei(20);

/*function imc (peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}
imc (75, 1.58);
console.log(imc(75, 1.58))

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
function valorTruthy(valor) {
    if(typeof valor !== 'number') {
        return 'Digite um valor válido';
    } else {
        return true
        
    }
}
// crie uma função matemática que retorne o perímetro de um quadrado (l*4)

function perimetroQuadrado(lado) {
    const perimetroQuadrado = lado * 4;
    console.log(perimetroQuadrado);
} 

//Crie uma função que retorne seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome


// crie uma função que verifica se um numero é par

function par(numero) {
    
    if (numero%2 == 0) {
        return 'é par sim';
    } else {
        return 'né não';
    }
}

// crie uma função que retorne o tipo de dado

function tipoDado(dado) {
    return typeof(dado);
}

addEventListener('click', function () {
    console.log('Renata do Valle')
})

//verifique a distância da primeira imagem em relação ao topo da página

const img = document.querySelector('img');

 const distImg = img.offsetTop;

console.log(distImg);



//retorne a soma da largura de todas as imagens

function somaImagens() {
    
    const pegaImg = document.querySelectorAll('img');
    let soma = 0;

    pegaImg.forEach( (pegaImg) =>
    {
        soma += pegaImg.offsetWidth;
    });
    console.log(soma);
}

window.onload = function() {
    somaImagens();
}
/*/
//verifique se os links da página possuem o mínimo recomendado para telas utilizados com o dedo(48px/48px)

// let links = document.querySelectorAll('a');
// links.forEach(element => {
//     let linkWidth = element.offsetWidth;
//     let linkHeight = element.offsetHeight;
//     // let compara = (linkWidth & linkHeight) === 48 ? true : false
//     // console.log(compara)
//     // if(linkWidth < 48 && linkHeight < 48 ){
//     //     console.log('é menor que 48px ' +
//     //     'A width do elemento ' + 'é ' +linkWidth+ ' A height do elemento é ' +linkHeight)
//     // }
//     if (linkWidth > 48 && linkHeight > 48) {
//         console.log('é maior que 48px ' +
//         'A width do elemento ' + 'é ' +linkWidth+ ' A height do elemento é ' +linkHeight)
//     }
//     else{
//         console.log('elemento menor que 48px. '+ 'A width do elemento ' + 'é ' +linkWidth+ 'e a height do elemento é ' +linkHeight)
//     }
// });

/*/

//se o browser for menor que 726px, adicione a classe menu-mobile ao menu

const small = window.matchMedia('(max-widht: 720px)').matches;
if (small) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}

//eventos
//addEvntListener

const img = document.querySelector('img');

img.addEventListener('click', function() {
    console.log('clicou');
})

console.log(img);

*/

//Quando o usuário clicar nos links internos do site, adicione a classe
//ativo ao item clicado e remova dos demais items caso eles já possuam.
//Previna o comportamento padrão desses links.

/*const links = document.querySelector('a');
links.addEventListener('click', function() {
    console.log('clicou');
})
*/

//Selecione todos os elementos do site começando a partir do body,
//ao clique mostre exatamente quais elementos estão sendo clicados

// const elementosSite = document.querySelector("body");
// console.log(elementosSite);

// elementosSite.addEventListener("click", function (e) {
//  console.log(e.target);
// });

//Utilizando o código anterior, ao invés de mostrar no console,
//remova o elemento que está sendo clicado, o método remove()
//remove um elemento

//Se o usuário clicar na tecla(t), aumente todo o texto do site.


