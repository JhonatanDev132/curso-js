// Exemplo 1: manipulado do DOM
/* $() significa "função JQuery" */
const titulo = $("h1");
const subtitulos = $("h2");

console.log(titulo);
console.log(subtitulos);

// Modificando elementos
titulo.text("Bem-vindo JQuery!")
titulo.html("<i>Bem-vindo JQuery!</i>")

// Acessando determinados elementos selecionados
console.log($(subtitulos).eq(0).text() );
console.log($(subtitulos).eq(1).text() );

const sub1 = $(subtitulos).eq(0);
const sub2 = $(subtitulos).eq(1);

sub1.css("color", "red");
sub2.css("text-tranform", "uppercase");

titulo.css({
    "color" : "purple",
    "text-align" : "center",
    "font-family" : "Geneva "
})

// Aplicando classe a um elemento
const classicRock = $("h3");
classicRock.addClass("destaque");

/* Exemplo 2: DOM e Evento */
const pagina = $("body");
const formulario = $("form");
const nome = $("#nome");
const tema = $("#tema")

// Manipular evento
formulario.on("submit", function(event){
    event.preventDefault();

    // Capturando os dados
    let usuario = nome.val();
    let cor = tema.val();

    /* obtendo o texto/nome da cor da opção e selecionda */
    let textoDaCor = tema.find("option:selected").text();

    // Aplicando a cor na página
    pagina.css("background-color", cor);
    
    // Personalizando o titulo
    titulo
    .hide()
    .html(`Olá <b>${usuario}</b>, você escolheu ${textoDaCor}`)
    .fadeIn(6000)
});