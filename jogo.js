var shufflePlayers = []
var jogador1 = "", jogador2 = "", jogador3 = ""
var posMago, posFantasma, posDragao
var dado
var playerTurn = ""
var casaMago, casaFantasma, casaMago
var casaAtualMago = 101
var casaAtualFantasma = 102
var casaAtualDragao = 103
var test = false
var turns = 0
var casaAtualMagoEl
var casaAtualFantasmaEl
var casaAtualDragaoEl

var msg1 = 'é sua vez de jogar! Role o dado!'
var msg2 = 'é sua vez de jogar! Role o dado OU ande 1 casa!'
var msgDragao = '<br>Você pode andar 1 casa a mais do que saiu no dado.'
var msgFantasma = '<br>Você pode "pular" os cantos.'
var msgMago = '<br>Você pode jogar novamente se tirar 2 ou 5.'

let i = 0

casaAtualMagoEl = document.getElementById(casaAtualMago)
casaAtualFantasmaEl = document.getElementById(casaAtualFantasma)
casaAtualDragaoEl = document.getElementById(casaAtualDragao)


function carregaJogador(){
        var players = [localStorage.getItem('player1'), localStorage.getItem('player2'), localStorage.getItem('player3')]

        var aux1 = document.querySelector(".jogUm")
        var aux2 = document.querySelector('.jogDois')
        var aux3 = document.querySelector('.jogTres')
        var qtdade = 0

        shufflePlayers = players.sort(() => Math.random() - 0.5)

        var player1 = shufflePlayers[0]
        var player2 = shufflePlayers[1]
        var player3 = shufflePlayers[2]

        var novoPlayer = [player1, player2, player3]

        if (player1 == 0){
            criaJog2()
            criaJog3()
            qtdade = 2
            jogador1 = shufflePlayers[1]
            jogador2 = shufflePlayers[2]
        } else if (player2 == 0){
            criaJog1()
            criaJog3()
            qtdade = 2
            jogador1 = shufflePlayers[0]
            jogador2 = shufflePlayers[2]
        } else if (player3 == 0) {
            criaJog1()
            criaJog2()
            qtdade = 2
            jogador1 = shufflePlayers[0]
            jogador2 = shufflePlayers[1]
        } else {
            criaJog1()
            criaJog2()
            criaJog3()
            qtdade = 3
            jogador1 = shufflePlayers[0]
            jogador2 = shufflePlayers[1]
            jogador3 = shufflePlayers[2]
        }

    iniciaJogo()
}

function iniciaJogo(){

    var andaUm = document.querySelector('.walk')
    andaUm.setAttribute=('disable')

    playerTurn = jogador1
    casaAtualMagoEl.style.backgroundImage = 'url(mago.png)'
    casaAtualFantasmaEl.style.backgroundImage = 'url(fantasma.png)'
    casaAtualDragaoEl.style.backgroundImage = 'url(dragao.png)'

    atualizaJogador()
}

//ATUALIZA O NOME DO JOGADOR NO PAINEL DIREITO//
function atualizaJogador(){

    var bloq = document.querySelectorAll('.bege, .azul, .verde, .amarelo').forEach(function(td) {
        td.style.pointerEvents = 'none';
        td.style.cursor = 'pointer';
    })

    if ( turns < 7 ){
        console.log(turns)
        turns++
      } else {
        var btnAndarUm = document.querySelector('.walk')
        btnAndarUm.removeAttribute('disabled');
      }

    const jogador = document.querySelector('.jogador')
    jogador.innerHTML = (playerTurn + ', ')
    const frase = document.querySelector('.frase')
    let msg3
    if (jogador1 == playerTurn) msg3 = msgMago
    if (jogador2 == playerTurn) msg3 = msgFantasma
    if (jogador3 == playerTurn) msg3 = msgDragao
    turns < 7 ? frase.innerHTML = (msg1 + msg3) : frase.innerHTML = (msg2 + msg3)

}

function andar(id) {
            casaAtualMagoEl = document.getElementById(casaAtualMago)
            casaAtualFantasmaEl = document.getElementById(casaAtualFantasma)
            casaAtualDragaoEl = document.getElementById(casaAtualDragao)
            console.log("")
            const casaNova = document.getElementById(id)


             if (jogador1 == playerTurn)
                {




                    casaNova.style.backgroundImage = "url('mago.png')"
                    casaNova.innerHTML=""
                    casaAtualMagoEl.style.backgroundImage = ""
                    casaAtualMagoEl.innerHTML=`${casaAtualMago}`
                    casaAtualMago = id
                    playerTurn = jogador2
                    atualizaJogador()
                }
                else if (jogador2 == playerTurn)
                {


                    casaNova.style.backgroundImage = "url('fantasma.png')"
                    casaNova.innerHTML=""
                    casaAtualFantasmaEl.style.backgroundImage = ""
                    casaAtualFantasmaEl.innerHTML=`${casaAtualFantasma}`
                    casaAtualFantasma = id
                    playerTurn = jogador3
                    atualizaJogador()
                }
                else
                {


                    casaNova.style.backgroundImage = "url('dragao.png')"
                    casaNova.innerHTML=""
                    casaAtualDragaoEl.style.backgroundImage = ""
                    casaAtualDragaoEl.innerHTML=`${casaAtualDragao}`
                    casaAtualDragao = id
                    playerTurn = jogador1
                    atualizaJogador()
                }


}

function newPopup(){
    varWindow = window.open (
        'popup.html',
        'pagina',
        "width=1600px, height=900px, top=50, left=150, scrollbars=no " );

}

