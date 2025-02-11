<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Agenda</h1>
    </div>
    


<div id='calendar'></div>




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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>





<?php include_once 'rodape.php'?>
<script src="../../interface/js/usr_agenda_paciente.js"></script>

