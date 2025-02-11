//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','formCadUsuario')

function cadastrarUsuario(){
  bloqueiaBtnCarregando('btnCadastrarUsuario')
  let obj = {
        //"USUARIO_CADASTRADO":{
          //"NOME":document.getElementById('nome').value,
          //"SOBRENOME":document.getElementById('sobreNome').value,
          "email":document.getElementById('email').value,
          //"EMAIL_CONFIRMA":document.getElementById('emailConfirm').value,
          "senha":document.getElementById('senha').value,
          //"DATA_NASC":document.getElementById('dataNasc').value,
          //"SEXO":document.getElementById('sexo').value,
          //"TEL":document.getElementById('tel').value,
          //"PERMITE_MSG":"S",
          //"CPF":document.getElementById('cpf').value
        //}
      }
  fazPost(URL_API_USUARIO,obj,"cadastro",retornoCadastroUsuario,false,'btnCadastrarUsuario')
}
function retornoCadastroUsuario(objRetorno,erro){
  if(!erro)
    exibeMsgSucesso(objRetorno.mensagem)//"Usuario Cadastrado Com Sucesso! - Verifique Seu Email para confirmar o Cadastro!")
}
