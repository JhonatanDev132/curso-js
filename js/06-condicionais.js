/* Estruturas de controle Condicional 

    Comandos mais comuns:
    -if
    -else
    -elseif

    Operadores Relacionais:
    > maior que
    < menor que
    >= maior ou igual
    <= menor ou igual
    == igualdade
    != diferente
*/

let numero = 12;

if (numero > 10) {
    document.write(`eita cabra bom, ai sim`);
} else {
    document.write(`seu número não passa de 10 amigo, lhe falta ódio!`);
}

let aluno = "Bueno";

let nota1 = prompt(`Primeira nota: `);
let nota2 = prompt(`Segunda nota: `);
let media = (nota1 + nota2) / 2;

if (media => 7) {
    console.log(`O aluno ${aluno} está aprovado`)
} else {
    console.log(`${aluno} Reprovou mané!!`);
}