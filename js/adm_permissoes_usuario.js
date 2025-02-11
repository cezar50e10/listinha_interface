ativaMenu('menu_mol_adm_controleacesso',true,[['menu_mol_adm_controleacesso_permissaousuario','flush-collapseControleAcesso']])

cancelaEventPreventDefault('submit','formAltCadUsuario')


  
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
    listarGrupoUsuario()
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
  document.getElementById('status').value = USUARIO['STATUS']
  document.getElementById('idUsu').value = USUARIO['ID']
  document.getElementById('simboloGrupo').value = USUARIO['TIPO']
  document.getElementById('nivelGrupo').value = USUARIO['NIVEL']
  //console.log(USUARIO)
}

function voltaListaUsuario(){
  let area_lista_cadastro_usuario = document.getElementById('area_lista_cadastro_usuario')
    let area_altera_cadastro_usuario = document.getElementById('area_altera_cadastro_usuario')

    area_lista_cadastro_usuario.classList.remove('visually-hidden')
    area_altera_cadastro_usuario.classList.add('visually-hidden')
}

function listarGrupoUsuario(){
    let obj=""
    fazPost(URL_API,obj,"listarGrupoUsuario",retornoListarGrupoUsuario,false)
  }
  function retornoListarGrupoUsuario(grupoUsuarioRetornados,erro){
   
    //console.log(grupoUsuarioRetornados);
    grupoUsuario = grupoUsuarioRetornados;
    
    let select = document.querySelector("#simboloGrupo");
    select.innerHTML="";
    for(let i = 0;i < grupoUsuario.length;i++){  

        let option = document.createElement("option");
        
        
        let textoOption = document.createTextNode(grupoUsuario[i]['NOME']);
        option.appendChild(textoOption)

        option.setAttribute('value',grupoUsuario[i]['SIMBOLO'])

        select.appendChild(option);
        
    }
  }

  
  function alterarUsuarioDeGrupoUsuario(){
    let obj = {
      "ID_USUARIO":document.getElementById("idUsu").value,
			"GRUPO_USUARIO": document.getElementById("simboloGrupo").value,
			"NIVEL":document.getElementById("nivelGrupo").value
    }
    
    fazPost(URL_API,obj,"alterarUsuarioDeGrupoUsuario",retornoAlterarUsuarioDeGrupoUsuario,false)
  }
  function retornoAlterarUsuarioDeGrupoUsuario(usuarios,erro){
    exibeMsgSucesso("Grupo Do Usuario Foi Alterado Com Sucesso!")
  }