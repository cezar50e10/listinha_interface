ativaMenu('menu_minhas_listas',false)

listarListasDeComprasUsuario()

function listarListasDeComprasUsuario(){
    let obj=""
    fazPost(URL_API_LISTA_DE_COMPRA,obj,"listar_por_usuario_logado",retornoListarListaDeCompra,false)
  }
  function retornoListarListaDeCompra(listaDeCompraRetornados,erro){
   
    //console.log(listaDeCompraRetornados);
    listaDeCompra = listaDeCompraRetornados;
    
    let tabela = document.querySelector("#tabelaListaCompra");
    tabela.innerHTML="";
    for(let i = 0;i < listaDeCompra.length;i++){  
        //console.log(listaDeCompra[i])
        let linha = document.createElement("tr");
        
        let colunaBtn = document.createElement("td");
        let btnVisualiza = document.createElement("btn")
        let icon = document.createElement("img")
        icon.setAttribute('src', 'image/bootstrap-icons-1.8.3/hand-index.svg')
        icon.setAttribute('width', '25')
        icon.setAttribute('height', '25')

        //let textoBtn = document.createTextNode("X");
        btnVisualiza.appendChild(icon)
        btnVisualiza.classList.add('btn')
        btnVisualiza.classList.add('btn-outline-info')
        
        btnVisualiza.setAttribute('data-bs-toggle', 'modal')
        btnVisualiza.setAttribute('data-bs-target', '#modalAlteraGrupo')
        btnVisualiza.setAttribute('onclick', 'exibeGrupoAlterado("")')//'+listaDeCompra[i]['ID']+',"'+listaDeCompra[i]['NOME']+'","'+listaDeCompra[i]['SIMBOLO']+'")')

        colunaBtn.appendChild(btnVisualiza)
        



        
        let colunaNome = document.createElement("td");
        let textoNome = document.createTextNode(listaDeCompra[i].nomeLista);
        colunaNome.appendChild(textoNome)

        
        let colunaSimbolo = document.createElement("td");
        let textoSimbolo = document.createTextNode(listaDeCompra[i].descricaoLista);
        colunaSimbolo.appendChild(textoSimbolo)
        
        linha.appendChild(colunaBtn); 
        linha.appendChild(colunaNome); 
        linha.appendChild(colunaSimbolo);

        tabela.appendChild(linha);
    }
  }

  function cadastrarLista(){
    let obj={
      "nome": document.getElementById('nomeLista').value,
      "descricao": document.getElementById('descricaoLista').value
    }
    bloqueiaBtnCarregando('btnCadastrarLista')
    fazPost(URL_API_LISTA_DE_COMPRA,obj,"cria_nova_lista",retornoCadastrarLista,false,'btnCadastrarLista')
  }

  function retornoCadastrarLista(objetosRetornados,erro){
    listarListasDeComprasUsuario()
    exibeMsgSucesso("Lista de Compra Foi Cadastrada Com Sucesso!")
    document.getElementById('nomeLista').value = ""
    document.getElementById('descricaoLista').value = ""
  }
   
function exibeGrupoAlterado(id,nome,simbolo){
  document.getElementById('nomeGrupoAltera').value = nome
  document.getElementById('simboloGrupoAltera').value = simbolo
  document.getElementById('codigoGrupoAltera').value = id
}

function alterarGrupo(){
  let obj={
    "NOME": document.getElementById('nomeGrupoAltera').value,
    "SIMBOLO": document.getElementById('simboloGrupoAltera').value,
    "ID": document.getElementById('codigoGrupoAltera').value
  }
  bloqueiaBtnCarregando('alterarGrupo')
  bloqueiaBtnCarregando('fecharAltera')
  fazPost(URL_API,obj,"alterarListaDeCompra",retornoAlterarListaDeCompra,true)
}

function retornoAlterarListaDeCompra(objetosRetornados,erro){
  listarListaDeCompra()
  exibeMsgSucesso("Grupo de Usuario Foi Alterado Com Sucesso!")
  
}