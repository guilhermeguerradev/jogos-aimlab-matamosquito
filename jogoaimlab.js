var altura = 0
var largura = 0
var tempo = 120

//Ajustar tamanho da imgaem
function ajuste () {
   altura = window.innerHeight
   largura = window.innerWidth
   console.log(altura)
}
ajuste ()  

function ballsrandom() {

   // remover balls se ja exister uma
   if(document.getElementById("ball")) {
       document.getElementById("ball").remove() }

// Posições aleatórias

var posicaox = Math.floor(Math.random() * largura - 90)
posicaox = posicaox < 0 ? 0 : posicaox

var posicaoy = Math.floor(Math.random() * altura - 90)
posicaoy = posicaoy < 0 ? 0 : posicaoy


var ball = document.createElement('img')
ball.src = 'imagens/circle.png'
ball.style.left = posicaox + "px"
ball.style.top = posicaoy + "px"
ball.style.position = "absolute"
ball.style.height = "50px"
ball.style.width = "50px"
ball.id = "ball"
ball.onclick = function() {
    this.remove()
}
document.body.appendChild(ball)
}

var cronometro = setInterval (function() {
   tempo -= 1
   console.log(tempo)
   if (tempo < 0) {
       clearInterval(cronometro)
       clearInterval(gerarBolas)
       window.location.href = "aimlab.html"
   } else {
    document.getElementById("cronometro").innerHTML = tempo }
},1000) 
