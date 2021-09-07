//recebe a nota e a quantidade de falta de um aluno e retorna sua média com aprovado ou reprovado

let nota = prompt('Digite a nota do aluno:');
let faltas = prompt('Digite a quantidade de faltas do aluno:');

let media = 7;
let faltas_max = 10;

if (nota >= media && faltas <= faltas_max){
    document.write('Aprovado, sua nota foi ', nota, ' suas faltas foram: ', faltas);
} else {
    document.write('Reprovado, sua nota foi ', media, ' suas faltas foram: ', faltas);
}