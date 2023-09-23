let livro = {
    titulo: "Harry Potter",
    ano: 1997,
    volumes: 7,
    autor: "J. K. Rowling"
}

// Meu livro preferido é: Harry Potter.
console.log(`Meu livro favorito é: ${livro.titulo}.`);
console.log(`Ele infelizmente foi feito pela: ${livro.autor}.`);
console.log(`Ele foi criado em ${livro.ano} e tem um todo de ${livro.volumes} e um spin-off.`);

// Exemplo 2: objeto contendo array e outro objeto

let cliente = {
    nome: "Frederico",
    apelido: "Kiko",
    idade: 22,
    telefone: ["4002-8922", "11 90218-0321"],
    medidas: {
        peso: 75,
        altura: 1.74
    }
};

console.log( cliente.nome );
console.log( cliente.idade + " anos." );

// Acessando uma propriedade que também é array
console.log( cliente.telefone[1] );

// Acessando uma propriedade que também é um objeto
console.log( cliente.medidas.altura );

