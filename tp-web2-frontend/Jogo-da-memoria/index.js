const imagens = [
    "https://www.nintenderos.com/wp-content/uploads/2021/06/super-mario-nintendo-logo-..jpg",
    "https://www.nintenderos.com/wp-content/uploads/2021/06/super-mario-nintendo-logo-..jpg",
    "https://blogger.googleusercontent.com/img/a/AVvXsEiI76CnIpDQYYInfwS3mkfq-QJIRGr624LeDfd7MesRiuhBUmN8E6L-8Ab3xDFDIaMi-JjMUSKg0SJ5v-irKQOm6y-kp8byXvL0kFdEMclZOH_Fj3Pj1mahW9DVA83BU6c6kytrmaZNiUWFcpoCZUxEngIms3PpMWyfmhL3jAINS7INjfhaA-oivzrN=w1600",
    "https://blogger.googleusercontent.com/img/a/AVvXsEiI76CnIpDQYYInfwS3mkfq-QJIRGr624LeDfd7MesRiuhBUmN8E6L-8Ab3xDFDIaMi-JjMUSKg0SJ5v-irKQOm6y-kp8byXvL0kFdEMclZOH_Fj3Pj1mahW9DVA83BU6c6kytrmaZNiUWFcpoCZUxEngIms3PpMWyfmhL3jAINS7INjfhaA-oivzrN=w1600",
    "https://s2-techtudo.glbimg.com/wCmS9LT15oozxGL_FffcjVEeJXQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/i/G/4iCQAsT02B6jKt61AuBA/princesa-peach.png",
    "https://s2-techtudo.glbimg.com/wCmS9LT15oozxGL_FffcjVEeJXQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/i/G/4iCQAsT02B6jKt61AuBA/princesa-peach.png",
    "https://preview.redd.it/i-honestly-just-realized-that-waluigi-never-appeared-in-a-v0-7q5c8iy996y81.jpg?width=640&crop=smart&auto=webp&s=f8fe58469c22a358e99f3322b949af5b926d7f41",
    "https://preview.redd.it/i-honestly-just-realized-that-waluigi-never-appeared-in-a-v0-7q5c8iy996y81.jpg?width=640&crop=smart&auto=webp&s=f8fe58469c22a358e99f3322b949af5b926d7f41",
    "https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.aead314d58b63e27.png",
    "https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.aead314d58b63e27.png",
    "https://play.nintendo.com/images/profile-mk-wario.7bf2a8f2.aead314d58b63e27.png",
    "https://play.nintendo.com/images/profile-mk-wario.7bf2a8f2.aead314d58b63e27.png"
]


const backgroundCarta = "https://w0.peakpx.com/wallpaper/220/524/HD-wallpaper-mushroom-mario-trippy.jpg"

function embaralharImagens() {
    for (let i = imagens.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagens[i], imagens[j]] = [imagens[j], imagens[i]];
    }
}

embaralharImagens()

var cartaAnterior = null
var Score = 0
var contaMovimentos = 0

var segundos = 0
var divTemporizador = document.getElementById("temporizador")
setInterval(()=>{
    if(Score===6){
        return
    }
    segundos+=1
    divTemporizador.innerHTML = `${segundos}s`
}, 1000)

function atualizaContaMovimentos() {
    var divMovimentos = document.getElementById("movimentos")
    divMovimentos.innerHTML = contaMovimentos;
}
function atualizaScore() {
    var divScore = document.getElementById("score")
    divScore.innerHTML = Score;
}
   

function viraCarta(id) {
    var imagemDaCarta = document.getElementById(id)
    imagemDaCarta.src = imagens[parseInt(id) - 1]

    if (cartaAnterior === null) {
        cartaAnterior = imagemDaCarta
        return
    } else if (cartaAnterior.src === imagemDaCarta.src) {
        Score += 1
        atualizaScore()
        cartaAnterior = null
    } else {
        setTimeout(() => {
            imagemDaCarta.src = backgroundCarta
            cartaAnterior.src = backgroundCarta
            cartaAnterior = null
        }, 600)
    }
    contaMovimentos += 1
    atualizaContaMovimentos()
}