var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var nivelgame = 1500

//Ajustar Nivel Do Game
var nivel = window.location.search    
var nivel = nivel.replace("?", "")

if (nivel == "dificil") {
    nivelgame = 1000
} else if (nivel === "insano") {
    nivelgame = 750
}

//Ajustar tamanho da imgaem
function ajusteTamanhoPalco () {
    altura = window.innerHeight
    largura = window.innerWidth
}
ajusteTamanhoPalco ()  
// Cronometro Do Game
var cronometro = setInterval (function() {
    tempo -= 1
    console.log(tempo)
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(geraMosquito)
        window.location.href = "vitoria.html"
    } else {
    document.getElementById("cronometro").innerHTML = tempo
    }
},1000)  


//Função para gerar um mosquito por vez e ajustar vidas
function mosquitorandom() {

    // remover mosquito se ja exister um
    if(document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove() 

        if (vidas > 3) {
            window.location.href = "gameover.html"
        } else {
        document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png."
        vidas++
        }
        
    }

// Posições aleatórias para o mosquito

var posicaox = Math.floor(Math.random() * largura - 90)
posicaox = posicaox < 0 ? 0 : posicaox

var posicaoy = Math.floor(Math.random() * altura - 90)
posicaoy = posicaoy < 0 ? 0 : posicaoy

console.log(posicaox, posicaoy)

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoRandom() + " " + ladorandom()
mosquito.style.left = posicaox + "px"
mosquito.style.top = posicaoy + "px"
mosquito.style.position = "absolute"
mosquito.id = "mosquito"
mosquito.onclick = function() {
    this.remove()
}
document.body.appendChild(mosquito)
}

// Função para gerar tamanhos aleatorios para o mosquito
function tamanhoRandom () {
    var classe = Math.floor(Math.random() * 3)

    switch(classe ) {
        case 0 :
            return "mosquito1"
        case 1 :
            return "mosquito2"
        case 2 :
            return "mosquito3"
    }
}
// Função para Mosquito olhar para lado diferentes
function ladorandom () {
    var classe = Math.floor(Math.random() *2)
    switch(classe) {
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"
    }
}

// Criação Mosquito



