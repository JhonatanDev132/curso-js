// Comentário em linha

        /* Comentário em bloco */
        
        console.log('Exemplo sintaxe geral');

        /* Váriáveis e Constantes são 
        espaços na memória RAM 
        para armazenamento de dados. */
    
        // Variveis
        var aluno = 'Jhonatan'; // Metódo antigo
        console.log(aluno);

        let produto = 'Monitor LG'; // Método novo
        console.log(produto);
        // Constantes
        const escola = 'Senac'
        console.log(escola);


        // Somente declaração

        let servico, prestador, unidade;

        // atribuição
        servico = "manutenção";
        prestador = "seu madruga";
        unidade = "Vila do Chaves";

        console.log(prestador, servico);

        /* Dados númericos */
        let ano = 2023; // inteiro
        let preco = 1950.42 // Decimal

        /* Operadores matemáticos
        + - / *    */
        let valor1 = 10;
        let valor2 = 5;

        let soma = valor1 + valor2;
        let subtracao = valor1 - valor2;
        let multiplicacao = valor1 * valor2;
        let divisao = valor1 / valor2;

        console.log(soma, subtracao, multiplicacao, divisao);


        // CONCATENAÇÃO
        console.log("Olá " + aluno + ", Bem-vindo ao " + escola + "!");

        // TEMPLATE LITERAL/STRING
        console.log(`Olá ${aluno} bem-vindo ao ${escola} !`);


        /* Sobre aspas (simples '' ou duplas "")
        Aspas são usadas para textos/strings */
        let estiloMusical_1 = "Rock n Roll"  // Correto
        // let estiloMusical_2 = 'Rock n roll' // Errado!
        let estiloMusical_3 = 'Rock "n" Roll' // Correto