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