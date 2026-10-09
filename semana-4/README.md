# Semana 4 - Arrays, DOM e Eventos

Página simples de blog que mostra a manipulação de arrays, do DOM e de eventos em JavaScript.

Para ver funcionando, abra o `index.html` no navegador e deixe o Console aberto (F12).

## Arrays e métodos

- **forEach**: percorre o array sem criar outro. Foi usado para imprimir "Olá, nome!" e os produtos no console.
- **map**: cria um novo array transformando cada item. Foi usado para deixar os nomes em maiúsculas e para extrair só os nomes dos produtos.
- **filter**: cria um novo array só com os itens que passam na condição, como preços acima de 20 ou produtos com preço menor que 50.
- **reduce**: junta todos os valores em um único resultado. Foi usado para somar os preços.

Esses métodos não alteram o array original, sempre retornam um novo (exceto o forEach, que não retorna nada útil).

## Manipulação do DOM

- `querySelector` pega o primeiro elemento que bate com o seletor. `querySelectorAll` pega todos.
- `textContent` troca ou lê só o texto do elemento, sem interpretar HTML (mais seguro).
- `innerHTML` interpreta tags HTML. Foi usado para inserir dois itens na lista.
- `createElement` cria um elemento novo, que depois é colocado na página com `append`.
- `classList.add`, `classList.toggle` e `classList.contains` mexem nas classes CSS do elemento.

## Eventos e Event Delegation

- `addEventListener` escuta um evento (click, mouseover, keyup, submit).
- O listener de `click` foi colocado na `ul` e não em cada `li`. Quando o usuário clica, o evento sobe até a lista e o `e.target` diz qual item foi clicado.
- Isso é o Event Delegation. Ele é importante porque os itens criados depois, com JavaScript, também respondem ao clique sem precisar de um listener novo para cada um. Além disso, é uma forma mais leve de tratar muitos elementos.
- No formulário, `e.preventDefault()` impede que a página recarregue ao enviar. O texto é lido com `trim()` para ignorar espaços, e se estiver vazio nada é adicionado.
