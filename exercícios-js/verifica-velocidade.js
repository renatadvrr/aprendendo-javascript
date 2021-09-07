//Verifica a velocidade máxima 
//Velocidade até 70 = ok
//Velocidade acima de 70 = Acima da velocidade permitida
//a cada 5km acima do limite vc ganha 1 ponto na carteira
//se os pontos ficarem acima de 12 a carteria é bloqueada

function verificarVelocidade(velocidade) {
    const velMax = 70;
    if (velocidade > velMax){
        contaPnt = ((velocidade - velMax)/5);
        if (contaPnt > 12){
            return "Acima da velocidade permitida, sua carteria foi bloqueada pois você levou " + Math.floor(contaPnt) + " pontos na carteira";
        }
        return "Acima da velocidade permitida, vc levou " + Math.floor(contaPnt) + " pontos na carteira";
    }
    if (velocidade <= velMax){
        return "ok";
    }
}
// verificarVelocidade(70);