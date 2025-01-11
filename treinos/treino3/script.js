function calcular() {
    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)
    let resultado = document.getElementById("res")

    calculo = peso / (altura*altura);
    let valor = calculo.toFixed(1);

    if ( valor <= 18.5 ){
        res.innerHTML = `${nome} o seu IMC é de ${valor} e voce está abaixo do peso.`
    } else if ( valor >= 18.6 && valor <= 24.9){
        res.innerHTML = `${nome} o seu IMC é de ${valor} e voce está em um bom peso.`
    } else {
        res.innerHTML = `${nome} voce esta acima do peso...`
    }

}