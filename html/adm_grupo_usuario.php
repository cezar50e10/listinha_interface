
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Cadastro De Grupo De Usuários</h1>
    </div>
    
<h2>Suas Grupos Cadastrados</h2>
<div class="row">
  <div class="col-4">
    <label for="nome" class="form-label">Nome Grupo</label>
    <input type="text" class="form-control" id="nomeGrupo" placeholder="Administradores" value="">
  </div>
  <div class="col-4">
    <label for="nome" class="form-label">Simbolo</label>
    <input type="text" class="form-control" MAXLENGTH=4 id="simboloGrupo" placeholder="ADM" value="">
  </div>
  <button type="button" id="btnCadastrarGrupo" class="btn btn-success col-4 mt-4 mb-4" onclick="cadastrarGrupo()">Cadastrar Grupo Usuario</button>
</div>
<div class="table-responsive">
  <table class="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Simbolo</th>
      </tr>
    </thead>
    <tbody id="tabelaListagrupoUsuario">
      
    </tbody>
  </table>
</div>


<!-- Modal Altera Grupo-->
<div class="modal fade" id="modalAlteraGrupo" tabindex="-1" aria-labelledby="modalGrupoAlteraLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalGrupoAlteraLabel">Grupo Alterado</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="mensagem-retorno-API alert mt-2 mb-2 visually-hidden"role="alert"></div>
      
      <div class="row">
        <div class="col-6">
          <label for="nome" class="form-label">Nome Grupo</label>
          <input type="text" class="form-control" id="nomeGrupoAltera" placeholder="Administradores" value="">
        </div>
        <div class="col-6">
          <label for="nome" class="form-label">Simbolo</label>
          <input type="text" class="form-control" MAXLENGTH=4 id="simboloGrupoAltera" placeholder="ADM" value="">
        </div>
        <input type="text" class="form-control visually-hidden" MAXLENGTH=4 id="codigoGrupoAltera" placeholder="" value="">
      </div>

      <div class="modal-footer">
      <button type="button" id="alterarGrupo" class="btn btn-warning"  data-bs-dismiss="modal" onclick="alterarGrupo()">Alterar Grupo</button>
      <button type="button" id="fecharAltera"  class="btn btn-secondary" data-bs-dismiss="modal" >Fechar</button>
      </div>
      
    </div>
  </div>
</div>
<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_grupo_usuario.js"></script>
