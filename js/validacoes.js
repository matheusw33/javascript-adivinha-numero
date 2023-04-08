function verificaChute(chute){

    const numero = +chute;

    if(chute === "game over"){
        gameOver(chute);
    }

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Isso não é um numero.</div>'
        return
    }

    if (verificaMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    };
    if( numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3> O numero secreto era ${numeroSecreto}</h3>
            <button class="btn-reset" id="btn-reset">Jogar Novamente</button>
        `

    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angles-up"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angles-down"></i></div>
        `
    }

}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function verificaMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
    }

document.body.addEventListener("click", e =>{
    if(e.target.id == 'btn-reset'){
        window.location.reload();
    }
})

function gameOver(chute){
    document.body.innerHTML = `
            <h2>GAME OVER</h2>
            <h3>Aperte o botao abaixo e tente novamente.</h3>
            <button class="btn-reset" id="btn-reset">Jogar Novamente</button>
        `
}