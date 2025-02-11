ativaMenu('menu_mol_adm_agenda',false)
//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','formInsereEvento')
  
  listaUsuariosFuncionariosCompletosCadastrados()
  function listaUsuariosFuncionariosCompletosCadastrados(){
    let tabela = document.querySelector("#tabelaListaFuncionario");
    tabela.innerHTML="";
  let tipoUser = document.querySelector('input[name=filtroCompromisso]:checked').value
    if(tipoUser == "funcionario"){
      let obj = ""
      fazPost(URL_API,obj,"listaUsuariosFuncionariosAgendaCompletosCadastrados",retornoListaUsuariosFuncionariosCompletosCadastrados,false)
    }

    if(tipoUser == "paciente"){      let obj = ""
      fazPost(URL_API,obj,"listaUsuariosPacientesCompletosCadastrados",retornoListaUsuariosFuncionariosCompletosCadastrados,false)
    }
    
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
      
      btnVisualiza.setAttribute('onclick', 'trazAgendaFuncionario('+usuarios[i]['ID']+',"'+usuarios[i]['PERFIL']['NOME']+' '+usuarios[i]['PERFIL']['SOBRE_NOME']+'")')

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
function trazAgendaFuncionario(id,nomeFuncionario){
    document.getElementById('funcionarioSelecionado').value = id
    let area_lista_funcionario = document.getElementById('area_lista_funcionario')
    let area_dias_agenda = document.getElementById('area_dias_agenda')
   
    area_lista_funcionario.classList.add('visually-hidden')
    area_dias_agenda.classList.remove('visually-hidden')
    let tipoUser = document.querySelector('input[name=filtroCompromisso]:checked').value
    let btnPreencheAreaNovoAgendamento = document.getElementById('btnPreencheAreaNovoAgendamento')
    let btnCancelaAgendamento = document.getElementById('btnCancelaAgendamento')
    
  if(tipoUser=="funcionario"){
    document.getElementById('nomeFuncionario').value = nomeFuncionario
    btnPreencheAreaNovoAgendamento.classList.remove('visually-hidden')
    btnCancelaAgendamento.classList.remove('visually-hidden')
    let obj = {
      "ID_USUARIO":id
    }
    
    fazPost(URL_API,obj,"listarServicoUsuario",retornoListarServicoUsuario,false)


    let obj2 = {
      "ID_USUARIO_FUNCIONARIO":id
    }
    
    fazPost(URL_API,obj2,"trazPacientesFuncionario",retornoTrazPacientesFuncionario,false)
  }else{
    btnCancelaAgendamento.classList.add('visually-hidden')
    btnPreencheAreaNovoAgendamento.classList.add('visually-hidden')
  }
}

function retornoListarServicoUsuario(objRetorno,erro){
  let listaServiço = document.getElementById('idServico')
  listaServiço.innerHTML = "";
  let servicoRetornado = objRetorno['SERVICO_ASSOC']

  let option = document.createElement("option");
  let textoOption = document.createTextNode("Escolha Um...");
  option.appendChild(textoOption)
  option.setAttribute('value',"")
  listaServiço.appendChild(option)
  for(let i=0;i<servicoRetornado.length;i++){
    let option = document.createElement("option");         
    let textoOption = document.createTextNode(servicoRetornado[i]['NOME']);
    option.appendChild(textoOption)
    option.setAttribute('value',servicoRetornado[i]['ID']+"||"+servicoRetornado[i]['TEMPO']+"||"+servicoRetornado[i]['VALOR'])
    listaServiço.appendChild(option)
  }

}

function pegaDetalhesServico(){
  let detalheServico = document.getElementById('idServico').value.split("||")//0id//1Tempo//2valor
  document.getElementById('inicio').value = ""
  document.getElementById('fim').value = ""
  
  if(detalheServico !=""){
    document.getElementById('valor').value = detalheServico[2]
    document.getElementById('tempo').value = detalheServico[1]
  }else{
    document.getElementById('valor').value = 0
    document.getElementById('tempo').value = "00:00"
  }
}

function retornoTrazPacientesFuncionario(objRetorno,erro){
  let listaPaciente = document.getElementById('idPaciente')
  listaPaciente.innerHTML = "";
  let pacienteRetornado = objRetorno['PACIENTE_ASSOC']

  let option = document.createElement("option");
  let textoOption = document.createTextNode("Escolha Um...");
  option.appendChild(textoOption)
  option.setAttribute('value',"")
  listaPaciente.appendChild(option)
  for(let i=0;i<pacienteRetornado.length;i++){
    let option = document.createElement("option");         
    let textoOption = document.createTextNode(pacienteRetornado[i]['PERFIL']['NOME']+" "+pacienteRetornado[i]['PERFIL']['SOBRE_NOME']);
    option.appendChild(textoOption)
    option.setAttribute('value',pacienteRetornado[i]['ID'])
    listaPaciente.appendChild(option)
  }
}

function voltaListaFuncionario(){
  let area_lista_funcionario = document.getElementById('area_lista_funcionario')
    let area_dias_agenda = document.getElementById('area_dias_agenda')
    let calendar = document.getElementById('calendar')

    area_lista_funcionario.classList.remove('visually-hidden')
    area_dias_agenda.classList.add('visually-hidden')
    //calendar.classList.add('visually-hidden')

}

function preencheAreaNovoAgendamento(){
  let area_novo_agendamento = document.getElementById('area_novo_agendamento')
    let area_dias_agenda = document.getElementById('area_dias_agenda')


    area_novo_agendamento.classList.remove('visually-hidden')
    area_dias_agenda.classList.add('visually-hidden')


}

function voltaDiasAgenda(voltaDaConsulta){
  let area_novo_agendamento = document.getElementById('area_novo_agendamento')
    let area_dias_agenda = document.getElementById('area_dias_agenda')
    let area_consulta_agendamento = document.getElementById('area_consulta_agendamento')
    let calendar = document.getElementById('calendar')
  


    area_novo_agendamento.classList.add('visually-hidden')
    area_dias_agenda.classList.remove('visually-hidden')
    area_consulta_agendamento.classList.add('visually-hidden')
    if(!calendar.classList.contains('visually-hidden') && voltaDaConsulta){
      calendar.classList.add('visually-hidden')
    }
    

}


function consultarAgendamentosFuncionario(){
  let date = new Date();
      //console.log(date.getFullYear())
      inicio = 
      dataHoraFormatadaParaInput(new Date(date.getFullYear()-1, date.getMonth(), 1));
      fim = 
      dataHoraFormatadaParaInput(new Date(date.getFullYear()+1, date.getMonth(), 0));

    let tipoUser = document.querySelector('input[name=filtroCompromisso]:checked').value
    if(tipoUser == "funcionario"){
      let obj = {
        "ID_USUARIO_FUNCIONARIO":document.getElementById('funcionarioSelecionado').value,
        "DATA_INICIO":inicio,
        "DATA_FIM":fim,
      }
      
        fazPost(URL_API,obj,"listarAgendamentosPorUsuarioFuncionario",retornoConsultarAgendamentosFuncionario,false)
    
    }

    if(tipoUser == "paciente"){   
    let obj = {
      "ID_USUARIO_PACIENTE":document.getElementById('funcionarioSelecionado').value,
      "DATA_INICIO":inicio,
      "DATA_FIM":fim,
    }
    
      fazPost(URL_API,obj,"listarAgendamentosPorUsuarioPaciente",retornoConsultarAgendamentosFuncionario,false)
  
    }
}

function retornoConsultarAgendamentosFuncionario(objRetorno,erro){
  iniciarCalendarioAdmConsulta(objRetorno)
  let area_consulta_agendamento = document.getElementById('area_consulta_agendamento')
  area_consulta_agendamento.classList.remove('visually-hidden')
  let calendar = document.getElementById('calendar')
  calendar.classList.remove('visually-hidden')


  let area_novo_agendamento = document.getElementById('area_novo_agendamento')
  let area_dias_agenda = document.getElementById('area_dias_agenda')
    

    area_novo_agendamento.classList.add('visually-hidden')
    area_dias_agenda.classList.add('visually-hidden')
}


function iniciarCalendarioAdmConsulta(eventos){
  
  //console.log(eventos)
  'use strict';
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
      
      initialView: 'dayGridMonth',
      headerToolbar:{
          start: 'prev,next ,today',
          center: 'title',//,
          end:'dayGridMonth, timeGridWeek, timeGridDay'
      },
      buttonText:{
          today:    'hoje',
          month:    'mês',
          week:     'semana',
          day:      'dia'
      },
      locale:'pt-br',
      /*dateClick: function(info) {
          alert('Clicked on: ' + info.dateStr);
          alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
          alert('Current view: ' + info.view.type);
          // change the day's background color just for fun
          info.dayEl.style.backgroundColor = 'red';
          
      },*/
      events: preencheEventosAgenda(eventos,true)
          
            /*{
              "id": 2,
              "title": "Long Event",
              "start": "2022-10-07",
              "end": "2022-10-10",
              "color": "red",
              "textColor": "yellow",
              "description":"descrição evento"
            },
            {
              "id": "999",
              "title": "Repeating Event",
              "start": "2022-10-09 14:00:00"
            }*/
      ,
      eventClick: function(info) {
        exibeInformarcoesEvento(info)
        //console.log(info)
    },
    datesSet:function(info){
      //console.log(info)
    }
  });
  calendar.render();
  //calendarEl.classList.add('visually-hidden')
  
  
}

