//calcula m2 de um terreno

let largura = prompt('Digite a largura do terreno');
let comprimento = prompt('Digite o comprimento do terreno');

function calculaAreaTerreno(largura, comprimento){
    largura = parseFloat(largura);
    comprimento = parseFloat(comprimento);

    let area = largura * comprimento;
    return area;
}

let areaTerreno = calculaAreaTerreno(largura, comprimento);
document.write("O terreno possui "+ areaTerreno + " metros quadrados");