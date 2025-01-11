const ligarDesligar = document.getElementById ("desligarLigar")

function ligar() {
    const imagem = document.getElementById("lampada")
    imagem.src = "ligada.jpg"
}

function desligarLigar() {
    if ( desligarLigar.textContent == `Ligar`) {
        ligar();
        botao.textContent = `Desligar`
    }
    
}

function quebrar() {
    const imagem = document.getElementById("lampada")
    imagem.src = "quebrada.jpg"
}
