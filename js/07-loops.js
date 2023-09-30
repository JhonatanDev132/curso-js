/* Principais comandos de repetição

- while     ENQUANTO
- do/while  FAÇA/ENQUANTO
- for       PARA

Obs.: Normalmente os comandos são controlados por meio de uma variável contadora.
*/

// Exemplo 1: While

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

// Exemplo 2: Do While

let contador2 = 1;

do {
    console.log(contador2);
    contador2++;
} while (contador2 <= 5);

// Exemplo 3: For

for (let contador3 = 1; contador3 <= 5; contador3++) {
    console.log(contador3);
}