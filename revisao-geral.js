// Declarando variável
let livro = "Harry Potter";

// Declarando constante 
const autor = "J.K Rowling"

// Saída de dados
console.log(livro);
console.log(autor);

// Template Literal
console.log(`O livro ${livro} é muito massa zé.`);

// let nome = prompt("Qual o seu nome?");
// console.log(`Bem vindo(a) ${nome}`);

// Arrays (lista de dados INDEXADOS)
let comidas = ["Paçoca", "Brigadeiro", "Pizza"];

console.log(`Adoro ${comidas[0]} e ${comidas[2]}!`);

/* Objeto (listas de dados não INDEXADOS)
os dados são formados por propriedades com nome/valor */
let aluno = {
    nome: "Fulado",
    sobrenome: "da Silva",
    idade: 18
}

console.table(aluno);


console.log(`${aluno.nome} tem ${aluno.idade} anos.`);