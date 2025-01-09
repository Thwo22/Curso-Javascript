function carregar() {
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`

    if (hora >= 0 && hora <= 11 ) {
        img.src = `imagens/dia.png`
        document.body.style.background = ` #FFD580`
    } else if (hora >= 12 && hora <= 18) {
        img.src = `imagens/tarde.png`
        document.body.style.background = `#FFA500`
    } else {
        img.src = `imagens/noite.png`
        document.body.style.background = `#0C1445`
    }
}