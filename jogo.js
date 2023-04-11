var shufflePlayers = []
var jogador1 = "", jogador2 = "", jogador3 = ""
var posJog1, posJog2, posJog3
var dado
var playerTurn = ""
var casaMago = 0; casaFantasma = 0, casaMago = 0
let casas =["um"]
let images = ["dice-00.png", "dice-01.png", "dice-02.png", "dice-03.png", "dice-04.png", "dice-05.png", "dice-06.png"]

function carregaJogador(){
        const players = [localStorage.getItem('player1'), localStorage.getItem('player2'), localStorage.getItem('player3')]

        var player1 = document.querySelector(".jogUm")
        var player2 = document.querySelector('.jogDois')
        var player3 = document.querySelector('.jogTres')

        shufflePlayers = players.sort(() => Math.random() - 0.5)

        player1.innerHTML = shufflePlayers[0]
        player2.innerHTML = shufflePlayers[1]
        player3.innerHTML = shufflePlayers[2]

    iniciaJogo()
}

function iniciaJogo(){

    jogador1 = shufflePlayers[0]
    jogador2 = shufflePlayers[1]
    jogador3 = shufflePlayers[2]

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
