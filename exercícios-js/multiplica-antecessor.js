//recebe um número e retorna seus antecessores multiplicado por 2
let antecessor = prompt('digite um número:')
let x = 1;

do {
    document.write(x + '<br />');
    x = x * 3;
} while(x <= antecessor);