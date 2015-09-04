/*Variaveis globais */
var inpNome, inpTelefone;

function guardaDados (){
  /*Função que obtem os valores dos inputs no arquivo HTML*/
  function obterValor(){
    inpNome = document.getElementById('input-nome').value;
    inpTelefone = document.getElementById('input-telefone').value;
  }
  /*Função para guardar os valores no LocalStorage*/
  function guardaValor (){
   var lista = JSON.parse(localStorage.getItem('lista') ) || [];
    if (inpNome != "" && inpTelefone != ""){ /*Comparação para evitar a adição de contatos em branco*/
      lista.push({nome: inpNome, telefone: inpTelefone});
      localStorage.setItem('lista', JSON.stringify(lista));
      alert ("O contato foi salvo com sucesso!");
      window.location.href = "listaContatos.html"; /*Redireciona para a pagina desejada*/
    }else {
      alert ("Por favor preencha os dados para salvar ");
    }
  }
  /*Execução dos metodos*/
  obterValor();
  guardaValor();
}

/*Função para redirecionar para o formulario de novo contato*/
function novoContato (){
  window.location.href="index.html";
}
