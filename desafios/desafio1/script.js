function carregar() {
    let msg = window.document.getElementsById("msg")
    let img = document.getElementById("imagem")
    let hora = new Date()
    let agora = hora.getHours()
    msg.innerHTML = `Agora sao ${agora} horas.`
}

