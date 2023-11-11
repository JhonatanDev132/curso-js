'use strict';

const pagina = document.querySelector("body");
const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector("#resultado");
const imagem = document.getElementById("imagem");
let body = document.querySelector("body");
let fausto = "imagens/faustao.gif";
let miseravi = "imagens/miseravi.gif";

/* Gerar valores aleatórios 
Usamos Math.random() * 11 para gerar valores 
entre 0 e 10, e passamos o valor para o parseInt
para descartar a parte "quebrada" do número, mantendo
apenas o valor inteiro. */
let numeroAleatorio = parseInt(Math.random() * 11);
console.log(numeroAleatorio);

/* Detectando o acionamento do formulário
para capturar e analisar o palpite */
formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let palpite = campoPalpite.value;

    console.log(palpite);

    // Comparando o palpite com o numero aleatorio do computador
    if( palpite == numeroAleatorio ){
        resultado.textContent = "Acertou miseravii!!🤣🤣";
        resultado.style.color = "blue";
        imagem.src = fausto;
        body.style.transition = "background-color 1s";
        body.style.backgroundColor = "#0062ff";

        // Redirecionamento usando "location"
        // location = "http://www.sp.senac.br";
    } else {
        resultado.textContent = "Errooouuuu!😜😜";
        resultado.style.color = "red";
        imagem.src = miseravi;
        body.style.transition = "background-color 1s";
        body.style.backgroundColor = "#ffb300";   

    }
})