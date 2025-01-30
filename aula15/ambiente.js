let num = [5,4,3,2,1]

console.log(` nosso vetor é ${num}`)

num[3] = 9;

console.log(`agora nosso vetor tem ${num}`);

num.push(10)

console.log(num);

console.log(`nosso vetor tem ${num.length} elementos`);

console.log(`e em ordem crescente, os elementos se posicionam dessa forma: ${num.sort()}`)

console.log(`o primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(3);
console.log(`este valor se encontra na casa ${pos}`)