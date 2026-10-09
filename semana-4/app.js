// ===== Bloco 1 - Arrays e Métodos =====

const nomes = ["Ana", "Bruno", "Carla"];

nomes.forEach((nome) => {
    console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log(nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];

const precosAcima20 = precos.filter((preco) => preco > 20);
console.log("Preços acima de 20:", precosAcima20);

const somaPrecos = precos.reduce((total, preco) => total + preco, 0);
console.log("Soma dos preços:", somaPrecos);

const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Caneta", preco: 4 },
    { nome: "Mochila", preco: 120 },
    { nome: "Estojo", preco: 30 },
];

console.log("Nomes:", produtos.map((produto) => produto.nome));

const produtosBaratos = produtos.filter((produto) => produto.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos.length);

const somaProdutos = produtos.reduce((soma, produto) => soma + produto.preco, 0);
console.log("Soma dos produtos:", somaProdutos);

produtosBaratos.forEach((produto) => {
    console.log(`${produto.nome}: R$ ${produto.preco}`);
});

// ===== Bloco 2 - Manipulação do DOM =====

const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog de Paulo";

const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((paragrafo) => {
    console.log(paragrafo.textContent);
});

const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Item do innerHTML 1</li><li>Item do innerHTML 2</li>";

const novoItem = document.createElement("li");
novoItem.textContent = "Terceiro item";
lista.append(novoItem);

novoItem.classList.add("destaque");
console.log("Tem a classe destaque?", novoItem.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach((tarefa) => {
    const li = document.createElement("li");
    li.textContent = tarefa;
    lista.append(li);
});

document.querySelectorAll("li")[0].classList.add("feito");
console.log("Total de itens na lista:", document.querySelectorAll("li").length);

// ===== Bloco 3 - Eventos e Event Delegation =====

const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => {
    console.log(campoNome.value);
});

// um listener só na lista, em vez de um em cada li
lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log(e.target.textContent);
    }
});

// item criado por JS também responde ao clique, por causa da delegação
const itemExtra = document.createElement("li");
itemExtra.textContent = "Item criado por JS (clique em mim)";
lista.append(itemExtra);

const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const textoTarefa = campoTarefa.value.trim();
    if (textoTarefa === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = textoTarefa;
    lista.append(li);

    campoTarefa.value = "";
});
