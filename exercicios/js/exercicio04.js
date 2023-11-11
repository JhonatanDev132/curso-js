let btAzul = document.getElementById("azul");
let btLaranja = document.getElementById("laranja");
let btRosa = document.getElementById("rosa");
let titulo = document.getElementById("titulo");
let body = document.body;

btAzul.addEventListener("click", functionAzul)
    function functionAzul(event){
        titulo.innerHTML = "<h2>Simboliza criatividade, juventude e alegria.</h2>";
        body.style.transition = "background-color 1s";
        body.style.backgroundColor = "#0062ff";
    }

btLaranja.addEventListener("click", functionLaranja)
    function functionLaranja(event){
        titulo.innerHTML = "<h2>Simboliza alegria, vitalidade, properidade e sucesso.</h2>";
        body.style.transition = "background-color 1s";
        body.style.backgroundColor = "#ffb300";
    }

btRosa.addEventListener("click", functionRosa)
    function functionRosa(event){
        titulo.innerHTML = "<h2>Simboliza romantismo, termura e ingenuidade.</h2>";
        body.style.transition = "background-color 1s";
        body.style.backgroundColor = "#fcb5f4";
    }