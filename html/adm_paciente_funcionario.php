
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Pacientes por Funcionarios</h1>
    </div>
    


<div id="area_lista_funcionario" class="table-responsive">
<h2>Seus Usuarios Cadastrados</h2>
<table class="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Codigo</th>
        <th scope="col">Nome</th>
        <th scope="col">Grupo</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody id="tabelaListaFuncionario">
      
    </tbody>
  </table>
</div>
<div id="area_paciente_associado" class="visually-hidden">
<button class="btn  btn-lg col-sm-12 btn-secondary" id="btnVoltaListaFuncionario" onclick='voltaListaFuncionario()' type="submit" >Voltar</button>
  <input type="text" class="visually-hidden" id="funcionarioSelecionado">
  <div class="table-responsive">
  <h2>Pacientes Associados</h2>
  <table class="table table-striped table-sm">
  <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Codigo</th>
        <th scope="col">Nome</th>
        <th scope="col">Grupo</th>
        <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody id="tabelaListaPacienteAssoc">
        
      </tbody>
    </table>
    </div>
    <div class="table-responsive">
    <h2>Pacientes Não Associados</h2>
  <table class="table table-striped table-sm">
  <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Codigo</th>
        <th scope="col">Nome</th>
        <th scope="col">Grupo</th>
        <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody id="tabelaListaPacienteNaoAssoc">
        
      </tbody>
    </table>
    </div>
    
  
</div>

<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_paciente_funcionario.js"></script>
