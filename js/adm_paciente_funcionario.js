ativaMenu('menu_mol_adm_pacientes',false)

//impede formulario de submit automatico - comum.js


  
  listaUsuariosFuncionariosCompletosCadastrados()
  function listaUsuariosFuncionariosCompletosCadastrados(){
    let obj = ""
    fazPost(URL_API,obj,"listaUsuariosFuncionariosPacientesCompletosCadastrados",retornoListaUsuariosFuncionariosCompletosCadastrados,false)
  }
  function retornoListaUsuariosFuncionariosCompletosCadastrados(usuarios,erro){
       
    let tabela = document.querySelector("#tabelaListaFuncionario");
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
      
      btnVisualiza.setAttribute('onclick', 'trazPacientesFuncionario('+usuarios[i]['ID']+')')

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
    
  }
function trazPacientesFuncionario(id){
  let obj = {
    "ID_USUARIO_FUNCIONARIO":id
  }
  document.getElementById('funcionarioSelecionado').value = id
    fazPost(URL_API,obj,"trazPacientesFuncionario",retornoTrazPacientesFuncionario,false)
}
function retornoTrazPacientesFuncionario(objRetorno,erro){
  if(!erro){
    preenchePacientesTabelas(objRetorno['PACIENTE_ASSOC'],"tabelaListaPacienteAssoc")
    preenchePacientesTabelas(objRetorno['PACIENTE_NAO_ASSOC'],"tabelaListaPacienteNaoAssoc")
    let area_lista_funcionario = document.getElementById('area_lista_funcionario')
    let area_paciente_associado = document.getElementById('area_paciente_associado')

    area_lista_funcionario.classList.add('visually-hidden')
    area_paciente_associado.classList.remove('visually-hidden')
  }
}

function voltaListaFuncionario(){
  let area_lista_funcionario = document.getElementById('area_lista_funcionario')
    let area_paciente_associado = document.getElementById('area_paciente_associado')

    area_lista_funcionario.classList.remove('visually-hidden')
    area_paciente_associado.classList.add('visually-hidden')
}

function preenchePacientesTabelas(pacientes,idTabela){
  let ehAssoc = false
  if(idTabela == 'tabelaListaPacienteAssoc')
    ehAssoc = true
  
  let tabela = document.getElementById(idTabela);
  tabela.innerHTML="";

  if(null == pacientes)
    return
  for(let i = 0;i < pacientes.length;i++){  
      //console.log(pacientes[i])
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
      'desassociaPacienteFuncionario('+pacientes[i]['ID']+')':
      'associaPacienteFuncionario('+pacientes[i]['ID']+')'
      )

      colunaBtn.appendChild(btnVisualiza)

      let colunaNome = document.createElement("td");
      let textoNome = document.createTextNode(' '+pacientes[i]['PERFIL']['NOME']);
      colunaNome.appendChild(textoNome)

      let colunaSobreNome = document.createElement("td");
      let textoSobreNome = document.createTextNode(' '+pacientes[i]['PERFIL']['SOBRE_NOME']);
      colunaSobreNome.appendChild(textoSobreNome)

      let colunaEmail = document.createElement("td");
      let textoEmail = document.createTextNode(' '+pacientes[i]['USUARIO']);
      colunaEmail.appendChild(textoEmail)

      let colunaDataNasc = document.createElement("td");
      let textoDataNasc = document.createTextNode(' '+dataFormatada(pacientes[i]['PERFIL']['DATA_NASC']));
      colunaDataNasc.appendChild(textoDataNasc)


      linha.appendChild(colunaBtn); 
      linha.appendChild(colunaNome); 
      linha.appendChild(colunaSobreNome); 
      linha.appendChild(colunaEmail); 
      linha.appendChild(colunaDataNasc); 

      tabela.appendChild(linha);
  }
}

function associaPacienteFuncionario(idPaciente){
let idUsuario = document.getElementById('funcionarioSelecionado').value
let obj={
  "ID_USUARIO_FUNCIONARIO": idUsuario,
  "ID_USUARIO_PACIENTE": idPaciente
}
fazPost(URL_API,obj,"cadastraPaciente",retornoAssociaPacienteFuncionario,false)
}

function retornoAssociaPacienteFuncionario(objetosRetornados,erro){
exibeMsgSucesso("Paciente Foi Associado Com Sucesso!")
let idPaciente = document.getElementById('funcionarioSelecionado').value
trazPacientesFuncionario(idPaciente)
}

function desassociaPacienteFuncionario(idPaciente){
let idUsuario = document.getElementById('funcionarioSelecionado').value
let obj={
  "ID_USUARIO_FUNCIONARIO": idUsuario,
  "ID_USUARIO_PACIENTE": idPaciente
}
fazPost(URL_API,obj,"excluiPaciente",retornoDesassociaPacienteFuncionario,false)
}

function retornoDesassociaPacienteFuncionario(objetosRetornados,erro){
exibeMsgSucesso("Paciente Foi Desassociado Com Sucesso!")
let idPaciente = document.getElementById('funcionarioSelecionado').value
trazPacientesFuncionario(idPaciente)
}