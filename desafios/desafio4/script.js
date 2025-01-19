function tabuada() {
    let numero = document.getElementById("numero").valueAsNumber;
    

    if (isNaN (numero)) {
        alert(`Insira um nummero!`)
        return;
    }

    const container = document.getElementById(`tabuada`);
    container.innerHTML = ``;
    const tabuada = document.createElement(`ul`)

    for (let n = 1; n <= 10; n++) {
        const li = document.createElement(`li`)
        li.innerHTML = `${numero} x ${n} = ${numero * n}`
        tabuada.appendChild(li)
    }

    container.appendChild(tabuada);
}