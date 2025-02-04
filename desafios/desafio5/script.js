let numeros = []
let res = document.querySelector(`.res`);

function adicionar() {
    let valorDigitado = document.getElementById(`valor`).value.trim();
    let numero = Number(valorDigitado);
    
    if (numero && valorDigitado !== ``) {
        numeros.push(numero);
        let lista = document.querySelector(`.lista-num`);
        let item = document.createElement(`li`);
        item.textContent = numero;
        lista.appendChild(item);
        res.innerHTML = ``
    } else {
        alert(`DIGITE UM NUMERO VÁLIDO!`);
    }
    valor.value = `` 
    valor.focus()
}

function finalizar() {
    if (numeros.length == 0) {
        alert(`Adicione um numero antes de finalizar`);
    } else {
    let maior = numeros[0];
    let menor = numeros[0];
    let soma = 0
    let media = 0


    for(let pos in numeros) {
        soma += numeros[pos]
        if(numeros[pos] > maior)
            maior = numeros[pos]
        if (numeros[pos] < menor)
            menor = numeros[pos]
    }
    let total = numeros.length
    media = soma/total;

    res.innerHTML = ``
    res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>A soma total do svalores informados é: ${soma}</p>`
    res.innerHTML += `<p>A média dos valores informados é: ${media}</p>`

    }
}




