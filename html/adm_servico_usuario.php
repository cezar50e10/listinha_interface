
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Usuario por Servico</h1>
    </div>
    


<div id="area_lista_usuarios" class="table-responsive">
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
    <tbody id="tabelaListaUsuarios">
      
    </tbody>
  </table>
</div>
<div id="area_usuarios_por_servico" class="visually-hidden">
<button class="btn  btn-lg col-sm-12 btn-secondary" id="btnVoltaListaServico" onclick='voltaListaServico()' type="submit" >Voltar</button>
  <input type="text" class="visually-hidden" id="usuarioSelecionado">
  <div class="table-responsive">
  <h2>Usuarios Associados</h2>
  <table class="table table-striped table-sm">
  <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Codigo</th>
          <th scope="col">Nome</th>
          <th scope="col">Valor</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody id="tabelaListaServicoAssoc">
        
      </tbody>
    </table>
    </div>
    <div class="table-responsive">
    <h2>Usuarios Não Associados</h2>
  <table class="table table-striped table-sm">
  <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Codigo</th>
          <th scope="col">Nome</th>
          <th scope="col">Valor</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody id="tabelaListaServicoNaoAssoc">
        
      </tbody>
    </table>
    </div>
    
  
</div>
<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_servico_usuario.js"></script>
