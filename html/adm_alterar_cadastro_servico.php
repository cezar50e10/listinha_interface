
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Alterar Cadastro Servico</h1>
    </div>

    <!-- Area de listagem de servico -->
    <div id="area_lista_cadastro_servico" class="col-12">
      <div class="col-sm-6">
            <label for="nome" class="form-label">Pesquisar Servico</label>
            <input type="text" class="form-control" id="pesquisa" placeholder="" value="">
      </div>
      <div class="table-responsive">
        <table id="tabelaDeServico"class="table table-striped col-12 table-sm">
          <thead>
            <tr>
              <th scope="col">Secionar</th>
              <th scope="col">Nome</th>
              <th scope="col">Valor</th>
              <th scope="col">Status</th>
              <th scope="col">Tempo</th>
            </tr>
          </thead>
          <tbody id="tabelaListaServico">
            
          </tbody>
        </table>
      </div>
    </div>
    <!-- Area do formulario de alteração -->
    <div id="area_altera_cadastro_servico" class="d-flex justify-content-center visually-hidden col-sm-12">
    <form id="formAltCadServico" class="col-lg-8 col-sm-12">
       
        <div class="row g-3">
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

          <div class="col-md-12">
            <label for="country" class="form-label">Status da Conta</label>
            <select class="form-select" id="status" >
              <option value="">Escolha...</option>
              <option value="A">Ativo</option>
              <option value="I">Inativo</option>
              <option value="P">Promoção</option>
              <option value="E">Esgotado</option>
            </select>
          </div>
          <input type="text" class="form-control visually-hidden" id="idProd" placeholder="" value="">
          <button class="btn mt-5 me-5 btn-lg col-sm-5 btn-secondary" id="btnVoltaListaServico" onclick='voltaListaServico()' type="submit" >Voltar</button>
          <button class="btn mt-5 ms-5 btn-lg col-sm-5 btn-warning" id="btnAlteraCadastroServico" type="submit" onclick="alterarCadastroServico()">Alterar Cadastro</button>
    
        </div>
  </form>
</div>   


<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_alterar_cadastro_servico.js"></script>
