//Recebe uma quantidade de valores para avaliar
//Função exibe se cada valor é par ou ímpar

parOuImpar(15);
function parOuImpar(limite){
    for (i = 0; i <= limite; i++){
        if (i % 2 === 0){
           console.log(i," é par");
        }else {
            console.log(i," é ímpar");
        }       
    }
}