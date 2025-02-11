
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Cadastrar Servico</h1>
    </div>
    <div class="d-flex justify-content-center  col-sm-12">
    <form id="formCadServico">
    
        <div class="row g-3">
          <div class="col-sm-12">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" placeholder="" value="">
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
            <textarea class="form-control" placeholder="Digite aqui a desrição..." id="descricao" style="height: 100px"></textarea>
            <label for="descricao">Digite aqui a descricao...</label>
          </div>



 
    <button class="w-100 mt-4 btn btn-lg btn-success" id="btnCadastrarServico" type="submit" onclick="cadastrarServico()">Cadastrar</button>
    
  </form>
</div>   

<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_cadastrar_servico.js"></script>
