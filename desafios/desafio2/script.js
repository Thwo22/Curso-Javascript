function verificar() {
    let ano = new Date()
    let anoAtual = ano.getFullYear()
    let dataNascimento = document.getElementById(`dataDeNascimento`)
    let res = document.getElementById(`res`)

    if (dataNascimento === `` || Number(dataNascimento.value) > anoAtual ) {
        alert(`ERRO! verifique os dados e tente novamente`);
        return;
    } else {
        let fsex = document.getElementsByName(`sex`)
        let idade = anoAtual - Number(dataNascimento.value)
        let genero = ``
        let img = document.getElementById(`imagem`)

        if (fsex[0].checked) {
            genero = `mulher`
            if (idade >= 0 && idade <= 11 ) {
                //criança
                img.src = `imagens/menina.png`
            } else if ( idade <= 26 ) {
                //adolescente
                img.src = `imagens/adolescente-mulher.png`
            } else if ( idade <= 50 ) {
                //adulto
                img.src= `imagens/mulher-adulta.png`
            } else{
                //idoso
                img.src = `imagens/idosa.png`
            }
                
        } else if (fsex[1].checked) {
            genero = `homem`
            if (idade >= 0 && idade <= 11 ) {
                //criança
                img.src = `imagens/menino.png`
            } else if ( idade <= 26 ) {
                //adolescente
                img.src = `imagens/adolescente-homem.png`
            } else if ( idade <= 50 ) {
                //adulto
                img.src = `imagens/homem-adulto.png`
            } else{
                //idoso
                img.src = `imagens/idoso.png`
            }
        }
        res.style.textAlign =`center`
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        img.style.width = `200px`
    }

}