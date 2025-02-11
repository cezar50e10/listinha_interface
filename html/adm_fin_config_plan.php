
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Configuração de Planos de Pagamentos</h1>
    </div>

    <!-- Area de listagem de plano -->
    <div id="area_lista_cadastro_plano" class="col-12">
      <div class="row">
        <div class="col-6">
              <label for="nome" class="form-label">Pesquisar Planos de Pagamentos</label>
              <input type="text" class="form-control" id="pesquisa" placeholder="" value="">
        </div>
        <div class="col-6">
              <button onclick="inciaCadastroPlano()" class="btn btn-outline-success">Cadastrar Novo Plano</button>
        </div>
      </div>
      <div class="table-responsive">
        <table id="tabelaDePlanos"class="table table-striped col-12 table-sm">
          <thead>
            <tr>
              <th scope="col">Selecionar</th>
              <th scope="col">Nome</th>
              <th scope="col">Valor</th>
              <th scope="col">Periodicidade</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody id="tabelaListaPlanos">
            
          </tbody>
        </table>
      </div>
    </div>

    <!-- Area do formulario de cadastro -->
    <div id="area_cadastro_plano_fin" class="d-flex justify-content-center visually-hidden col-sm-12">
    <form id="formCadPlanoFin" class="col-lg-8 col-sm-12">
       
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="nome" class="form-label">Nome do Plano</label>
              <input type="text" class="form-control" id="nome" placeholder="" value="">
            </div>

            <div class="col-sm-6">
              <label for="valorPlano" class="form-label">Valor do Plano</label>
              <input type="text" class="form-control" id="valorPlano" placeholder="" value="">
            </div>


            <div class="col-md-6">
              <label for="country" class="form-label">Periodicidade</label>
              <select class="form-select" id="periodicidade" >
                <option value="">Escolha...</option>
                <option value="semanal">Semanal</option>
                <option value="mensal">Mensal</option>
                <option value="semestral">Semestral</option>
                <option value="anual">Anual</option>
              </select>
            </div>

            <div class="col-sm-6">
            <label for="country" class="form-label">Dia do Pagamento</label>
              <select class="form-select" id="diaPagto" >
                <option value="">Escolha...</option>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>

           
            <button class="btn mt-5 me-5 btn-lg col-sm-5 btn-secondary" id="btnVoltaListaPlanos" onclick='voltaListaPlanos()' type="submit" >Voltar</button>
            <button class="btn mt-5 ms-5 btn-lg col-sm-5 btn-success" id="btnCadastrarPlano" type="submit" onclick="cadastrarPlano()">Cadastrar Plano</button>
      
          </div>
    </form>
    </div>    


    <!-- Area do formulario de alteração -->
    <div id="area_altera_cadastro_plano" class="d-flex justify-content-center visually-hidden col-sm-12">
    <form id="formAltPlanoFin" class="col-lg-8 col-sm-12">
       
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="nomeAlt" class="form-label">Nome do Plano</label>
              <input type="text" class="form-control" id="nomeAlt" placeholder="" value="">
            </div>

            <div class="col-sm-6">
              <label for="valorAlt" class="form-label">Valor do Plano</label>
              <input type="text" class="form-control" id="valorAlt" placeholder="" value="">
            </div>


            <div class="col-md-6">
              <label for="country" class="form-label">Periodicidade</label>
              <select class="form-select" id="periodicidadeAlt" >
                <option value="">Escolha...</option>
                <option value="diario">Diario</option>
                <option value="semanal">Semanal</option>
                <option value="mensal">Mensal</option>
                <option value="semestral">Semestral</option>
                <option value="anual">Anual</option>
              </select>
            </div>

            <div class="col-sm-6">
            <label for="country" class="form-label">Dia do Pagamento</label>
              <select class="form-select" id="diaPagtoAlt" >
                <option value="">Escolha...</option>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>

            <div class="col-md-12">
            <label for="country" class="form-label">Status do Plano</label>
            <select class="form-select" id="statusAlt" >
              <option value="">Escolha...</option>
              <option value="A">Ativo</option>
              <option value="I">Inativo</option>
            </select>
          </div>

          <div class="visually-hidden">
            <input type="text" id="idAlt">
          </div>
            
            <button class="btn mt-5 me-5 btn-lg col-sm-5 btn-secondary" id="btnVoltaAlteraListaPlanos" onclick='voltaListaPlanos()' type="submit" >Voltar</button>
            <button class="btn mt-5 ms-5 btn-lg col-sm-5 btn-warning" id="btnAlterarPlano" type="submit" onclick="alterarPlano()">Alterar Plano</button>
      
          </div>
    </form>
    </div>   


<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_fin_config_plan.js"></script>
