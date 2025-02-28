const number = 5;
console.log(number);
let adicao = 2 + number;
console.log(adicao);

function mostrarIdentificar() {
    var number = 90;
    let text = "texto";
    const boleano = false;

    console.log(number);
    console.log(text);
    console.log(boleano);

    console.log(typeof number);
    console.log(typeof text);
    console.log(typeof boleano);
}

mostrarIdentificar();

function comparador( ) {
    let num1 = 10;
    let num2 = "10";

    if (num1 == num2) {
        console.log("sim, sao iguais");
    }

    if (num1 === num2 ) {
        console.log("sim, sao iguais");
    } else {
        console.log("na verdade há diferença...")
    }
}

comparador() 

/**/

let value = null;
let x = undefined;

console.log(typeof value);
console.log(typeof x);

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021
}

console.log(carro);
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);

var argumento = 10;
function checkType() {
    let valor = argumento;
    console.log(typeof argumento);
}

checkType();