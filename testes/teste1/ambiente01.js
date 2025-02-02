/*
let nome = "Thiago";
let sobrenome = "Santos";
let idade = 18;
let trabalho =  "programador";

function info( nome, sobrenome, idade, trabalho) {
    console.log(` o seu nome é: ${nome} ${sobrenome}, seu primeiro nome tem ${nome.length} letras, sua idade é ${idade} anos e voce trabalha, ou estuda, como ${trabalho}`);
}

info( nome, sobrenome, idade, trabalho);
*/

/*
let pessoas = [
    {
    nome: "Thiago",
    sobrenome: "Santos",
    idade: 18,
    trabalho: "Programador"
    },
    {
    nome: "Geovana",
    sobrenome: "Souza",
    idade: 17,
    trabalho: "Intérprete"
    }
]

function info(pessoa) {
    console.log(`O seu nome é ${pessoa.nome} ${pessoa.sobrenome}, voce tem ${pessoa.idade} anos, e trabalha (ou estuda) como ${pessoa.trabalho}`);
}

info(pessoas[0]);
info(pessoas[1]);
pessoas.forEach(info);
 */

let carros = [
    {
    marca: "Honda",
    modelo: "Civic Si 16v" ,
    ano: 2006
    },
    {
    marca: "Fiat",
    modelo: "uno",
    ano: 2010
    }
]

function mostrarCarros(carro) {
    console.log(`O carro é da marca ${carro.marca}, do modelo ${carro.modelo}, lançado no ano: ${carro.ano}`);
}

mostrarCarros(carros[1]);
mostrarCarros(carros[0]);
carros.forEach(mostrarCarros);