ativaMenu('menu_mol_usu_agenda',false)
trazUsuarioSession(consultarAgendamentosFuncionario) 
  

function consultarAgendamentosFuncionario(USUARIO_LOGADO,erro){
  let date = new Date();
      //console.log(date.getFullYear())
      inicio = 
      dataHoraFormatadaParaInput(new Date(date.getFullYear()-1, date.getMonth(), 1));
      fim = 
      dataHoraFormatadaParaInput(new Date(date.getFullYear()+1, date.getMonth(), 0));

   
    let obj = {
      "ID_USUARIO_PACIENTE":USUARIO_LOGADO['ID'],
      "DATA_INICIO":inicio,
      "DATA_FIM":fim,
    }
    
      fazPost(URL_API,obj,"listarAgendamentosPorUsuarioPaciente",retornoConsultarAgendamentosFuncionario,false)
  
}

function retornoConsultarAgendamentosFuncionario(objRetorno,erro){
  iniciarCalendarioUsrConsulta(objRetorno)
}


function iniciarCalendarioUsrConsulta(eventos){
  
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
      events: preencheEventosAgenda(eventos)
      ,
      eventClick: function(info) {
        exibeInformarcoesEvento(info)
        //console.log(info)
    }
  });
  calendar.render();
  
}


function preencheEventosAgenda(eventos){
if(eventos == null)
  return eventos;
let eventosArr = new Array();

for(let i =0;i < eventos.length;i++){
  eventosArr.push({
    "id": eventos[i]['ID'],
    "title": "Procedimento: "+eventos[i]['SERVICO']['NOME']+" Funcionario(a):"+eventos[i]['FUNCIONARIO']['PERFIL']['NOME']+" - Paciente:"+eventos[i]['PACIENTE']['PERFIL']['NOME'],
    "start": eventos[i]['DATA_INICIO'],
    "end": eventos[i]['DATA_FIM'],
    "color": "#fd940d",
    "textColor": "black",
    "description":eventos[i]['SERVICO']['DESCRICAO'],
    "observacao":eventos[i]['OBSERVACAO'],
    "valor_cobrado":eventos[i]['VALOR'],
    "tempo":eventos[i]['TEMPO'],
    "procedimento":eventos[i]['SERVICO']['NOME'],
    "paciente":eventos[i]['PACIENTE']['PERFIL']['NOME']+" "+eventos[i]['PACIENTE']['PERFIL']['SOBRE_NOME'],
    "funcionario":eventos[i]['FUNCIONARIO']['PERFIL']['NOME']+" "+eventos[i]['FUNCIONARIO']['PERFIL']['SOBRE_NOME'],
    "tipo":"agendamento"
  })
}
return eventosArr

}

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

    myModal.show()
  }
}


 