document.getElementById('calendar').addEventListener('click', function() {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl,{
    datesSet:function(info){
      consultarAgendamentosFuncionario(info.startStr,info.endStr)
      //console.log(info)
    }
  })
});


function preencheEventosAgenda(eventos,ehConsideraEventoCancelado){
if(eventos == null)
  return eventos;
let eventosArr = new Array();

for(let i =0;i < eventos.length;i++){
  if(ehConsideraEventoCancelado && eventos[i]['STATUS'] =='K' ||eventos[i]['STATUS'] !='K')
  eventosArr.push({
    "id": eventos[i]['ID'],
    "title": "Procedimento: "+eventos[i]['SERVICO']['NOME']+" Funcionario(a):"+eventos[i]['FUNCIONARIO']['PERFIL']['NOME']+" - Paciente:"+eventos[i]['PACIENTE']['PERFIL']['NOME'],
    "start": eventos[i]['DATA_INICIO'],
    "end": eventos[i]['DATA_FIM'],
    "color": eventos[i]['STATUS']=="K"?"red":"#fd940d",
    "textColor": "black",
    "description":eventos[i]['SERVICO']['DESCRICAO'],
    "observacao":eventos[i]['OBSERVACAO'],
    "valor_cobrado":eventos[i]['VALOR'],
    "tempo":eventos[i]['TEMPO'],
    "procedimento":eventos[i]['SERVICO']['NOME'],
    "paciente":eventos[i]['PACIENTE']['PERFIL']['NOME']+" "+eventos[i]['PACIENTE']['PERFIL']['SOBRE_NOME'],
    "funcionario":eventos[i]['FUNCIONARIO']['PERFIL']['NOME']+" "+eventos[i]['FUNCIONARIO']['PERFIL']['SOBRE_NOME'],
    "tipo":"agendamento",
    "statusAgendamento":eventos[i]['STATUS']
  })
}
return eventosArr

}
//iniciarCalendarioAdm('calendar')


