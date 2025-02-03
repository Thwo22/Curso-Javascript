let numeros = []

function adicionar() {
    let valor = document.getElementById(`valor`).value.trim();
    let numero = Number(valor);
    
    if (numero && valor !== ``) {
        let lista = document.querySelector(`.lista-num`);
        let item = document.createElement(`li`);
        item.textContent = numero;
        lista.appendChild(item);
    } else {
        alert(`DIGITE UM NUMERO VÁLIDO!`);
    }
}

function finalizar() {
    let final = document.querySelector(`.res`);
    let paragrafo = document.createElement(`p`);
    paragrafo.textContent = `a ordem crescente dos numeros da sua lista é:${numeros.sort((a, b) => a - b)}`;
    final.appendChild(paragrafo);
}


