var perguntaAtualIndex = 0
var contadorPontos = 0

function exibePergunta(){
    var perguntaAtual = arrayPerguntas[perguntaAtualIndex]
    
    const spanNumeroQuestao = document.getElementById("numero-questao")
    const paragrafoPergunta = document.getElementById("pergunta")

    const labelA = document.getElementById("labelA")
    const labelB = document.getElementById("labelB")
    const labelC = document.getElementById("labelC")
    const labelD = document.getElementById("labelD")

    spanNumeroQuestao.innerHTML = perguntaAtualIndex + 1
    paragrafoPergunta.innerHTML = perguntaAtual.pergunta

    labelA.innerHTML = perguntaAtual.alternativas['a']
    labelB.innerHTML = perguntaAtual.alternativas['b']
    labelC.innerHTML = perguntaAtual.alternativas['c']
    labelD.innerHTML = perguntaAtual.alternativas['d']
}

function verifica(event) {
    event.preventDefault()
    
    var spanPontos = document.getElementById("pontos")
    
    var alternativaSelecionada = event.target.elements.opcao.value

    if(!alternativaSelecionada){
        alert("selecione uma pergunta!")
        return
    }
    var perguntaAtual = arrayPerguntas[perguntaAtualIndex]
    var alternativaCorreta = perguntaAtual.resposta_correta
    
    if(alternativaSelecionada===alternativaCorreta){
      contadorPontos++
      spanPontos.innerHTML=contadorPontos
    }
    
    perguntaAtualIndex++
    
    if(perguntaAtualIndex<arrayPerguntas.length){
      exibePergunta()
    }else{
      alert("Você chegou no final do jogo")
      if(contadorPontos<5){
        alert("Você não sabe nada sobre a geografia do Brasil.")
      }else{
        alert("Parabéns, você é Brasileiro mesmo.")
      }
      return
    }
  }