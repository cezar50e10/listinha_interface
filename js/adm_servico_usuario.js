ativaMenu('menu_mol_adm_servicosprestados',true,[['menu_mol_adm_servicosprestados_atribuifuncionario','flush-collapseServicoPrestado']])

listarUsuarios()

function listarUsuarios(){
    let obj=""
    fazPost(URL_API,obj,"listaUsuariosCompletosAssocServico",retornoListarUsuario,false)
  }
  function retornoListarUsuario(usuariosRetornados,erro){
   
    //console.log(servicosRetornados);
    usuarios= usuariosRetornados;
    
    let tabela = document.querySelector("#tabelaListaUsuarios");
    tabela.innerHTML="";
    for(let i = 0;i < usuarios.length;i++){  
        //console.log(usuarios[i])
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
        
        btnVisualiza.setAttribute('onclick', 'consultarUsuarioServico('+usuarios[i]['ID']+')')
  
        colunaBtn.appendChild(btnVisualiza)

        let colunaCodigo = document.createElement("td");
        let textoCodigo = document.createTextNode(usuarios[i]['ID']);
        colunaCodigo.appendChild(textoCodigo)

        let colunaNome = document.createElement("td");
        let textoNome = document.createTextNode(usuarios[i]['PERFIL']['NOME']);
        colunaNome.appendChild(textoNome)

        let colunaTipo = document.createElement("td");
        let textoTipo = document.createTextNode(usuarios[i]['TIPO']);
        colunaTipo.appendChild(textoTipo)

        let colunaStatus = document.createElement("td");
        let textoStatus = document.createTextNode(retornaStatusPadrao(usuarios[i]['STATUS']));
        colunaStatus.appendChild(textoStatus)
        
        linha.appendChild(colunaBtn); 
        linha.appendChild(colunaCodigo); 
        linha.appendChild(colunaNome); 
        linha.appendChild(colunaTipo); 
        linha.appendChild(colunaStatus); 

        tabela.appendChild(linha);
    }
  }

    

  function consultarUsuarioServico(idUsuario){
    document.getElementById('usuarioSelecionado').value = idUsuario
    let obj={
      "ID_USUARIO": idUsuario
    }
    fazPost(URL_API,obj,"listarServicoUsuario",retornoConsultarUsuarioServico,false,)
  }

  function retornoConsultarUsuarioServico(usuariosRetornados,erro){
    //console.log(usuariosRetornados)
    preencheServicosTabelas(usuariosRetornados['SERVICO_ASSOC'],'tabelaListaServicoAssoc')
    preencheServicosTabelas(usuariosRetornados['SERVICO_NAO_ASSOC'],'tabelaListaServicoNaoAssoc')
    let area_lista_usuarios = document.getElementById('area_lista_usuarios')
    let area_usuarios_por_servico = document.getElementById('area_usuarios_por_servico')

    area_lista_usuarios.classList.add('visually-hidden')
    area_usuarios_por_servico.classList.remove('visually-hidden')


  }

  function voltaListaServico(){
    let area_lista_usuarios = document.getElementById('area_lista_usuarios')
      let area_usuarios_por_servico = document.getElementById('area_usuarios_por_servico')
  
      area_lista_usuarios.classList.remove('visually-hidden')
      area_usuarios_por_servico.classList.add('visually-hidden')
  }

function preencheServicosTabelas(servicos,idTabela){
    let ehAssoc = false
    if(idTabela == 'tabelaListaServicoAssoc')
      ehAssoc = true
    
    let tabela = document.getElementById(idTabela);
    tabela.innerHTML="";

    if(null == servicos)
      return
    for(let i = 0;i < servicos.length;i++){  
        //console.log(servicos[i])
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
        'desassociaUsuarioServico('+servicos[i]['ID']+')':
        'associaUsuarioServico('+servicos[i]['ID']+')'
        )
  
        colunaBtn.appendChild(btnVisualiza)

        let colunaCodigo = document.createElement("td");
        let textoCodigo = document.createTextNode(servicos[i]['ID']);
        colunaCodigo.appendChild(textoCodigo)

        let colunaNome = document.createElement("td");
        let textoNome = document.createTextNode(servicos[i]['NOME']);
        colunaNome.appendChild(textoNome)

        let colunaValor = document.createElement("td");
        let textoValor = document.createTextNode(servicos[i]['VALOR']);
        colunaValor.appendChild(textoValor)

        let colunaStatus = document.createElement("td");
        let textoStatus = document.createTextNode(retornaStatusPadrao(servicos[i]['STATUS']));
        colunaStatus.appendChild(textoStatus)
        
        linha.appendChild(colunaBtn); 
        linha.appendChild(colunaCodigo); 
        linha.appendChild(colunaNome); 
        linha.appendChild(colunaValor); 
        linha.appendChild(colunaStatus); 

        tabela.appendChild(linha);
    }
}

function associaUsuarioServico(idServico){
  let idUsuario = document.getElementById('usuarioSelecionado').value
  let obj={
    "ID_USUARIO": idUsuario,
    "ID_SERVICO": idServico
  }
  fazPost(URL_API,obj,"associaUsuarioSevico",retornoAssociaUsuarioServico,false)
}

function retornoAssociaUsuarioServico(objetosRetornados,erro){
  exibeMsgSucesso("Usuario Foi Associado Com Sucesso!")
  let idServico = document.getElementById('usuarioSelecionado').value
  consultarUsuarioServico(idServico)
}

function desassociaUsuarioServico(idServico){
  let idUsuario = document.getElementById('usuarioSelecionado').value
  let obj={
    "ID_USUARIO": idUsuario,
    "ID_SERVICO": idServico
  }
  fazPost(URL_API,obj,"excluiUsuarioServico",retornoDesassociaUsuarioServico,false)
}

function retornoDesassociaUsuarioServico(objetosRetornados,erro){
  exibeMsgSucesso("Usuario Foi Desassociado Com Sucesso!")
  let idServico = document.getElementById('usuarioSelecionado').value
  consultarUsuarioServico(idServico)
}
