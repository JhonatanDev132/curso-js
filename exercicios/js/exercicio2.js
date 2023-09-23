let pedido = {
    codigo: "3540",
    data: "23/09/2023",
    produtos : [
        "PC da Nasa",
        "Xbox Series X",
        "PS5"
    ],
    preco: 110600,
    prazo: [
        "Amanhã já ta em su casa",
        "Nunca chega",
        "Algum dia você vê"
    ]
}

let precoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.preco);



console.log(`Código: ${pedido.codigo}`)
console.log(`Data: ${pedido.data}`);
console.log(`Produto 1: ${pedido.produtos[0]}`);
console.log(`Produto 2: ${pedido.produtos[1]}`);
console.log(`Produto 3: ${pedido.produtos[2]}`);
console.log(`Preço: ${precoFormatado}`);
console.log(`Prazo: ${pedido.prazo[2]}`);
