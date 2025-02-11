//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','loginUsuario')

trazAgendamentoPorId();
function trazAgendamentoPorId(){
  var urlAtual = window.location.href;
  var urlClass = new URL(urlAtual);
  var codId = urlClass.searchParams.get("codId");
  // atob() decodifica Base64
  // ctob() codifica Base64
  let obj = {
      "ID":atob(codId)
      }
  fazPost(URL_API,obj,"trazAgendamentoPorId",retornoTrazAgendamentoPorId,false)
}


function retornoTrazAgendamentoPorId(objRetorno,erro){
  objRetorno = objRetorno[0];
  //console.log(objRetorno);
  let conteudo
  conteudo = "Olá "+objRetorno['PACIENTE']['PERFIL']['NOME']+" "+objRetorno['PACIENTE']['PERFIL']['SOBRE_NOME']+"\n\n"+
  "Você vai comparecer a consulta marcada com "+objRetorno['FUNCIONARIO']['PERFIL']['NOME']+" "+objRetorno['FUNCIONARIO']['PERFIL']['SOBRE_NOME']+"\n\n"+
  "Para realizar o procedimento de "+objRetorno['SERVICO']['NOME']+"\n\n"+
  "Marcado Para "+dataHoraFormatada(objRetorno['DATA_INICIO'])
  document.getElementById("descricaoConsulta").value = conteudo;
    
}
let confirmacao;
function confirmarComparecimento(confirma){
  confirmacao=confirma;
  let obj = {
      "USUARIO":{
          "USUARIO":document.getElementById('emailLogin').value,
          "SENHA":document.getElementById('senhaLogin').value,
        }
      }
  fazPost(URL_API,obj,"verificaExisteLogin",retornoVerificaExisteLogin,false)
}
function retornoVerificaExisteLogin(objRetorno,erro){
  if(erro){}
  else{
    var urlAtual = window.location.href;
    var urlClass = new URL(urlAtual);
    var codId = urlClass.searchParams.get("codId");
    let obj = {
      "ID":atob(codId),
      "CONFIRMA":confirmacao,
      "EMAIL":document.getElementById('emailLogin').value
      }
    fazPost(URL_API,obj,"confirmacaoAgendamento",retornoConfirmacaoAgendamento,false)
  }
}


function retornoConfirmacaoAgendamento(objRetorno,erro){
  if(erro){}
  else{
    if(confirmacao){
      exibeMsgSucesso("Obrigado por confirmar a presença na consulta! Esperamos por voce!");
    }else{
      exibeMsgSucesso("Obrigado por informar o cancelamento da consulta! Entre em contato com o consultorio para reagendar!");
    }
  }
}

