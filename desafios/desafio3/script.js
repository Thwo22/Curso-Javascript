function contar( ) {
    let inicio = document.getElementById("inicio").valueAsNumber
    let fim = document.getElementById("fim").valueAsNumber
    let passo = document.getElementById("passo").valueAsNumber
    let resposta = document.getElementById("res")
    let atual = inicio;

    while (atual<= fim) {
        resposta.innerHTML += `${atual} &#x1F449; `;
        atual += passo;
    }
}