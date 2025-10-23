//Desafio 1

//Criadas as variáveis definindo as velocidades de cada material
const velocidadeDiamente = 80
const velocidadeMadeira = 20 
const velocidadePedra = 40
const velocidadeFerro = 60

//Definindo qual será o bloco minerado
const blocoMinerar = "Madeira"

//Condicional imprimindo mensagem a depender do bloco escolhido para minerar
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

//Utilizados operadores aritméticos para calcular o dano
const danoBruto = danoEspada * forcaEncatamento 
const danoFinal = danoBruto - armaduraInimiga

//Operador aritmético simplificado, calculando a vida após dano
vidaInimiga -= danoFinal

/*Se o valor da variável vidaInimiga for menor ou igual a zero, será executado a mensagem de if.
Caso não, será impresso a mensagem de else. */
if(vidaInimiga <= 0){
    console.log('O Creeper foi derrotado! Você sobreviveu à explosão!')
} else {
    console.log(`O Creeper ainda está vivo com ${vidaInimiga} de vida. Corra!`)
}

//Desafio 3

//Criadas variáveis com tipos booleanos e number.
const temDiamantes = false
const nivelMesaCrafting = 3
const temGravetos = false
const temFerro = 8

//Condições necessárias para que o Crafting seja permitido, será possível caso não tenha gravetos ou o nível da mesa de crafting seja menor que 3, além de ter diamantes ou ter 8 ou mais ferros.

const condicional = (((!temGravetos) || (nivelMesaCrafting < 3)) && ((temDiamantes === true) || (temFerro >= 8)))
console.log(condicional)
// Utilizada a estrutura condicional if e else, sendo que se todas as variáveis forem true, será impresso no console a mensagem de if, e caso contrário a mensagem de else. 
if(condicional){
    console.log('Picareta de Diamante criada! Hora de buscar Obsidiana!')
} else{
    console.log('Faltam recursos ou as condições de crafting não são atendidas!')
}