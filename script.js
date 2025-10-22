//Desafio 1

const velocidadeDiamente = 80
const velocidadeMadeira = 20 
const velocidadePedra = 40
const velocidadeFerro = 60
const blocoMinerar = "Obsidiana"

if(blocoMinerar === ("Obsidiana" || "Minério de Diamante")){
    console.log("Use picareta de Diamante, velocidade:", velocidadeDiamente)
}
else if(blocoMinerar === "Pedra"){
    console.log("Picareta de Ferro ou Pedra é o ideal:", velocidadePedra)
} 
else if(blocoMinerar === "Madeira") {
    console.log("Qualquer ferramenta funciona, mas a de Madeira é a mais simples")
}
else{
    console.log("Recurso não encontrado")
}

//Desafio 2

const danoEspada = 6 //(Dano Base)
const forcaEncatamento = 1.5 //(Multiplicador)
const armaduraInimiga = 2 //(Redução de Dano)
let vidaInimiga = 20 //(Vida do Creeper)

let danoBruto = danoEspada * forcaEncatamento
let danoFinal = danoBruto - armaduraInimiga

vidaInimiga -= danoFinal

if(vidaInimiga <= 0){
    console.log('O Creeper foi derrotado! Você sobreviveu à explosão!')
} else {
    console.log(`O Creeper ainda está vivo com ${vidaInimiga} de vida. Corra!`)
}

//Desafio 3

const temDiamantes = false
let nivelMesaCrafting = 2
const temGravetos = true
let temFerro = 8

const condicional = ((temGravetos === false) || (nivelMesaCrafting < 3)) && ((temDiamantes === true) || (temDiamantes >= 8)) 

if(condicional){
    console.log('Picareta de Diamante criada! Hora de buscar Obsidiana!')
} else{
    console.log('Faltam recursos ou as condições de crafting não são atendidas!')
}