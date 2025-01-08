function carregar() {
    let mensagem = window.document.getElementById("msg")
    let img = document.getElementById("imagem")
    let hora = new Date()
    let agora = hora.getHours()
    msg.innerHTML = `Agora sao ${agora} horas.`
    
    //BOM DIA!
    if (agora >= 0 && agora <= 12 )
        img.src = "imagens/dia.jpg"
}



