'use strict';

const formulario = document.querySelector("form");
const campoNome = formulario.querySelector("#nome");
const campoNota1 = formulario.querySelector("#nota1");
const campoNota2 = formulario.querySelector("#nota2");


const tabela = document.querySelector("table");
const corpoTabela = tabela.querySelector("tbody");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    /* Verificando se a tabela está oculta,
    ou seja, se ela tem o atributo hidden */
    if(tabela.hasAttribute("hidden")){
        /* se estiver, então removemos o atributo
        e com isso a tabela volta a aparecer */
        tabela.removeAttribute("hidden");
    }

    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    let media = (nota1 + nota2) / 2;

    
    let situacao;  
    if(media >= 7) {
        situacao = "aprovado(a)";
    } else {
        situacao = "reprovado(a)";
    }


    /* Rotinas para criar uma nova linha e colunas
    para exibição dos dados no corpo da tabela */

    // 1) Criar elemento
    let linha = document.createElement("tr");

    // 2) Montar o conteúdo do elemento
    linha.innerHTML =   `<td>${nome}</td>
                        <td>${media}</td>
                        <td>${situacao}</td>`;

    // 3) Adicionar na área da página desejada
    corpoTabela.appendChild(linha);

    // resetar formulario
    formulario.reset();

    // Devolver o foco para o nome
    campoNome.focus();
    
    if (media > 7){
        linha.classList.add("aprovado");
    } else {
        linha.classList.add("reprovado");
    }
});