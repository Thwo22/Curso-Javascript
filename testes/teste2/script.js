let inputUser = document.getElementById(`nome`);
let nomes = [];

function adicionarNome() {
    
    let nome = inputUser.value.trim();
    if (nome == ``) {
        alert(`É necessario que se digite um nome!`)
    } else {
        nomes.push(nome);

        atualizarLista();

        inputUser.value = ``;
    }
}

function atualizarLista() {
    let lista = document.getElementsByClassName(`listaNomes`)[0];

    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li)
    });
}