function exibeInformarcoesEvento(info){
  if(info.event.extendedProps.tipo != "horaLivre"){
    let myModal = new bootstrap.Modal(document.getElementById('modalCompromissoAgendado'))
    
      //console.log(info)
      //console.log(info.event)
      //console.log(info.event.extendedProps.description)
      //console.log(dataHoraFormatadaParaInput(info.event.start))
      //console.log(info.event.start)
      //console.log(info.event.start)
    document.getElementById('modalTitleCompromissoAgendado').textContent = info.event.extendedProps.procedimento
    document.getElementById('descricaoCompromissoAgendado').textContent = info.event.extendedProps.description
    document.getElementById('observacaoCompromissoAgendado').textContent = info.event.extendedProps.observacao
    document.getElementById('valorCompromissoAgendado').value = info.event.extendedProps.valor_cobrado
    document.getElementById('tempoCompromissoAgendado').value = info.event.extendedProps.tempo
    document.getElementById('inicioCompromissoAgendado').value = dataHoraFormatadaParaInput(info.event.start)
    document.getElementById('fimCompromissoAgendado').value = dataHoraFormatadaParaInput(info.event.end)
    document.getElementById('funcionarioCompromissoAgendado').value = info.event.extendedProps.funcionario
    document.getElementById('pacienteCompromissoAgendado').value = info.event.extendedProps.paciente
    document.getElementById('idCompromissoAgendado').value = info.event.id
    document.getElementById('statusAgendamento').textContent = retornaStatusAgendamento(info.event.extendedProps.statusAgendamento)
    if(info.event.extendedProps.statusAgendamento == "A" || info.event.extendedProps.statusAgendamento=="P"){
      document.getElementById('statusAgendamento').classList.add('btn-info')
      document.getElementById('btnCancelaAgendamento').classList.remove('visually-hidden')
    }
    if(info.event.extendedProps.statusAgendamento == "C"){
      document.getElementById('statusAgendamento').classList.add('btn-success')
      document.getElementById('btnCancelaAgendamento').classList.add('visually-hidden')
    }
    if(info.event.extendedProps.statusAgendamento == "K"){
      document.getElementById('statusAgendamento').classList.add('btn-warning')
      document.getElementById('btnCancelaAgendamento').classList.add('visually-hidden')
    }

    myModal.show()
  }else{
    let dataAux1 = dataHoraFormatadaParaInput(info.event.start)
    let dataAux2 = dataHoraFormatadaParaInput(info.event.end)
    let listaHorario = document.getElementById('horarios')
    let tempo = retornaHoraFormatada(document.getElementById('tempo').value)
    let myModal = new bootstrap.Modal(document.getElementById('modalHoraLivre'))
    document.getElementById('inicioHorarioLivre').value = dataAux1
    document.getElementById('fimHorarioLivre').value = dataAux2
    myModal.show()
      
    listaHorario.innerHTML = "";

      let option = document.createElement("option");
      let textoOption = document.createTextNode("Escolha Um...");
      option.appendChild(textoOption)
      option.setAttribute('value',"")
      listaHorario.appendChild(option)
    while(dataEhMenorIgualQue(adicionaTempoData(dataAux1,tempo),dataAux2)){
      let option = document.createElement("option");         
      let textoOption = document.createTextNode("De "+dataAux1+" ate "+adicionaTempoData(dataAux1,tempo));
      option.appendChild(textoOption)
      option.setAttribute('value',dataAux1+"||"+adicionaTempoData(dataAux1,tempo))
      listaHorario.appendChild(option)
      //console.log(dataAux1+" - "+adicionaTempoData(dataAux1,"02:00:00"))
      dataAux1 = adicionaTempoData(dataAux1,"00:30:00")//intervalo padrão de 30 min
    }
  }
}

