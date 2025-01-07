function carregar() {
        let resposta = document.getElementsByClassName("res")
        let imagem = document.getElementById("Imagem")
        let agora = new Data()
        let anoAtual = agora.getFullYear()
        let anoNas = document.getElementsByClassName("txtdataNas").value;
        let sexo = document.getElementsById("txtgenF").value.toLowerCase();

        function verificar() {
            let idade = anoNas - anoAtual;
            
            if ( sexo == "mulher" ) {
            res.innerHTML(`voce é uma mulher de ${idade} anos de idade`)
            } else {
            res.innerHTML(`voce é um homem de ${idade} anos de idade`)
            }
        }
}