//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','loginUsuario')

function login(){
  bloqueiaBtnCarregando('btnLoginUsuario')
  let obj = {
      //"USUARIO":{
          "email":document.getElementById('emailLogin').value,
          "senha":document.getElementById('senhaLogin').value
      //  }
      }
  fazPost(URL_API_USUARIO,obj,"login",retornoLogin,false,'btnLoginUsuario')
}
function retornoLogin(objRetorno,erro){
  if(!erro){
    //alert("parabens")
    includeHTML()
  }
}

function reenviaConfirmacao(){
  bloqueiaBtnCarregando('btnReenviaConfirmacaoEmail')
  bloqueiaBtnCarregando('btnLoginUsuario')
  let obj = {
      "EMAIL_CONFIRMACAO":document.getElementById('emailLogin').value
      }
  fazPost(URL_API,obj,"reenviaEmailConfirmacao",retornoReenviaConfirmacao,false,'btnLoginUsuario')
}

function retornoReenviaConfirmacao(objRetorno,erro){
  //nesse caso não desbloqueio o botão pq ele vai sumir na requisição
  //desBloqueiaBtnCarregando('btnReenviaConfirmacaoEmail')
  exibeMsgSucesso("Email de Confirmação Enviado Novamente! - Verifique Seu Email para confirmar o Cadastro!")
}