function retornaStatusAgendamento(statusAgendamento){
  if(statusAgendamento == "A" || statusAgendamento=="P")
    return "Pendente Confirmação"
   if(statusAgendamento == "C")
    return "Confirmado"
  if(statusAgendamento == "K")
    return "Cancelado"
}

function selecionaHorario(){
  let horario = document.getElementById('horarios').value.split("||")
  if(horario != ""){
    document.getElementById('inicio').value = dataHoraFormatadaParaInput(horario[0])
    document.getElementById('fim').value = dataHoraFormatadaParaInput(horario[1])
    let calendar = document.getElementById('calendarHorarioLivre');
    calendar.classList.add('visually-hidden')
    let area_novo_agendamento = document.getElementById('area_novo_agendamento');
    area_novo_agendamento.classList.remove('visually-hidden')
    
  }
}

function selecionaDataNovoAgendamento(){
  if(document.getElementById('tempo').value == "00:00"){
    alert("Tempo do Serviço Não Pode Ser Zerado!")
    return;
  }


  let calendar = document.getElementById('calendarHorarioLivre');
    calendar.classList.remove('visually-hidden')
    let area_novo_agendamento = document.getElementById('area_novo_agendamento');
    area_novo_agendamento.classList.add('visually-hidden')

    
      let date = new Date();
      //console.log(date.getFullYear())
      inicio = 
      dataHoraFormatadaParaInput(new Date(date.getFullYear()-1, date.getMonth(), 1));
      fim = 
      dataHoraFormatadaParaInput(new Date(date.getFullYear()+1, date.getMonth(), 0));
     

  let obj = {
    "ID_USUARIO_FUNCIONARIO":document.getElementById('funcionarioSelecionado').value,
    "DATA_FILTRO_INI":inicio,
    "DATA_FILTRO_FIM":fim,
    "TEMPO_NECESSARIO":document.getElementById('tempo').value
  }
  
    fazPost(URL_API,obj,"listarAgendamentosComHorarioLivrePorUsuarioFuncionario",retornoConsultarHorariosLivresFuncionario,false)
}


function retornoConsultarHorariosLivresFuncionario(objRetorno,erro){
  
  iniciarCalendarioAdmNovoEvento(objRetorno)
  /*let area_consulta_agendamento = document.getElementById('area_consulta_agendamento')
  area_consulta_agendamento.classList.remove('visually-hidden')
  let calendar = document.getElementById('calendar')
  calendar.classList.remove('visually-hidden')


  let area_novo_agendamento = document.getElementById('area_novo_agendamento')
  let area_dias_agenda = document.getElementById('area_dias_agenda')
    

    area_novo_agendamento.classList.add('visually-hidden')
    area_dias_agenda.classList.add('visually-hidden')*/
}



