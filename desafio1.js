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
   
