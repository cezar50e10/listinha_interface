
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Comprovantes</h1>
    </div>

<div id="area_tela_pesquisa">
    <div class="row g-3">
      <div class="col-md-6">
        <label for="country" class="form-label">Funcionario</label>
        <select class="form-select" id="funcionario" onchange="consultaPacientesDoFuncionario()">
          <option value="">Escolha Um...</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="country" class="form-label">Paciente</label>
        <select class="form-select" id="paciente" onchange="consultaFuncionarioDoPacientes()">
          <option value="">Escolha Um...</option>
        </select>
      </div>
    

    <div class="row g-3">
      <div class="col-md-6">
        <label for="dataDe" class="form-label">Data De</label>
        <input type="date" class="form-control" id="dataIni" placeholder="" >
      </div>
      <div class="col-md-6">
        <label for="dataAte" class="form-label">Data Até</label>
        <input type="date" class="form-control" id="dataFim" placeholder="" >
      </div>
    </div>
    <button type="button" class="btn btn-primary col-sm-12 mt-3"  onclick="pesquisarConsultas()"> <img src="../image/bootstrap-icons-1.8.3/search.svg " width="25" height="25"> Pesquisar</button>

    <div class="table-responsive">
        <table id="tabelaDeConsultas"class="table table-striped col-12 table-sm">
          <thead>
            <tr>
              <th scope="col">Secionar</th>
              <th scope="col">Funcionario</th>
              <th scope="col">Paciente</th>
              <th scope="col">Data Consulta</th>
            </tr>
          </thead>
          <tbody id="tabelaListaConsultas">
            
          </tbody>
        </table>
      </div>
    </div>
</div>

<div id="area_tela_comprovante" class="visually-hidden">
  <button type="button" class="btn btn-secondary col-sm-12 mb-3"  onclick="voltarPesquisa()">Voltar Para Pesquisa</button>
  <input type="text" hidden id="consultaSelecionada">    
  <form method="POST" enctype="multipart/form-data" id="salvaComprovante"> 
      <label for="conteudo">Enviar imagem:</label>
      <input type="file" class="form-control"  name="comprovante" accept="image/*" id="comprovante">    
      <input type="text" class="form-control  mt-1" placeholder="Descrição comprovante"  id="desComprovante">    
      <button type="button" class="btn btn-success col-sm-12 mt-3"  onclick="salvarComprovante()">Salvar Comprovante</button>
  </form>


  <div class="table-responsive">
        <table id="tabelaDeComprovantes"class="table table-striped col-12 table-sm">
          <thead>
            <tr>
              <th scope="col">Baixar</th>
              <th scope="col">Deletar</th>
              <th scope="col">Descrição</th>
            </tr>
          </thead>
          <tbody id="tabelaListaComprovantes">
            
          </tbody>
        </table>
      </div>
</div>

<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_comprovantes.js"></script>
