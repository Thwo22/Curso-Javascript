let agora = new Date()
let hora = agora.getHours(); 

console.log(`agora são exatamente ${hora}`)
if (hora < 12) {
    console.log("bom dia") 
} else if ( hora <= 18) { 
    console.log("boa tarde")
} else if ( hora >= 19 && hora <= 23 ){
    console.log("boa noite")
} else if ( hora >= 24){
    console.log("boa madrugada")
}