function rolarDado() {

    dado = 0;
    var elDado = document.getElementById("faceDado")
    dado = Math.floor(Math.random() * 6 + 1);

        switch(dado){
            case 1:
                elDado.src = "dice-01.png";
                break;
            case 2:
                elDado.src = "dice-02.png";
                break;
            case 3:
                elDado.src = "dice-03.png";
                break;
            case 4:
                elDado.src = "dice-04.png";
                break;
            case 5:
                elDado.src = "dice-05.png";
                break;
            case 6:
                elDado.src = "dice-06.png";
                break;
            default:
                break;
        }

        elDado.classList.add('.tremer')
}

criaJog1 = () => {
    var mago = document.createElement("img")
    mago.src = "mago.png"
    document.getElementById("ladoEsquerdo").appendChild(mago)

    var jog1 = document.createElement("h2")
    jog1.setAttribute("class", "jogTres")
    jog1.innerHTML = shufflePlayers[0]
    document.getElementById("ladoEsquerdo").appendChild(jog1)

}

criaJog2 = () => {
    var fantasma = document.createElement("img")
    fantasma.src = "fantasma.png"
    document.getElementById("ladoEsquerdo").appendChild(fantasma)

    var jog2 = document.createElement("h2")
    jog2.setAttribute("class", "jogDois")
    jog2.innerHTML = shufflePlayers[1]
    document.getElementById("ladoEsquerdo").appendChild(jog2)
}

criaJog3 = () => {
    var dragao = document.createElement("img")
    dragao.src = "dragao.png"
    document.getElementById("ladoEsquerdo").appendChild(dragao)

    var jog3 = document.createElement("h2")
    jog3.setAttribute("class", "jogTres")
    jog3.innerHTML = shufflePlayers[2]
    document.getElementById("ladoEsquerdo").appendChild(jog3)
}

andarUma = () => {

    if (jogador1 == playerTurn)
    {
        let casaNova
        casaAtualMago == 101 ? casaAtualMago = 0 : casaAtualMago
        let aux = parseInt(casaAtualMago) +1
        casaNova = aux
        casaNova = document.getElementById(aux)
        casaAtualMagoEl = document.getElementById(casaAtualMago)
        casaNova.style.backgroundImage = "url('mago.png')"
        casaNova.innerHTML = ""
        casaAtualMagoEl.style.backgroundImage = ""
        casaAtualMagoEl.innerHTML = `${casaAtualMago}`
        playerTurn = jogador2
        casaAtualMago = aux
        atualizaJogador()
    }
        else if (jogador2 == playerTurn)
    {
        let casaNova
        casaAtualFantasma == 102 ? casaAtualFantasma = 0 : casaAtualFantasma
        let aux = parseInt(casaAtualFantasma) + 1
        casaNova = aux
        casaNova = document.getElementById(aux)
        casaAtualFantasmaEl = document.getElementById(casaAtualFantasma)
        casaNova.style.backgroundImage = "url('fantasma.png')"
        casaNova.innerHTML = ""
        casaAtualFantasmaEl.style.backgroundImage = ""
        casaAtualFantasmaEl.innerHTML = `${casaAtualFantasma}`
        playerTurn = jogador3
        casaAtualFantasma = aux
        atualizaJogador()
    }
        else
    {
        let casaNova
        casaAtualDragao == 103 ? casaAtualDragao = 0 : casaAtualDragao
        let aux = parseInt(casaAtualDragao) + 1
        casaNova = aux
        casaNova = document.getElementById(aux)
        casaAtualDragaoEl = document.getElementById(casaAtualDragao)
        casaNova.style.backgroundImage = "url('dragao.png')"
        casaNova.innerHTML = ""
        casaAtualDragaoEl.style.backgroundImage = ""
        casaAtualDragaoEl.innerHTML = `${casaAtualDragao}`
        playerTurn = jogador1
        casaAtualDragao = aux

        atualizaJogador()
    }
}

/* verificaCasaOcupada = (casaNova) => {

    if (casaNova == casaAtualFantasma){
        posMago = Math.abs(casaAtualMago-casaAtualFantasma)
        posDragao = Math.abs(casaAtualDragao-casaAtualFantasma)
        console.log(`Diferença entre Mago e Fantasma -> ${posMago}`)
        console.log(`Diferença entre Dragao e Fantasma -> ${posDragao}`)
        casaAtualFantasma = casaNova-1
        casaAtualFantasmaEl = document.getElementById(casaAtualFantasma)
        casaAtualFantasmaEl.style.backgroundImage = "url('fantasma.png')"
        test = true
    } else if (casaNova == casaAtualDragao){
        posMago = Math.abs(casaAtualMago-casaAtualDragao)
        posFantasma = Math.abs(casaAtualFantasma-casaAtualDragao)
        console.log(`Diferença entre Mago e Fantasma -> ${posMago}`)
        console.log(`Diferença entre Dragao e Fantasma -> ${posFantasma}`)
        casaAtualDragao = casaNova-1
        casaAtualDragaoEl = document.getElementById(casaAtualDragao)
        casaAtualDragaoEl.style.backgroundImage = "url('dragao.png')"
        test = true
    } else if (casaNova == casaAtualMago){
        posDragao = Math.abs(casaAtualDragao-casaAtualMago)
        posFantasma = Math.abs(casaAtualFantasma-casaAtualMago)
        console.log(`Diferença entre Mago e Fantasma -> ${posMago}`)
        console.log(`Diferença entre Dragao e Fantasma -> ${posFantasma}`)
        casaAtualMago = casaNova-1
        casaAtualMagoEl = document.getElementById(casaAtualMago)
        casaAtualMagoEl.style.backgroundImage = "url('mago.png')"
        test = true
    } else {
        test = false
    }

} */
