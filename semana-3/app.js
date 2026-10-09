// ===== Bloco 1 - Fundamentos e Variáveis =====

let pontos = 50;
pontos += 10;
console.log("Pontos:", pontos);

const MAX_PONTOS = 100;
try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro ao reatribuir const:", erro.name, "-", erro.message);
}

const texto = "JavaScript";
const numero = 42;
const booleano = true;
let indefinido;
const nulo = null;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof indefinido);
console.log(typeof nulo); // retorna "object", bug histórico da linguagem

const nomeAluno = "Paulo";
const idade = 20;

const fraseTemplate = `Olá, ${nomeAluno}! Você tem ${idade} anos.`;
const fraseConcat = "Olá, " + nomeAluno + "! Você tem " + idade + " anos.";
console.log(fraseTemplate);
console.log(fraseConcat);

// ===== Bloco 2 - Funções =====

// chamando antes da declaração: funciona por causa do hoisting
console.log("Antes da declaração:", ehMaiorDeIdade(20));

function ehMaiorDeIdade(anos) {
    return anos >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro na expressão:", erro.name, "-", erro.message);
}

const ehMaiorDeIdadeExpressao = function (anos) {
    return anos >= 18;
};

console.log("Depois da declaração:", ehMaiorDeIdadeExpressao(15));

function dobro(n) {
    return n * 2;
}

const dobroExp = function (n) {
    return n * 2;
};

const dobroSeta = (n) => n * 2;

console.log(dobro(4), dobroExp(4), dobroSeta(4));

function dobroPadrao(n = 1) {
    return n * 2;
}

console.log("Sem argumento:", dobroPadrao());
console.log("Com argumento:", dobroPadrao(7));

// ===== Bloco 3 - Controle de Fluxo =====

function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(classificarNota(7.5));
console.log(classificarNota(4));

const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
}

console.log("Tabuada do 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("Contagem regressiva:");
let contador = 5;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

console.log("Pares e ímpares com for:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i, "par");
    } else {
        console.log(i, "impar");
    }
}

console.log("Pares e ímpares com while:");
let num = 1;
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num, "par");
    } else {
        console.log(num, "impar");
    }
    num++;
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número inválido";
    }
}

console.log(diaDaSemana(3));
console.log(diaDaSemana(7));
console.log(diaDaSemana(9));
