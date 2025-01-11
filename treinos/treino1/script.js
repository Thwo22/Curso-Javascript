function Calcular() {
    let anoNascimento = document.getElementById("dataDeNascimento").value;
    let tempo = new Date();
    let anoAtual = tempo.getFullYear();
    let resultado = anoAtual - anoNascimento
    let elemento = document.getElementById("resposta")

    
    if ( resultado >= 18 ) {
        resposta.innerHTML = `voce é maior de idade`
    } else {
        resposta.innerHTML = `voce é menor de idade` 
    }
} 