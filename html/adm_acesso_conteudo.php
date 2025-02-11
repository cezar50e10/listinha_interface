
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Acesso Dos Grupos De Usuários</h1>
    </div>
<div id="area_lista_grupos" class="table-responsive">    
    <h2>Suas Grupos Cadastrados</h2>
    
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="nivelGrupo" value="1" id="nivel1">
      <label class="form-check-label" for="nivel1">
        Nivel1
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="nivelGrupo" value="2" id="nivel2">
      <label class="form-check-label" for="nivel">
        Nivel2
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="nivelGrupo" value="3" id="nivel3">
      <label class="form-check-label" for="nivel3">
        Nivel3
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="nivelGrupo" value="4" id="nivel4">
      <label class="form-check-label" for="nivel4">
        Nivel4
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="nivelGrupo" value="5" id="nivel5">
      <label class="form-check-label" for="nivel5">
        Nivel5
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="nivelGrupo" value="6" id="nivel6">
      <label class="form-check-label" for="nivel">
        Nivel6
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="nivelGrupo" value="7" id="nivel7">
      <label class="form-check-label" for="nivel">
        Nivel
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="nivelGrupo" value="8" id="nivel8">
      <label class="form-check-label" for="nivel">
        Nivel8
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="nivelGrupo" value="9" id="nivel9"checked>
      <label class="form-check-label" for="nivel">
        Nivel9
      </label>
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
</div>


<div id="area_conteudo_grupo" class="visually-hidden">
<button class="btn  btn-lg col-sm-12 btn-secondary" id="btnVoltaListaGrupo" onclick='voltaListaGrupo()' type="submit" >Voltar</button>
  <input type="text" class="visually-hidden" id="barracaSelecionada">
 
   
  
  <div class="table-responsive">
  <h2>Conteudo Permitido</h2>
  <table class="table table-striped table-sm">
  <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Menu</th>
          <th scope="col">Controle</th>
        </tr>
      </thead>
      <tbody id="tabelaListaConteudoPermitido">
        
      </tbody>
    </table>
    </div>
    <div class="table-responsive">
    <h2>Conteudo Não Permitido</h2>
  <table class="table table-striped table-sm">
  <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Menu</th>
          <th scope="col">Controle</th>
        </tr>
      </thead>
      <tbody id="tabelaListaConteudoNaoPermitido">
        
      </tbody>
    </table>
    </div>




    
  
</div>
<input type="text" class="visually-hidden" id="idGrupoSelecionado">
<input type="text" class="visually-hidden" id="nomeGrupoSelecionado">
<input type="text" class="visually-hidden" id="simboloGrupoSelecionado">


<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_acesso_conteudo.js"></script>
