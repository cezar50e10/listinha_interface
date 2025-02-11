
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Pagamentos</h1>
    </div>

<div id="area_tela_pesquisa">
    <div class="row g-3">
      <div class="col-md-6">
        <label for="country" class="form-label">Aluno</label>
        <select class="form-select" id="usuarioFiltro" disabled>
          <option value="">Escolha Um...</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="country" class="form-label">Status Mensalidade</label>
        <select class="form-select" id="statusParcela" >
          <option value="">Escolha Um...</option>
          <option value="ABERTA">Aberta...</option>
          <option value="ATRASADA">Atrasda</option>
          <option value="PAGA">Paga</option>
          <option value="PERDOADA">Perdoada</option>
          <option value="PENDENTE">Pendente</option>
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
    <button type="button" class="btn btn-primary col-sm-12 mt-3"  onclick="pesquisarParcelas()"> <img src="../image/bootstrap-icons-1.8.3/search.svg " width="25" height="25"> Pesquisar</button>

    <div class="table-responsive">
        <table id="tabelaDeConsultas"class="table table-striped col-12 table-sm">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Data Vencimento</th>
              <th scope="col">Valor</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody id="tabelaListaConsultas">
            
          </tbody>
        </table>
      </div>
    </div>
</div>

<div id="area_tela_comprovante" class="d-flex justify-content-center visually-hidden col-sm-12 visually-hidden">
   
  <form id="formPagto" class="col-lg-8 col-sm-12">
       
        <div class="row g-3">
          <div class="col-sm-12">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nomePagto" placeholder="" value="" disabled>
          </div>

          <div class="col-md-6">
            <label for="dataVenctoPagto" class="form-label">Data Vencimento</label>
            <input disabled type="date" class="form-control" id="dataVenctoPagto" placeholder="" >
          </div>

          <div class="col-md-6">
            <label for="dataPagto" class="form-label">Data Pagamento</label>
            <input disabled type="date" class="form-control" id="dataPagto" placeholder="" >
          </div>

          <div class="col-md-6">
            <label for="country" class="form-label">Status Pagamento</label>
            <select class="form-select" id="statusParcelaPagto" disabled>
              <option value="">Escolha Um...</option>
              <option value="ABERTA">Aberta</option>
              <option value="ATRASADA">Atrasda</option>
              <option value="PAGA">Paga</option>
              <option value="PERDOADA">Perdoada</option>
              <option value="PENDENTE">Pendente</option>
            </select>
          </div>

          <div class="col-md-6">
            <label for="valorPagto" class="form-label">Valor</label>
            <input disabled type="text" class="form-control" id="valorPagto" placeholder="" >
          </div>

          <div class="visually-hidden">
            <input type="text" hidden id="consultaSelecionada">   
          </div>
          <div class="visually-hidden">
            <input type="text" hidden id="controlePagamento">   
          </div>

          <button class="btn btn-lg col-sm-6 btn-secondary" id="btnVoltaListaConsulta" onclick='voltarPesquisa()' type="submit" >Voltar</button>
          <button class="btn btn-lg col-sm-6 btn-success" id="btnPagamentoPIX" type="submit" onclick="processarPagamento(3)">Gerar Pix</button>
          <button class="btn btn-lg col-sm-6 btn-success" id="btnVisualizarQRCode" type="submit" onclick="verQRCode()">Ver QRCode</button>
    
        </div>
  </form>

</div>


<!-- Modal QRCode-->
<div class="modal fade " id="modalQRCode" tabindex="-1" aria-labelledby="modalQRCode" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitleQRCode">QRCode Pagamento</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
        <img id="qrCodePagamento">
        <div class="col-sm-12">
            <label for="pixCopiaColaPagamento" class="form-label">Pix Copia e Cola</label>
            <input type="text" class="form-control" id="pixCopiaColaPagamento" placeholder="" value="" disabled>
          </div>
      </div>
      <div class="modal-footer col-12">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>


<?php include_once 'rodape.php'?>
<script src="../../interface/js/usr_mensalidades.js"></script>
