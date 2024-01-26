let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto')
    exibirTextoNaTela('p','Acerte um numero entre 1 e 10')
}
exibirTextoInicial()

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function verificarChute(){
    let chute = document.querySelector('input').value
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let textotentativa = `Parabéns, você descobriu o numero secreto ${chute} com ${tentativas} ${palavraTentativa}`
    
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1','🤩Acertou🤩')
        exibirTextoNaTela('p',textotentativa)

        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(chute>numeroSecreto){
            exibirTextoNaTela('h1','Errou')
            exibirTextoNaTela('p',`o numero é menor que ${chute}`)
        }else{
            exibirTextoNaTela('h1','Errou')
            exibirTextoNaTela('p',`o numero é maior que ${chute}`) 
        }
        limparCampo()
        tentativas++
    }
}

function jogarNovamente(){
    tentativas = 1
    exibirTextoInicial()
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function limparCampo(){
    let chute = document.querySelector('input')
    chute.value = ""
}




function gerarNumeroAleatorio(){
    return Math.floor(Math.random()*10+1)
}






