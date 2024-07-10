let Pergunta1 = document.getElementById("pergunta2")
let Pergunta2 = document.getElementById("pergunta2")
let Pergunta3 = document.getElementById("pergunta3")
let Resultado = document.getElementById("pontuacao")


function calcularPontuacao(){
    if (Pergunta1.value == 2 || Pergunta2.value == 2 || Pergunta3.value == 2){
        alert("Selecione todas as respostas");
        
        return;
        
        
    }
    else{
        alert("Quiz Finalizado! Confira sua pontuação")
    }

    
    Resultado.value = (Number(Pergunta1.value) + Number(Pergunta2.value) + Number(Pergunta3.value))

    if(Resultado.value == 3){
        alert("Parabéns você acertou todas as perguntas!")
    }
    else{
        Resultado.value
    }

    
    

}
  