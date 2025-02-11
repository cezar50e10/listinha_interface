ativaMenu('menu_mol_adm_comprovantes',false)
cancelaEventPreventDefault('submit','salvaComprovante')

let funcionario = ""
let paciente = ""
listarUsuariosFiltros()
function listarUsuariosFiltros(){
    let obj = ""
    fazPost(URL_API,obj,"listaUsuariosFuncionariosComprovanteCompletosCadastrados",retornoListaUsuariosFuncionariosCompletosCadastrados,false)
    
    fazPost(URL_API,obj,"listaUsuariosPacientesComprovantesCompletosCadastrados",retornoListaUsuariosPacientesCompletosCadastrados,false)
      
}

function retornoListaUsuariosFuncionariosCompletosCadastrados(usuarios,erro){
    let listaFuncionario = document.getElementById('funcionario')
    listaFuncionario.innerHTML = "";
    let existeFuncionarioAnterior = false

    let option = document.createElement("option");
    let textoOption = document.createTextNode("Escolha Um...");
    option.appendChild(textoOption)
    option.setAttribute('value',"")
    listaFuncionario.appendChild(option)
    for(let i=0;i<usuarios.length;i++){
      let option = document.createElement("option");         
      let textoOption = document.createTextNode(usuarios[i]['PERFIL']['NOME']+" "+usuarios[i]['PERFIL']['SOBRE_NOME']);
      option.appendChild(textoOption)
      option.setAttribute('value',usuarios[i]['ID'])
      listaFuncionario.appendChild(option)
      if(usuarios[i]['ID'] == paciente)
      existeFuncionarioAnterior = true
  }
  listaFuncionario.value = existeFuncionarioAnterior?funcionario:""
}

function retornoListaUsuariosPacientesCompletosCadastrados(usuarios,erro){
    let listaPaciente = document.getElementById('paciente')
    listaPaciente.innerHTML = "";
    let existePacienteAnterior = false
    
    let option = document.createElement("option");
    let textoOption = document.createTextNode("Escolha Um...");
    option.appendChild(textoOption)
    option.setAttribute('value',"")
    listaPaciente.appendChild(option)
    if (null == usuarios)
        return
    for(let i=0;i<usuarios.length;i++){
      let option = document.createElement("option");         
      let textoOption = document.createTextNode(usuarios[i]['PERFIL']['NOME']+" "+usuarios[i]['PERFIL']['SOBRE_NOME']);
      option.appendChild(textoOption)
      option.setAttribute('value',usuarios[i]['ID'])
      listaPaciente.appendChild(option)
      if(usuarios[i]['ID'] == paciente)
        existePacienteAnterior = true
    }
    listaPaciente.value = existePacienteAnterior?paciente:""
}

function consultaPacientesDoFuncionario(){
    funcionario = document.getElementById('funcionario').value

    if(funcionario != ""){
        let obj = {
            "ID_USUARIO_FUNCIONARIO":funcionario
        }

        fazPost(URL_API,obj,"trazPacientesFuncionario",retornoListaPacientesDoFuncionario,false)
    }else{
        let obj = ""
        
        fazPost(URL_API,obj,"listaUsuariosPacientesCompletosCadastrados",retornoListaUsuariosPacientesCompletosCadastrados,false)
    }
}

function retornoListaPacientesDoFuncionario(usuarios,erro){
    retornoListaUsuariosPacientesCompletosCadastrados(usuarios['PACIENTE_ASSOC'],false)
}

function consultaFuncionarioDoPacientes(){
    paciente = document.getElementById('paciente').value

    if(paciente != ""){
        let obj = {
            "ID_USUARIO_PACIENTE":paciente
        }

        fazPost(URL_API,obj,"trazFuncionariosPaciente",retornoListaFuncionariosDoPaciente,false)
    }else{
        let obj = ""
        
        fazPost(URL_API,obj,"listaUsuariosFuncionariosComprovanteCompletosCadastrados",retornoListaUsuariosFuncionariosCompletosCadastrados,false)
    }
}

function retornoListaFuncionariosDoPaciente(usuarios,erro){
    retornoListaUsuariosFuncionariosCompletosCadastrados(usuarios['FUNCIONARIO_ASSOC'],false)
}

function pesquisarConsultas(){
    paciente = document.getElementById('paciente').value
    funcionario = document.getElementById('funcionario').value
    let dataIni = document.getElementById('dataIni').value
    let dataFim = document.getElementById('dataFim').value

    let obj = {
        "ID_USUARIO_PACIENTE":paciente,
        "ID_USUARIO_FUNCIONARIO":funcionario,
        "DATA_INI":dataIni,
        "DATA_FIM":dataFim
    }

    fazPost(URL_API,obj,"pesquisarConsultas",retornoPesquisarConsultas,false)
}

