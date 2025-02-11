ativaMenu('menu_mol_usu_cadastro',false)

//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','formAltCadUsuario')
mascaraCPF('cpf')
function alterarCadastroUsuario(){
    bloqueiaBtnCarregando('btnAlteraCadastroUsuario')
    bloqueiaBtnCarregando('btnExcluiCadastroUsuario')
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
    fazPost(URL_API,obj,"alterarCadastroUsuario",retornoAlteraCadastroUsuario,true)
  }
  function retornoAlteraCadastroUsuario(objRetorno,erro){
    
    if(erro){
        exibeMsgErro(objRetorno['OBJETO_RETORNO'])
        desBloqueiaBtnCarregando('btnAlteraCadastroUsuario')
        desBloqueiaBtnCarregando('btnExcluiCadastroUsuario')
      }else{
        //console.log(objRetorno)
        if(objRetorno['CODIGO']==='01'){
          exibeMsgSucesso(objRetorno['MENSAGEM'])
          desBloqueiaBtnCarregando('btnAlteraCadastroUsuario')
          desBloqueiaBtnCarregando('btnExcluiCadastroUsuario')
        }
        if(objRetorno['CODIGO']==='02'){
          exibeMsgSucesso(objRetorno['MENSAGEM'])
          setTimeout(function(){
            deslogar()
          }, 5000);
        }
      }
  }
  trazUsuarioSession(preencheFormAlteracao)
  function preencheFormAlteracao(USUARIO_LOGADO,erro){
            document.getElementById('nome').value = USUARIO_LOGADO['PERFIL']['NOME']
            document.getElementById('sobreNome').value = USUARIO_LOGADO['PERFIL']['SOBRE_NOME']
            document.getElementById('email').value = USUARIO_LOGADO['USUARIO']
            document.getElementById('emailConfirm').value = USUARIO_LOGADO['USUARIO']
            document.getElementById('senha').value = USUARIO_LOGADO['SENHA']
            document.getElementById('dataNasc').value = USUARIO_LOGADO['PERFIL']['DATA_NASC']
            document.getElementById('sexo').value = USUARIO_LOGADO['PERFIL']['SEXO']
            document.getElementById('tel').value = USUARIO_LOGADO['PERFIL']['TEL']
            document.getElementById('permiteMsg').value = USUARIO_LOGADO['PERFIL']['PERMITE_MSG']
            document.getElementById('usuarioExcluido').textContent = USUARIO_LOGADO['USUARIO']
            document.getElementById('cpf').value = USUARIO_LOGADO['PERFIL']['CPF']
  }

  function excluirCadastroUsuario(){
    let obj=""
    bloqueiaBtnCarregando('btnAlteraCadastroUsuario')
    bloqueiaBtnCarregando('btnExcluiCadastroUsuario')
    fazPost(URL_API,obj,"excluirCadastroUsuario",retornoExcluiCadastroUsuario,true)
  }
  function retornoExcluiCadastroUsuario(objRetorno,erro){
    desBloqueiaBtnCarregando('btnAlteraCadastroUsuario')
    desBloqueiaBtnCarregando('btnExcluiCadastroUsuario')
    if(erro){
      exibeMsgErro(objRetorno['OBJETO_RETORNO'])
      desBloqueiaBtnCarregando('btnAlteraCadastroUsuario')
      desBloqueiaBtnCarregando('btnExcluiCadastroUsuario')
    }else{
        exibeMsgSucesso("Sua Conta Foi Excluida Com Sucesso! - Esperamos Que Volte Um Dia, Até Mais...")
        setTimeout(function(){
          deslogar()
        }, 5000);
    }
  }