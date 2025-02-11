ativaMenu('menu_mol_adm_servicosprestados',true,[['menu_mol_adm_servicosprestados_cadastro','flush-collapseServicoPrestado']])

//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','formCadServico')

function cadastrarServico(){
  bloqueiaBtnCarregando('btnCadastrarServico')
  let obj = {
          "NOME":document.getElementById('nome').value,
          "VALOR":parseFloat(document.getElementById('valor').value),
          "DESCRICAO":document.getElementById('descricao').value,
          "TEMPO":document.getElementById('tempo').value
      }
  fazPost(URL_API,obj,"cadastraServicoPrestado",retornoCadastroServico,false,'btnCadastrarServico')
}
function retornoCadastroServico(objRetorno,erro){
  exibeMsgSucesso("Serviço Cadastrado Com Sucesso!")
  document.getElementById('nome').value = ""
  document.getElementById('valor').value = ""
  document.getElementById('descricao').value = ""
  document.getElementById('tempo').value = ""
}

