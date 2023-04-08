const caixa = document.querySelector(".box");
const elementoChute = document.querySelector("#chute");

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event){

    const chute = event.results[0][0].transcript;
    exibeChute(chute);
}

function exibeChute(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
    verificaChute(chute);
}

recognition.addEventListener('end' , () => recognition.start());