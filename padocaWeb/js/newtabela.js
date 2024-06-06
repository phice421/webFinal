function adicionarEncomenda(encomenda) {
  // Obter os valores do objeto encomenda usando as propriedades corretas
  var nome = encomenda['nome-cliente'];
  var produto = encomenda['nome-produto'];
  var quantidade = encomenda.quantidade;
  var valorUnitario = encomenda['valor-unitario'];

  // Verificar se os valores são válidos
  if (!nome || !produto || isNaN(quantidade) || isNaN(valorUnitario)) {
      console.error("Erro: Dados da encomenda incompletos ou inválidos", encomenda);
      return;
  }

  // Calcular o total
  var total = quantidade * valorUnitario;

  // Obter a referência da tabela de encomendas
  var tabela = document.getElementById("tabela-encomendas").getElementsByTagName('tbody')[0];

  // Criar uma nova linha e células para a nova encomenda
  var novaLinha = tabela.insertRow();
  var colunaNome = novaLinha.insertCell(0);
  var colunaProduto = novaLinha.insertCell(1);
  var colunaQuantidade = novaLinha.insertCell(2);
  var colunaValorUnitario = novaLinha.insertCell(3);
  var colunaTotal = novaLinha.insertCell(4);

  // Inserir os valores nas células da nova linha, adicionando "R$" antes dos valores numéricos
  colunaNome.textContent = nome;
  colunaProduto.textContent = produto;
  colunaQuantidade.textContent = quantidade;
  colunaValorUnitario.textContent = "R$" + valorUnitario.toFixed(2);
  colunaTotal.textContent = "R$" + total.toFixed(2);

  // Limpar os campos do formulário após adicionar a encomenda
  document.getElementById("nome").value = "";
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("valor_unitario").value = "";
}



// criar alert para quando um campo do formulario estiver vazio e para salvar na tabela 





// Apagando uma linha na tabela com duplo clique
/* document.getElementById("tabela-encomendas").addEventListener("dblclick", function(event){
  if (event.target.tagName.toLowerCase() === "td"){
    var linha = event.target.parentNode;
    linha.parentNode.removeChild(linha);
  }
}) */

// Apagando uma linha na tabela com duplo clique versao prof
/* var encomendas = document.querySelectorAll(".cliente");
encomendas.forEach(function(linha){
  linha.addEventListener("dblclick", function(){
    this.remove();
  });
}); */

/******************************/
/*        AÇÕES NA TABELA     */
/******************************/
 var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){

  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
               //CAPTURA A TR DA TD QUE SOFREU O DBLCLICK E REMOVE
                event.target.parentNode.remove();
              }, 500);
                
});

