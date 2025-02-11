<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Agenda</h1>
    </div>
    


<div id="area_lista_funcionario" class="table-responsive">
 
Compromissos Por:
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="filtroCompromisso" value="funcionario" onclick="listaUsuariosFuncionariosCompletosCadastrados()" id="funcionario"checked>
      <label class="form-check-label" for="funcionario">
      Funcionario
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="filtroCompromisso" value="paciente" onclick="listaUsuariosFuncionariosCompletosCadastrados()" id="paciente">
      <label class="form-check-label" for="paciente">
      Paciente
      </label>
    </div>
<table class="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Codigo</th>
        <th scope="col">Nome</th>
        <th scope="col">Email</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody id="tabelaListaFuncionario">
      
    </tbody>
  </table>
</div>
<div id="area_dias_agenda" class="visually-hidden ">
  <input type="text" class="visually-hidden" id="funcionarioSelecionado">
  <button class="btn btn-lg mb-3 col-sm-12 btn-secondary" id="btnVoltaListaFuncionario" onclick='voltaListaFuncionario()' type="submit" >Voltar Lista De Usuário</button>
  <button class="btn btn-lg mb-3 col-sm-12 btn-success" id="btnPreencheAreaNovoAgendamento" onclick='preencheAreaNovoAgendamento()' type="submit" >Inserir Novo Agendamento</button>
  <button class="btn btn-lg mb-3 col-sm-12 btn-info" id="btnConsultaAgendametos" onclick='consultarAgendamentosFuncionario()' type="submit" >Consultar Agendamento</button>
</div>
<div id="area_novo_agendamento" class="visually-hidden col-sm-12 ">
  <button class="btn btn-lg mb-3 col-sm-12 btn-secondary" id="btnVoltaAreaDiasAgenda" onclick='voltaDiasAgenda()' type="submit" >Voltar</button>
  <form id="formInsereEvento">
          
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="nomeFuncionario" class="form-label">Funcionario</label>
            <input type="text" class="form-control" id="nomeFuncionario" placeholder="" value="" disabled>
          </div>

          <div class="col-md-6">
            <label for="country" class="form-label">Paciente</label>
            <select class="form-select" id="idPaciente" >
              <option value="">Escolha...</option>
            </select>
          </div>
          
          <div class="col-md-6">
            <label for="country" class="form-label">Serviço</label>
            <select class="form-select" id="idServico" onclick="pegaDetalhesServico()">
              
            </select>
          </div>
          <div class="col-sm-6">
            <label for="valor" class="form-label">Valor</label>
            <input type="number" class="form-control" id="valor" placeholder="" value="">
          </div>
          <div class="col-sm-6">
            <label for="tempo" class="form-label">Tempo
            <button type="button" class="btn btn-sm btn-success ms-3" onclick="somaTempo('tempo',30,true)" >+30m</button>
            <button type="button" class="btn btn-sm btn-success ms-3" onclick="somaTempo('tempo',1,true)">+1H</button>
            <button type="button" class="btn btn-sm btn-danger ms-3" onclick="somaTempo('tempo',30,false)">-30m</button>
            <button type="button" class="btn btn-sm btn-danger ms-3" onclick="somaTempo('tempo',1,false)">-1H</button>
            </label>
            <input type="text" class="form-control" id="tempo" placeholder="" value="00:00" disabled>
          </div>
          <div class="form-floating">
            <textarea class="form-control" placeholder="Digite aqui as observações..." id="observacao" style="height: 100px"></textarea>
            <label for="descricao">Observações</label>
          </div>
          <button class="w-100 mt-4 btn btn-lg btn-info" id="btnSelecionaData" type="submit" onclick="selecionaDataNovoAgendamento()">Consultar Data Disponivel</button>
          <div class="col-6">
            <label for="incio" class="form-label">Inicio</label>
            <input type="datetime-local" class="form-control" id="inicio" disabled>
          </div>
          <div class="col-6">
            <label for="fim" class="form-label">Fim</label>
            <input type="datetime-local" class="form-control" id="fim" disabled>
          </div>

        </div>
      

 
    <button class="w-100 mt-4 btn btn-lg btn-success" id="btnInserirAgendamento" type="submit" onclick="inserirAgendamento()">Confimar Agendamento</button>
    
  </form>
