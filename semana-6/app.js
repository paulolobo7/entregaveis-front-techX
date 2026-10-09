const pedidos = [
  {  cliente: "João", valor: 100, status: "pendente" },
  {  cliente: "Maria", valor: 200, status: "pago" },
  {  cliente: "Pedro", valor: 300, status: "pago" },
  {  cliente: "Marcio", valor: 0, status: "pago" },
  {  cliente: "Manuele", valor: 300, status: "pago" },
  {  cliente: "Paulo", valor: -100, status: "pendente" },
  {  cliente: "   ", valor: 150, status: "pago" },
  {  cliente: "Lucas", valor: "80.00", status: "pago" },
  {  cliente: "Bia", valor: 120, status: "pago" },
];


const pedidosValidos = pedidos.filter(
  (p) => p.cliente.trim() !== "" && typeof p.valor === "number" && p.valor > 0
);

const pedidosPagos = pedidosValidos.filter((p) => p.status === "pago");

const totalFaturado = pedidosPagos.reduce((total, p) => total + p.valor, 0);

const textos = pedidosPagos.map((p) => `${p.cliente} — R$ ${p.valor.toFixed(2)}`);

console.log(pedidosPagos, totalFaturado, textos);



const formCep = document.querySelector("#form-cep");
const campoCep = document.querySelector("#cep");
const btnCep = document.querySelector("#btn-cep");
const statusCep = document.querySelector("#status-cep");
const resultadoCep = document.querySelector("#resultados-cep");
const listaHistorico = document.querySelector("#historico-cep");

const historicoCep = [];

function mostrarEndereco(dados) {
  resultadoCep.replaceChildren();

  const campos = [
    ["Rua", dados.logradouro],
    ["Bairro", dados.bairro],
    ["Cidade", dados.localidade],
    ["UF", dados.uf]
  ];

  campos.forEach(([rotulo, valor]) => {
    const dt = document.createElement("dt");
    dt.textContent = rotulo;
    const dd = document.createElement("dd");
    dd.textContent = valor || "-";
    resultadoCep.append(dt, dd);
  });
}

function mostrarHistorico() {
  listaHistorico.replaceChildren();
  historicoCep.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.cep} - ${item.rua}, ${item.cidade}/${item.uf}`;
    listaHistorico.append(li);
  });
}

async function buscarCep(cep) {
  statusCep.textContent = "Buscando...";
  btnCep.disabled = true;
  resultadoCep.replaceChildren();

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const dados = await response.json();

    if (dados.erro) {
      statusCep.textContent = "CEP não encontrado.";
      return;
    }

    mostrarEndereco(dados);
    statusCep.textContent = "";
    historicoCep.push({
      cep: dados.cep,
      rua: dados.logradouro,
      cidade: dados.localidade,
      uf: dados.uf,
    });
    mostrarHistorico();
  } catch (error) {
    statusCep.textContent = "Falha na conexão. Tente novamente.";
    console.error(error);
  } finally {
    btnCep.disabled = false;
  }
}

formCep.addEventListener("submit", (e) => {
  e.preventDefault();

  const cep = campoCep.value.trim().replace("-", "");

  if (!/^\d{8}$/.test(cep)) {
    statusCep.textContent = "CEP inválido. Digite 8 dígitos.";
    return;
  }
  buscarCep(cep);
});


// ===== Mini Pokédex =====

const formPoke = document.querySelector("#poke");
const campoPoke = document.querySelector("#pokemon");
const btnPoke = document.querySelector("#btn-poke");
const statusPoke = document.querySelector("#status-poke");
const resultadoPoke = document.querySelector("#resultados-poke");

function mostrarPokemon(dados) {
  resultadoPoke.replaceChildren();

  const titulo = document.createElement("h2");
  titulo.textContent = dados.name;

  const imagem = document.createElement("img");
  imagem.src = dados.sprites.front_default;
  imagem.alt = `Imagem de ${dados.name}`;

  const tipos = document.createElement("p");
  tipos.textContent = "Tipos: " + dados.types.map((t) => t.type.name).join(", ");

  resultadoPoke.append(titulo, imagem, tipos);
}

async function buscarPokemon(nome) {
  statusPoke.textContent = "Buscando...";
  btnPoke.disabled = true;
  resultadoPoke.replaceChildren();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nome)}`,
      { signal: AbortSignal.timeout(5000) }
    );

    if (response.status === 404) {
      statusPoke.textContent = "Pokémon não encontrado.";
      return;
    }

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const dados = await response.json();

    mostrarPokemon(dados);
    statusPoke.textContent = "";
  } catch (error) {
    statusPoke.textContent = "Falha na conexão. Tente novamente.";
    console.error(error);
  } finally {
    btnPoke.disabled = false;
  }
}

formPoke.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = campoPoke.value.trim().toLowerCase();

  if (nome === "") {
    statusPoke.textContent = "Digite o nome de um Pokémon.";
    return;
  }

  buscarPokemon(nome);
});