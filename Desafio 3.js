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