</div>


<div id="area_consulta_agendamento" class="visually-hidden col-sm-12 ">
  <button class="btn btn-lg mb-3 col-sm-12 btn-secondary" id="btnVolta2AreaDiasAgenda" onclick='voltaDiasAgenda(true)' type="submit" >Voltar</button>
  
</div>

<div id='calendar'></div>
<div id='calendarHorarioLivre'></div>



<!-- Modal CompromiisoAgendado-->
<div class="modal fade" id="modalCompromissoAgendado" tabindex="-1" aria-labelledby="modalCompromissoAgendado" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitleCompromissoAgendado"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input type="text" class="form-control" id="idCompromissoAgendado" hidden disabled>
            <div class="col-sm-12">
              <label for="funcionarioCompromissoAgendado" class="form-label">Funcionario
              </label>
              <input type="text" class="form-control" id="funcionarioCompromissoAgendado" placeholder="" value="00:00" disabled>
            </div>
            <div class="col-sm-12">
              <label for="pacienteCompromissoAgendado" class="form-label">Paciente
              </label>
              <input type="text" class="form-control" id="pacienteCompromissoAgendado" placeholder="" value="00:00" disabled>
            </div><br/>
        <div class="form-floating">
            <textarea class="form-control" placeholder="" id="descricaoCompromissoAgendado" style="height: 100px"></textarea>
            <label for="descricaoCompromissoAgendado">Descrição</label>
          </div>
          <div class="form-floating">
            <textarea class="form-control" placeholder="" id="observacaoCompromissoAgendado" style="height: 100px"></textarea>
            <label for="observacaoCompromissoAgendado">Observações</label>
          </div>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="valorCompromissoAgendado" class="form-label">Valor</label>
              <input type="number" class="form-control" id="valorCompromissoAgendado" disabled placeholder="" value="">
            </div>
            <div class="col-sm-6">
              <label for="tempoCompromissoAgendado" class="form-label">Tempo
              </label>
              <input type="text" class="form-control" id="tempoCompromissoAgendado" placeholder="" value="00:00" disabled>
            </div>
            
            <div class="col-6">
              <label for="incioCompromissoAgendado" class="form-label">Inicio</label>
              <input type="datetime-local" class="form-control" id="inicioCompromissoAgendado" disabled>
            </div>
            <div class="col-6">
              <label for="fimCompromissoAgendado" class="form-label">Fim</label>
              <input type="datetime-local" class="form-control" id="fimCompromissoAgendado" disabled>
            </div>
        </div>
        
      </div>
      <div class="modal-footer col-12">
        <button type="button" class="btn " disabled id="statusAgendamento"></button>
        <button type="button" class="btn btn-danger" onclick="cancelaAgendamento()" id="btnCancelaAgendamento" data-bs-dismiss="modal">Cancelar Agendamento</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>


<!-- Modal HoraLivre-->
<div class="modal fade" id="modalHoraLivre" tabindex="-1" aria-labelledby="modalHoraLivreLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        Horário Livre
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            
      <div class="row g-3">
            <div class="col-6">
              <label for="inicioHorarioLivre" class="form-label">Inicio</label>
              <input type="datetime-local" class="form-control" id="inicioHorarioLivre" disabled>
            </div>
            <div class="col-6">
              <label for="fimHorarioLivre" class="form-label">Fim</label>
              <input type="datetime-local" class="form-control" id="fimHorarioLivre" disabled>
            </div>
        </div>
        
        <div class="col-md-12 mt-3">
            <label for="country" class="form-label">Horarios Disponiveis</label>
            <select class="form-select" id="horarios" >
              
            </select>
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" onclick="selecionaHorario()" data-bs-dismiss="modal">Selecionar</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>



<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_agenda_funcionario.js"></script>

