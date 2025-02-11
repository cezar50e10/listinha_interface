ativaMenu('menu_mol_usu_ajuda',false)

//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','formAltCadUsuario')

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
            "SEXO":document.getElementById('sexo').value
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
  }

  
  function enviaDuvidaSAC(){
    bloqueiaBtnCarregando('btnEnviaDuvida')
    let obj = {
          "MENSAGEM":{
            "NOME":document.getElementById('nome').value+" "+document.getElementById('sobreNome').value,
            "EMAIL":document.getElementById('email').value,
            "MSG":document.getElementById('mensagemSAC').value
          }
        }
    fazPost(URL_API,obj,"duvidaSac",retornoEnviaDuvidaSAC,false,'btnEnviaDuvida')
  }

  function retornoEnviaDuvidaSAC(objRetorno,erro){
    exibeMsgSucesso("Sua Mensagem Foi Enviada Com Sucesso")
    document.getElementById('mensagemSAC').value = ""
  }