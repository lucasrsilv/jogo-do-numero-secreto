let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do Número Secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1","Acertou!");
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
        exibirTextoNaTela("p",`Você acertou o número secreto em ${tentativas} ${palavraTentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto é menor");
        } else {
            exibirTextoNaTela("p","O número secreto é maior");
        }
        tentativas ++;
        limparCampo();
        }
    }


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosEscolhidos == numeroLimite){
        listaDeNumerosSorteados = [];
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}


// let listaGenerica = [];
// console.log(listaGenerica);
// let linguagensDeProgramacao = ["Javascript","C","C++","Kotlin","Python"];
// console.log(linguagensDeProgramacao);

// linguagensDeProgramacao.push("Java","Ruby","GoLang")
// console.log(linguagensDeProgramacao)

// let listaUm = ["arroz","banana","ovo"]
// console.log(listaUm[0])

// let listaDois = ["Lucas", "Giuliana", "Marlene"]
// console.log(listaDois[1])

// let listaTres = ["1","2","3"]
// console.log(listaTres[listaTres.length -1])