//Crie uma função para verificar se um valor é Truthy

function verificaTruthy(x){
    if(!!x === true){
        return 'x é um valor verdadeiro';
    } else {
        return 'não é um valor verdadeiro';
    }
}

//Crie uma função matemática que retorne o tipo de 
//dado do argumento passado nela (typeof)

function verifica(x){
    if(typeof(x) === "number"){
        return `${x} é um typeof(x)`;
    } else{
        return `${x} é do tipo typeof(x)`;
    }
}


//AddEventListener é uma função nativa do Javascript
//o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function meuNome(){
    console.log("Renata do Valle")
}
document.addEventListener("scroll", meuNome);


// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do toal de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);

