ativaMenu('menu_mol_adm_controleacesso',true,[['menu_mol_adm_controleacesso_acessoconteudo','flush-collapseControleAcesso']])

listarGrupoUsuario()

function listarGrupoUsuario(){
    let obj=""
    fazPost(URL_API,obj,"listarGrupoUsuario",retornoListarGrupoUsuario,false)
  }
  function retornoListarGrupoUsuario(grupoUsuarioRetornados,erro){
   
    //console.log(grupoUsuarioRetornados);
    grupoUsuario = grupoUsuarioRetornados;
    
    let tabela = document.querySelector("#tabelaListagrupoUsuario");
    tabela.innerHTML="";
    for(let i = 0;i < grupoUsuario.length;i++){  
        //console.log(grupoUsuario[i])
        let linha = document.createElement("tr");
        
        let colunaBtn = document.createElement("td");
        let btnVisualiza = document.createElement("btn")
        let icon = document.createElement("img")
        icon.setAttribute('src', '../image/bootstrap-icons-1.8.3/hand-index.svg')
        icon.setAttribute('width', '25')
        icon.setAttribute('height', '25')

        //let textoBtn = document.createTextNode("X");
        btnVisualiza.appendChild(icon)
        btnVisualiza.classList.add('btn')
        btnVisualiza.classList.add('btn-outline-info')
        
        btnVisualiza.setAttribute('onclick', 'exibeGrupoAlterado('+grupoUsuario[i]['ID']+',"'+grupoUsuario[i]['NOME']+'","'+grupoUsuario[i]['SIMBOLO']+'")')

        colunaBtn.appendChild(btnVisualiza)
        



        
        let colunaNome = document.createElement("td");
        let textoNome = document.createTextNode(grupoUsuario[i]['NOME']);
        colunaNome.appendChild(textoNome)

        
        let colunaSimbolo = document.createElement("td");
        let textoSimbolo = document.createTextNode(grupoUsuario[i]['SIMBOLO']);
        colunaSimbolo.appendChild(textoSimbolo)
        
        linha.appendChild(colunaBtn); 
        linha.appendChild(colunaNome); 
        linha.appendChild(colunaSimbolo);

        tabela.appendChild(linha);
    }
  }

   

  function exibeGrupoAlterado(id,nome,simbolo){
    
    document.getElementById('idGrupoSelecionado').value = id
    document.getElementById('nomeGrupoSelecionado').value =nome
    document.getElementById('simboloGrupoSelecionado').value =simbolo
    
  let nivelGrupo = document.querySelector('input[name=nivelGrupo]:checked').value
  let obj={
      "SEQUENCIAL":"",
			"ID_GRUPO_USUARIO": id,
			"NIVEL_GRUPO_USUARIO":nivelGrupo,
			"CLASSE_MENU": ""
  }
  fazPost(URL_API,obj,"consultaConteudoDoGrupoUsuario",retornoConsultarConteudoDoGrupoUsuario,false,)
}

function retornoConsultarConteudoDoGrupoUsuario(grupoUsuarioRetornados,erro){
  //console.log(grupoUsuarioRetornados)
  preencheConteudoGrupo(grupoUsuarioRetornados['CONTEUDO_ASSOCIADO'],'tabelaListaConteudoPermitido')
  preencheConteudoGrupo(grupoUsuarioRetornados['CONTEUDO_NAO_ASSOCIADO'],'tabelaListaConteudoNaoPermitido')
  let area_conteudo_grupo = document.getElementById('area_conteudo_grupo')
  let area_lista_grupos = document.getElementById('area_lista_grupos')
  
  area_lista_grupos.classList.add('visually-hidden')
  area_conteudo_grupo.classList.remove('visually-hidden')


}

function voltaListaGrupo(){
  let area_conteudo_grupo = document.getElementById('area_conteudo_grupo')
  let area_lista_grupos = document.getElementById('area_lista_grupos')

  area_lista_grupos.classList.remove('visually-hidden')
  area_conteudo_grupo.classList.add('visually-hidden')
}

