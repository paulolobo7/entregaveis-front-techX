# Semana 5 - Objetos, Dados e Assincronismo

Projeto com três partes, todas no `index.html` e no `app.js`. Para testar, abra o `index.html` no navegador (de preferência com o Live Server) e deixe o Console aberto (F12).

## Parte 1 - Pedidos

O array `pedidos` tem objetos com cliente, valor e status, incluindo casos inválidos de propósito (cliente vazio, valor zero, negativo e valor em string).

- `filter` valida cada pedido: cliente não vazio (com `trim()`), valor do tipo number e maior que 0.
- Outro `filter` pega só os pagos.
- `reduce` soma o total faturado, começando em 0.
- `map` com template literal e `toFixed(2)` gera textos como `Bia — R$ 120.00`.

O resultado aparece no Console.

## Parte 2 - Buscador de CEP

Formulário com campo de CEP que consulta a API ViaCEP usando `fetch` com `async/await`.

- O CEP é limpo com `trim()` e validado com a regex `/^\d{8}$/` (só 8 dígitos).
- Estados da tela:
  - **Carregando**: mostra "Buscando..." e desabilita o botão.
  - **Erro**: erro de rede ou HTTP (`!response.ok`) mostra mensagem de falha na conexão.
  - **Vazio**: se a API devolve a chave `erro`, mostra "CEP não encontrado.".
  - **Sucesso**: limpa o resultado anterior com `replaceChildren()` e cria `dt` e `dd` com `createElement` e `textContent` (Rua, Bairro, Cidade e UF).
- O botão volta a ser habilitado no `finally`.
- Bônus: os CEPs encontrados vão para um array `historicoCep` e são listados na tela.
- O `fetch` usa `AbortSignal.timeout(5000)` para não ficar pendurado se o servidor demorar.

## Parte 3 - Mini Pokédex

Busca por nome na PokéAPI com os mesmos quatro estados. O nome é validado (não pode ser vazio) e convertido para minúsculo. Mostra nome, imagem (`sprites.front_default`) e tipos. O erro 404 é tratado como "Pokémon não encontrado.", já que o `fetch` não rejeita sozinho em erro HTTP.

## Parte 4 - Reflexão

**Por que `Promise.all` pode ser mais rápido que vários `await` seguidos?**

Com vários `await` em sequência, o código espera cada requisição terminar antes de começar a próxima. Se cada uma demora 1 segundo, três requisições levam uns 3 segundos, porque os tempos se somam.

O `Promise.all` dispara todas as requisições de uma vez e espera todas terminarem juntas. Como elas andam em paralelo, o tempo total fica perto do tempo da mais lenta (uns 1 segundo, no mesmo exemplo), aproveitando melhor o tempo de rede. Isso só vale quando as requisições são independentes, ou seja, uma não precisa do resultado da outra.