function iniciarCalendarioAdmNovoEvento(eventos){
  
  //console.log(eventos)
  'use strict';
  let calendarEl = document.getElementById('calendarHorarioLivre');
  let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar:{
          start: 'prev,next ,today',
          center: 'title',//,
          end:'dayGridMonth, timeGridWeek, timeGridDay'
      },
      buttonText:{
          today:    'hoje',
          month:    'mês',
          week:     'semana',
          day:      'dia'
      },
      
      locale:'pt-br',
      events: preencheAgendaTotal(eventos)
          
         
      , /*datesSet:function(info){
        dataAuxFimConsulta = info.endStr
        dataAuxIniConsulta = info.startStr
      }*///NO FUTURO APRENDER COMO CONSULTAR A DATA DINAMINCAMENTE
      eventClick: function(info) {
        exibeInformarcoesEvento(info)
        //console.log(info)
    }
  });
  //if(contadorAux == 0)
    calendar.render();
  //calendarEl.classList.add('visually-hidden')
 
}

function preencheAgendaTotal(eventos){
  let agendaCompleta = null;
  agendaCompleta = preencheEventosAgenda(eventos['HORARIOS_AGENDADOS'],false)
  agendaCompleta = preencheHorarioLivreAgenda(eventos['HORARIOS_LIVRES'],agendaCompleta)
  return agendaCompleta
}


function preencheHorarioLivreAgenda(eventos,agendaCompleta){
  if(eventos == null)
    return agendaCompleta;

  if(agendaCompleta == null)
   agendaCompleta = new Array();
    
  for(let i =0;i < eventos.length;i++){
    agendaCompleta.push({
      "id": eventos[i]['ID'],
      "title": "Horario Livre",
      "start": eventos[i]['DATA_INICIO'],
      "end": eventos[i]['DATA_FIM'],
      "color": "#30e893",
      "textColor": "black",
      "description":"Horario Livre Para inserir agendamento",
      "observacao":"",
      "valor_cobrado":"",
      "tempo":"",
      "procedimento":"",
      "paciente":"",
      "funcionario":"",
      "tipo":"horaLivre"
    })
  }
  return agendaCompleta
  
  }

  function inserirAgendamento(){
    let detalheServico = document.getElementById('idServico').value.split("||")
    let obj = {
      "ID_USUARIO_PACIENTE":document.getElementById('idPaciente').value,
			"ID_USUARIO_FUNCIONARIO":document.getElementById('funcionarioSelecionado').value,
			"ID_SERVICO":detalheServico[0],
			"OBSERVACAO":document.getElementById('observacao').value,
			"VALOR":document.getElementById('valor').value,
			"TEMPO":document.getElementById('tempo').value,
			"DATA_INICIO":document.getElementById('inicio').value,
			"DATA_FIM":document.getElementById('fim').value
    }
    bloqueiaBtnCarregando('btnInserirAgendamento')
      fazPost(URL_API,obj,"insererAgendamento",retornoInserirAgendamento,false,'btnInserirAgendamento')
  }

  function retornoInserirAgendamento(objRetorno,erro){
      exibeMsgSucesso("Agendamento Efetuado com Sucesso")

      document.getElementById('idServico').value = ""
      document.getElementById('idPaciente').value = ""
      document.getElementById('observacao').value = ""
      document.getElementById('valor').value = 0
      document.getElementById('tempo').value = "00:00"
      document.getElementById('inicio').value = ""
      document.getElementById('fim').value = ""
  }

  function cancelaAgendamento(){
    let obj = {
      "ID":document.getElementById('idCompromissoAgendado').value
    }
    
    fazPost(URL_API,obj,"excluiAgendamento",retornoExcluiAgendamento,false)
  }

  function retornoExcluiAgendamento(objRetorno,erro){
    exibeMsgSucesso("Agendamento Cancelado com Sucesso")
    setTimeout(function(){
      consultarAgendamentosFuncionario()
    }, 2000)
    
  }

  /*PRECISA VERIFICAR A DATA DO CALENDARIO NA HORA QUE CLICAR NA SETA E PUXAR DE NOVO */
/*
  var el = document.getElementById("t");
  el.addEventListener("click", modifyText, false);
  */

 