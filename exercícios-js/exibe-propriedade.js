//Criar método que lê uma propriedade de um objeto e se for string exibe a propriedade
const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Alguem',
    personagem : 'Thor'
}

propriedade(filme);
function propriedade(obj) {
    for (prop in obj){
        if (typeof obj[prop] === 'string'){
            console.log(prop,obj[prop]);
        }
    }
}