ativaMenu('menu_mol_adm_controleacesso',true,[['menu_mol_adm_controleacesso_grupousuario','flush-collapseControleAcesso']])

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
        
        btnVisualiza.setAttribute('data-bs-toggle', 'modal')
        btnVisualiza.setAttribute('data-bs-target', '#modalAlteraGrupo')
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

  function cadastrarGrupo(){
    let obj={
      "NOME": document.getElementById('nomeGrupo').value,
      "SIMBOLO": document.getElementById('simboloGrupo').value
    }
    bloqueiaBtnCarregando('btnCadastrarGrupo')
    fazPost(URL_API,obj,"cadastraGrupoUsuario",retornoCadastrarGrupo,false,'btnCadastrarGrupo')
  }

  function retornoCadastrarGrupo(objetosRetornados,erro){
    listarGrupoUsuario()
    exibeMsgSucesso("Grupo de Usuario Foi Cadastrado Com Sucesso!")
    document.getElementById('nomeGrupo').value = ""
    document.getElementById('simboloGrupo').value = ""
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
  fazPost(URL_API,obj,"alterarGrupoUsuario",retornoAlterarGrupoUsuario,true)
}

function retornoAlterarGrupoUsuario(objetosRetornados,erro){
  listarGrupoUsuario()
  exibeMsgSucesso("Grupo de Usuario Foi Alterado Com Sucesso!")
  
}