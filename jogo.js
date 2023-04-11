var shufflePlayers = []
var jogador1 = "", jogador2 = "", jogador3 = ""
var posJog1, posJog2, posJog3
var dado
var playerTurn = ""
var casaMago = 0; casaFantasma = 0, casaMago = 0
let casas =["um"]


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

    posJog1 = 0
    posJog2 = 0
    posJog3 = 0

    playerTurn = jogador1

    atualizaJogador()
}

//ATUALIZA O NOME DO JOGADOR NO PAINEL DIREITO//
function atualizaJogador(){
    const fulano = document.querySelector('.jogador')
    fulano.innerHTML = (playerTurn + ',')
}

function andar(id){

    var casaNova = document.getElementById(id)
    var casaAntigaMago =  document.getElementById(casaMago)
    var casaAntigaFantasma =  document.getElementById(casaFantasma)
    var casaAntigaDragão =  document.getElementById(casaMago)

    if (playerTurn == jogador1){
/*         casaNova.style.backgroundImage = "url('mago.png')" //add Personagem
        casaNova.removeEventListener('onclick', andar) //remove evento de andar
        casaNova.style.cursor = "none" //remove o ponteiro do cursor
        casaAntigaMago.style.backgroundImage = '' //remove o Personagem da casa antiga
        casaAntigaMago.addEventListener('onclick', andar)
        casaMago = id
        playerTurn = jogador2 */
    } else if (playerTurn == jogador2){
/*         casaNova.style.backgroundImage = "url('fantasma.png')"
        casaNova.removeEventListener('onclick', andar) //remove evento de andar
        casaNova.style.cursor = "none" //remove o ponteiro do cursor
        casaAntigaFantasma.style.backgroundImage = '' //remove o Personagem da casa antiga
        casaAntigaFantasma.addEventListener('onclick', andar)
        casaFantasma = id
        playerTurn = jogador3 */
    } else if (playerTurn == jogador3){
/*         casaNova.style.backgroundImage = "url('dragao.png')"
        casaNova.removeEventListener('onclick', andar) //remove evento de andar
        casaNova.style.cursor = "none" //remove o ponteiro do cursor
        casaAntigaDragão.style.backgroundImage = '' //remove o Personagem da casa antiga
        casaAntigaDragão.addEventListener('onclick', andar)
        casaDragao = id
        playerTurn = jogador1 */
    }
    /* atualizaJogador() */
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