function preencheConteudoGrupo(grupoUsuario,idTabela){
  let ehAssoc = false
  let nivelGrupo = document.querySelector('input[name=nivelGrupo]:checked').value
  if(idTabela == 'tabelaListaConteudoPermitido')
    ehAssoc = true
  
  let tabela = document.getElementById(idTabela);
  tabela.innerHTML="";

  if(null == grupoUsuario)
    return
  for(let i = 0;i < grupoUsuario.length;i++){  
      //console.log(grupoUsuario[i])
      let linha = document.createElement("tr");
      
      let colunaBtn = document.createElement("td");
      let btnVisualiza = document.createElement("btn")
      let icon = document.createElement("img")
      icon.setAttribute('src', 
      ehAssoc?
        '../image/bootstrap-icons-1.8.3/dash-circle.svg':
        '../image/bootstrap-icons-1.8.3/check-circle.svg'
      )
      icon.setAttribute('width', '25')
      icon.setAttribute('height', '25')

      //let textoBtn = document.createTextNode("X");
      btnVisualiza.appendChild(icon)
      btnVisualiza.classList.add('btn')
      btnVisualiza.classList.add(
        ehAssoc?
        'btn-outline-danger':
        'btn-outline-success'
        )
      
      btnVisualiza.setAttribute('onclick', 
      ehAssoc?
      'excluirGrupoUsuario('+grupoUsuario[i]['ID_GRUPO_USUARIO']+','+nivelGrupo+',"'+grupoUsuario[i]['CLASSE']+'")':
      'associaGrupoUsuarioAoMenu('+grupoUsuario[i]['ID_GRUPO_USUARIO']+','+nivelGrupo+',"'+grupoUsuario[i]['CLASSE']+'")'
      )

      colunaBtn.appendChild(btnVisualiza)

     

      let colunaNome = document.createElement("td");
      let textoNome = document.createTextNode(grupoUsuario[i]['NOME_PAGINA']);
      colunaNome.appendChild(textoNome)

      let colunaConteudo = document.createElement("td");
      let textoConteudo = document.createTextNode(grupoUsuario[i]['DESCRICAO_CONTROLE']);
      colunaConteudo.appendChild(textoConteudo)

      linha.appendChild(colunaBtn); 
      linha.appendChild(colunaNome); 
      linha.appendChild(colunaConteudo); 
      

      tabela.appendChild(linha);
  }
}



function associaGrupoUsuarioAoMenu(idGrupo,nivelGrupo,classe){
  
  let obj={
      "SEQUENCIAL":"",
			"ID_GRUPO_USUARIO": idGrupo,
			"NIVEL_GRUPO_USUARIO":nivelGrupo,
			"CLASSE": classe
  }
  fazPost(URL_API,obj,"associaGrupoUsuarioAoConteudo",retornoAssociaGrupoUsuarioAoMenu,false)
}

function retornoAssociaGrupoUsuarioAoMenu(objetosRetornados,erro){
  exibeMsgSucesso("Conteudo Foi Associado Com Sucesso!")
  
  let id = document.getElementById('idGrupoSelecionado').value
  let nome = document.getElementById('nomeGrupoSelecionado').value
  let simbolo = document.getElementById('simboloGrupoSelecionado').value

  exibeGrupoAlterado(id,nome,simbolo)
}

function excluirGrupoUsuario(idGrupo,nivelGrupo,classe){
  let obj={
    "SEQUENCIAL":"",
    "ID_GRUPO_USUARIO": idGrupo,
    "NIVEL_GRUPO_USUARIO":nivelGrupo,
    "CLASSE": classe
}
  fazPost(URL_API,obj,"excluirGrupoUsuarioConteudo",retornoExcluirGrupoUsuario,false)
}

function retornoExcluirGrupoUsuario(objetosRetornados,erro){
  exibeMsgSucesso("Conteudo Foi Desassociado Com Sucesso!")
  
  let id = document.getElementById('idGrupoSelecionado').value
  let nome = document.getElementById('nomeGrupoSelecionado').value
  let simbolo = document.getElementById('simboloGrupoSelecionado').value

  exibeGrupoAlterado(id,nome,simbolo)
}

