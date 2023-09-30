let nome = "Jhonatan";
let salario = 1700;
let p;
if (salario < 1500) {
    
    novoSalario = salario * 1.15;
    p = "15%"
} else if(salario <= 3000) {
    
    novoSalario = salario * 1.10;
    p = "10%"
} else {
    
    novoSalario = salario * 1.05;
    p = "5%"
}

let salarioReal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salario);

let salarioReajustadoReal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(novoSalario);

console.log(`${nome} o seu antigo salário era de ${salarioReal} e com o reajuste de ${p} ficou ${salarioReajustadoReal}.`);