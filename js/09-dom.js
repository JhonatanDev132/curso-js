"use strict";

/* Funções/Métodos de seleção de elementos no DOM 

- getElementByID() 
Seleciona UM elemento através do ID

- querySelector()
Seleciona UM elemento através de seletores (mesma lógica do CSS)

- querySelectorAll
Seleciona VÁRIOS elementos ataravés de seletores (mesma lógica do CSS)

- 

*/
// Exemplo 1: getElementById()
const legenda = document.getElementById("legenda");
console.log(legenda);

// Exemplo 2: querySelector()
const titulo = document.querySelector("h1");
console.log(titulo);
const sobreFront = document.querySelector("#sobre");
console.log(sobreFront);

const backend = document.querySelector(".back");
console.log(backend);

const editorCodigo = document.querySelector("div h2");
console.log(editorCodigo);

// Exemplo 3: querySelectorAll()
/* Obs.: o retorno desta função é como um array */
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[1]);

const varios = document.querySelectorAll("p, a");
console.log(varios);

/* Modificando elementos no DOM
(Conteúdo, mudança de tag, cores, criação de elementos) */

// Alternando o conteúdo
legenda.textContent = "DOM - Hierarquia Geral";

// Alterando com suporte à HTML
sobre.innerHTML = "<i>Front-End</i>";

// CSS via JavaScript
backend.style.color = "red";
backend.style.textAlign = "center";

// CSS usando classes via JavaScript
titulo.classList.add("destaque");

let listaDeEditores = [
    "VSCode",
    "NotePad++",
    "Sublime Text",
    "Atom",
    "Dreamweaver",
    "VisualG",
    "Adobe"
];

const lista = document.querySelector(".lista");
console.log(lista);

// Percorrer o array usando o loop for/of

for (let programa of listaDeEditores) {
    
    // 1) criar um novo elemento <li>
    let item = document.createElement("li");

    // 2) Adicionar conteúdo ao novo elemento
    item.textContent = programa;

    // 3) Adicionar à lista
    lista.appendChild(item);
}

/* Acionando atributo à diversos elementos */
const linksReferencias = document.querySelectorAll(".referencias li a");
console.log(linksReferencias);

for (let link of linksReferencias) {
    // "setando/colocando" o atributo "target" com o valor "_blank"
    link.setAttribute("target", "_blank");
}

