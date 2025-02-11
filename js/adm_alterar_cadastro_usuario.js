ativaMenu('menu_mol_adm_usuarios',true,[['menu_mol_adm_usuario_alt','flush-collapseAdmUsuarios']])

//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','formAltCadUsuario')
mascaraCPF('cpf')
function alterarCadastroUsuario(){
    bloqueiaBtnCarregando('btnAlteraCadastroUsuario')
    bloqueiaBtnCarregando('btnVoltaListaUsuario')
    let obj = {
          "USUARIO_ALTERADO":{
            "NOME":document.getElementById('nome').value,
            "SOBRENOME":document.getElementById('sobreNome').value,
            "EMAIL":document.getElementById('email').value,
            "EMAIL_CONFIRMA":document.getElementById('emailConfirm').value,
            "SENHA":document.getElementById('senha').value,
            "DATA_NASC":document.getElementById('dataNasc').value,
            "SEXO":document.getElementById('sexo').value,
            "TEL":document.getElementById('tel').value,
            "PERMITE_MSG":document.getElementById('permiteMsg').value,
            "STATUS":document.getElementById('status').value,
            "ID":document.getElementById('idUsu').value,
            "CPF":document.getElementById('cpf').value
          }
        }
    fazPost(URL_API,obj,"alterarCadastroUsuarioADM",retornoAlteraCadastroUsuario,true)
  }
  function retornoAlteraCadastroUsuario(objRetorno,erro){
    
    if(erro){
        exibeMsgErro(objRetorno['OBJETO_RETORNO'])
        desBloqueiaBtnCarregando('btnAlteraCadastroUsuario')
        desBloqueiaBtnCarregando('btnVoltaListaUsuario')
      }else{
        //console.log(objRetorno)
        if(objRetorno['CODIGO']==='01'){
          exibeMsgSucesso(objRetorno['MENSAGEM'])
        }
        if(objRetorno['CODIGO']==='02'){
          exibeMsgSucesso(objRetorno['MENSAGEM'])
        }
        setTimeout(function(){
          document.location.reload(true);
        }, 5000);
      }
  }
  
  listaUsuariosCompletosCadastrados()
  function listaUsuariosCompletosCadastrados(){
    let obj = ""
    fazPost(URL_API,obj,"listaUsuariosCompletosCadastrados",retornoListaUsuariosCompletosCadastrados,false)
  }
  function retornoListaUsuariosCompletosCadastrados(usuarios,erro){
       
    let tabela = document.querySelector("#tabelaListaUsuario");
    tabela.innerHTML="";
    for(let i = 0;i < usuarios.length;i++){  
      //console.log(usuarios[i]);

      let linha = document.createElement("tr");
        
      let colunaBtn = document.createElement("td");
      let btnVisualiza = document.createElement("btn")
      let iconMao = document.createElement("img")
      iconMao.setAttribute('src', '../image/bootstrap-icons-1.8.3/hand-index.svg')
      iconMao.setAttribute('width', '25')
      iconMao.setAttribute('height', '25')

      //let textoBtn = document.createTextNode("X");
      btnVisualiza.appendChild(iconMao)
      btnVisualiza.classList.add('btn')
      btnVisualiza.classList.add('btn-outline-info')
      
      btnVisualiza.setAttribute('onclick', 'trazUsuarioPorIdPesq('+usuarios[i]['ID']+')')

      colunaBtn.appendChild(btnVisualiza)

      let colunaNome = document.createElement("td");
      let textoNome = document.createTextNode(' '+usuarios[i]['PERFIL']['NOME']);
      colunaNome.appendChild(textoNome)

      let colunaSobreNome = document.createElement("td");
      let textoSobreNome = document.createTextNode(' '+usuarios[i]['PERFIL']['SOBRE_NOME']);
      colunaSobreNome.appendChild(textoSobreNome)

      let colunaEmail = document.createElement("td");
      let textoEmail = document.createTextNode(' '+usuarios[i]['USUARIO']);
      colunaEmail.appendChild(textoEmail)

      let colunaDataNasc = document.createElement("td");
      let textoDataNasc = document.createTextNode(' '+dataFormatada(usuarios[i]['PERFIL']['DATA_NASC']));
      colunaDataNasc.appendChild(textoDataNasc)


      linha.appendChild(colunaBtn); 
      linha.appendChild(colunaNome); 
      linha.appendChild(colunaSobreNome); 
      linha.appendChild(colunaEmail); 
      linha.appendChild(colunaDataNasc); 
      
      linha.setAttribute('id','idLinhaTabUsu'+i)
      tabela.appendChild(linha);
    }
    adicionaPesquisaEmTabelasStaticas('pesquisa','tabelaDeUsuario')
  }
function trazUsuarioPorIdPesq(id){
  trazUsuarioPorId(id,retornoTrazUsuarioPorIdPesq)
}
function retornoTrazUsuarioPorIdPesq(objRetorno,erro){
  if(!erro){
    preencheFormAlteracao(objRetorno)
    let area_lista_cadastro_usuario = document.getElementById('area_lista_cadastro_usuario')
    let area_altera_cadastro_usuario = document.getElementById('area_altera_cadastro_usuario')

    area_lista_cadastro_usuario.classList.add('visually-hidden')
    area_altera_cadastro_usuario.classList.remove('visually-hidden')
  }
}
function preencheFormAlteracao(USUARIO){
  document.getElementById('nome').value = USUARIO['PERFIL']['NOME']
  document.getElementById('sobreNome').value = USUARIO['PERFIL']['SOBRE_NOME']
  document.getElementById('email').value = USUARIO['USUARIO']
  document.getElementById('emailConfirm').value = USUARIO['USUARIO']
  document.getElementById('senha').value = USUARIO['SENHA']
  document.getElementById('dataNasc').value = USUARIO['PERFIL']['DATA_NASC']
  document.getElementById('sexo').value = USUARIO['PERFIL']['SEXO']
  document.getElementById('tel').value = USUARIO['PERFIL']['TEL']
  document.getElementById('permiteMsg').value = USUARIO['PERFIL']['PERMITE_MSG']
  document.getElementById('status').value = USUARIO['STATUS']
  document.getElementById('idUsu').value = USUARIO['ID']
  document.getElementById('cpf').value = USUARIO['PERFIL']['CPF']
}

function voltaListaUsuario(){
  let area_lista_cadastro_usuario = document.getElementById('area_lista_cadastro_usuario')
    let area_altera_cadastro_usuario = document.getElementById('area_altera_cadastro_usuario')

    area_lista_cadastro_usuario.classList.remove('visually-hidden')
    area_altera_cadastro_usuario.classList.add('visually-hidden')
}