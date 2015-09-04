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
  /*Função para Validar o formulario*/
  function validarForm(){
   var f = document.cadastro;
    if (f.nome.value == ""){
      alert("O campo deve ser preenchido!");
      f.nome.style.backgroundColor="#a9b1b0";
      f.nome.style.color="#ffffff";
      f.nome.focus();
      return false;
    }
    if (f.telefone.value == ""){
      alert("O campo deve ser preenchido!");
      f.telefone.style.backgroundColor="#a9b1b0";
      f.telefone.style.color="#ffffff";
      f.telefone.focus();
      return false;
    }
    document.cadastro.submit();
  }
  /*Execução dos metodos*/
  validarForm();
  obterValor();
  guardaValor();
}

/*Função para redirecionar para o formulario de novo contato*/
function novoContato (){
  window.location.href="index.html";
}