function retornoPesquisarConsultas(objetoRetorno,erro){
    let tabela = document.querySelector("#tabelaListaConsultas");
    tabela.innerHTML="";
    let consultas = objetoRetorno['CONSULTAS']
    for(let i = 0;i < consultas.length;i++){  
      //console.log(consultas[i]);

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
      
      btnVisualiza.setAttribute('onclick', 'trazComprovantesConsulta('+consultas[i]['ID']+')')

      colunaBtn.appendChild(btnVisualiza)

      let colunaNomeFunc = document.createElement("td");
      let textoNomeFunc = document.createTextNode(' '+consultas[i]['FUNCIONARIO']['PERFIL']['NOME']);
      colunaNomeFunc.appendChild(textoNomeFunc)

      let colunaNomePaci = document.createElement("td");
      let textoNomePaci = document.createTextNode(' '+consultas[i]['PACIENTE']['PERFIL']['NOME']);
      colunaNomePaci.appendChild(textoNomePaci)

      let colunaData = document.createElement("td");
      let textoData = document.createTextNode(' '+dataFormatada(consultas[i]['DATA_INICIO']));
      colunaData.appendChild(textoData)


      linha.appendChild(colunaBtn); 
      linha.appendChild(colunaNomeFunc); 
      linha.appendChild(colunaNomePaci); 
      linha.appendChild(colunaData); 
      
      //linha.setAttribute('id','idLinhaTabUsu'+i)
      tabela.appendChild(linha);
    }
}

function trazComprovantesConsulta(idConsulta){
    let area_tela_pesquisa = document.getElementById('area_tela_pesquisa')
    let area_tela_comprovante = document.getElementById('area_tela_comprovante')

    area_tela_pesquisa.classList.add('visually-hidden')
    area_tela_comprovante.classList.remove('visually-hidden')
    document.getElementById("consultaSelecionada").value = idConsulta
    let tabela = document.querySelector("#tabelaListaComprovantes");
    tabela.innerHTML="";
    let obj = {
        "ID_CONSULTA":idConsulta
    }

    fazPost(URL_API,obj,"listarComprovanteConsulta",retornoListarComprovanteConsulta,false)
}

function retornoListarComprovanteConsulta(comprovantes,erro){
    let tabela = document.querySelector("#tabelaListaComprovantes");
    tabela.innerHTML="";
    
    for(let i = 0;i < comprovantes.length;i++){  
      //console.log(consultas[i]);

      let linha = document.createElement("tr");
        
      let colunaBtnBaixa = document.createElement("td");
      let btnBaixa = document.createElement("btn")
      let iconDownload = document.createElement("img")
      iconDownload.setAttribute('src', '../image/bootstrap-icons-1.8.3/download.svg')
      iconDownload.setAttribute('width', '25')
      iconDownload.setAttribute('height', '25')

      //let textoBtn = document.createTextNode("X");
      btnBaixa.appendChild(iconDownload)
      btnBaixa.classList.add('btn')
      btnBaixa.classList.add('btn-outline-info')
      
      btnBaixa.setAttribute('onclick', 'baixarComprovante('+comprovantes[i]['ID']+')')

      colunaBtnBaixa.appendChild(btnBaixa)


      let colunaBtnExclui = document.createElement("td");
      let btnExclui = document.createElement("btn")
      let iconExclui = document.createElement("img")
      iconExclui.setAttribute('src', '../image/bootstrap-icons-1.8.3/trash.svg')
      iconExclui.setAttribute('width', '25')
      iconExclui.setAttribute('height', '25')

      //let textoBtn = document.createTextNode("X");
      btnExclui.appendChild(iconExclui)
      btnExclui.classList.add('btn')
      btnExclui.classList.add('btn-outline-danger')
      
      btnExclui.setAttribute('onclick', 'excluirComprovante('+comprovantes[i]['ID']+')')

      colunaBtnExclui.appendChild(btnExclui)


      let colunaDesc = document.createElement("td");
      let textoDesc = document.createTextNode(' '+comprovantes[i]['DESCRICAO_IMG']);
      colunaDesc.appendChild(textoDesc)


      linha.appendChild(colunaBtnBaixa); 
      linha.appendChild(colunaBtnExclui); 
      linha.appendChild(colunaDesc); 
      
      //linha.setAttribute('id','idLinhaTabUsu'+i)
      tabela.appendChild(linha);
    }
}

function voltarPesquisa(){
    let area_tela_pesquisa = document.getElementById('area_tela_pesquisa')
    let area_tela_comprovante = document.getElementById('area_tela_comprovante')

    area_tela_comprovante.classList.add('visually-hidden')
    area_tela_pesquisa.classList.remove('visually-hidden')
}

function salvarComprovante(){
    let obj = {
        "ID_CONSULTA":document.getElementById("consultaSelecionada").value,
        "DESCRICAO_IMG":document.getElementById("desComprovante").value
    }

    fazPostComUploadArquivo(URL_API,obj,comprovante,"salvarComprovante",retornoSalvarComprovante,false)
}

function retornoSalvarComprovante(objetoRetorno,erro){
    exibeMsgSucesso("Comprovante salvo com sucesso!")
    setTimeout(function(){
        trazComprovantesConsulta(document.getElementById("consultaSelecionada").value)
        document.getElementById("comprovante").value = ""
        document.getElementById("desComprovante").value = ""
    },2000);
}

function excluirComprovante(idComprovante){
    let obj = {
        "ID_COMPROVANTE":idComprovante
    }

    fazPost(URL_API,obj,"excluirComprovante",retornoExcluirComprovante,false)
}

function retornoExcluirComprovante(objetoRetorno,erro){
    exibeMsgSucesso("Comprovante excluido com sucesso!")
    setTimeout(function(){
        trazComprovantesConsulta(document.getElementById("consultaSelecionada").value)
    },2000);
}


function baixarComprovante(idComprovante){
    let obj = {
        "ID_COMPROVANTE":idComprovante
    }

    fazPostBaixarArquivo(URL_API,obj,"baixarComprovante")
}