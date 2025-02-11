ativaMenu('menu_mol_adm_usuarios',true,[['menu_mol_adm_usuario_cad','flush-collapseAdmUsuarios']])

//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','formCadUsuario')
mascaraCPF('cpf')
function cadastrarUsuario(){
  bloqueiaBtnCarregando('btnCadastrarUsuario')
  let obj = {
        "USUARIO_CADASTRADO":{
          "NOME":document.getElementById('nome').value,
          "SOBRENOME":document.getElementById('sobreNome').value,
          "EMAIL":document.getElementById('email').value,
          "EMAIL_CONFIRMA":document.getElementById('emailConfirm').value,
          "SENHA":document.getElementById('senha').value,
          "DATA_NASC":document.getElementById('dataNasc').value,
          "SEXO":document.getElementById('sexo').value,
          "TEL":document.getElementById('tel').value,
          "PERMITE_MSG":document.getElementById('permiteMsg').value,
          "CPF":document.getElementById('cpf').value
        }
      }
  fazPost(URL_API,obj,"cadastroUsuario",retornoCadastroUsuario,false,'btnCadastrarUsuario')
}
function retornoCadastroUsuario(objRetorno,erro){
  exibeMsgSucesso("Usuario Cadastrado Com Sucesso! - Solicite ao Usuario que Verifique Seu Email para confirmar o Cadastro!")
}