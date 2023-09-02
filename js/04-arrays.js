let alunos = ['Antônio', 'Jhonatan', 'Victor', 'Phelipe'];

/* O acesso aos dados individuais do array, é feito 
através do nome do array e do ÍNDICE correspondente
à posição do lado.*/

console.log(alunos[2]);
console.log(alunos[0]);

/* Exercicio */

let artistas = ['Arctic Monkeys', 'Post Malone', 'Harry Styles', 'The Strokes', 'The Weekend']

console.log(`Gosto bastante do ${artistas[3]} e o que menos gosto dos listados é o ${artistas[4]} mas muito bom também.`);

console.log("Gosto bastante do"+artistas[3]+" e o que menos gosto dos listados é o "+artistas[4]+" mas muito bom também.");

/* Matrizes (arrays com 2 ou mais dimensões) */

let linguagens = [
    ['HTML','CSS','JS'],
    ['PHP','ASP.Net','Java','Python']
];

console.log(linguagens[0][1]+" é para estilos.");

console.log(linguagens[1][0]+" é para back-end.");
