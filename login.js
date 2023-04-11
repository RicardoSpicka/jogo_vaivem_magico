const input = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const button = document.querySelector('.loginButton');
const form = document.querySelector('.players');
const player1 = document.querySelector('.jog1');
const player2 = document.querySelector('.jog2');
const player3 = document.querySelector('.jog3');

var botao1 = false;
var botao2 = false;

const validateInput = ({target}) => {
    if (target.value.length > 2){
        botao1 = true;
        input2.removeAttribute('disabled');
        verificaInputs(botao1, botao2);
        return;  
    }
}

const validateInput2 = ({target}) => {
    if (target.value.length > 2){
        botao2 = true;
        input3.removeAttribute('disabled');
        verificaInputs(botao1, botao2);
        return;     
    }
}

const verificaInputs = (botao1, botao2) =>{
    if ( botao1==true && botao2==true){
        button.removeAttribute('disabled');
    }
}

const handleSubmit = (event) =>{
    event.preventDefault();
    localStorage.setItem('player1',input.value);
    localStorage.setItem('player2',input2.value);
    localStorage.setItem('player3',input3.value);
    window.location = 'jogo.html';
}

input.addEventListener('input', validateInput);
input2.addEventListener('input', validateInput2);
form.addEventListener('submit', handleSubmit);


