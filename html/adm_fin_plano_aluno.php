
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Adicionar Plano De Pagamento Ao Aluno</h1>
    </div>

    <!-- Area de listagem de usuario -->
    <div id="area_lista_cadastro_usuario" class="col-12">
      <div class="col-sm-6">
            <label for="nome" class="form-label">Pesquisar Aluno</label>
            <input type="text" class="form-control" id="pesquisa" placeholder="" value="">
      </div>
      <div class="table-responsive">
        <table id="tabelaDeUsuario"class="table table-striped col-12 table-sm">
          <thead>
            <tr>
              <th scope="col">Secionar</th>
              <th scope="col">Nome</th>
              <th scope="col">Sobre Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Data Nascimento</th>
            </tr>
          </thead>
          <tbody id="tabelaListaUsuario">
            
          </tbody>
        </table>
      </div>
    </div>
    <!-- Area do formulario de alteração -->
    <div id="area_altera_cadastro_usuario" class="d-flex justify-content-center visually-hidden col-sm-12">
    <form id="formAltCadUsuario" class="col-lg-8 col-sm-12">
       
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" placeholder="" value="" disabled>
          </div>

          <div class="col-sm-6">
            <label for="sobreNome" class="form-label">Sobre Nome</label>
            <input type="text" class="form-control" id="sobreNome" placeholder="" value="" disabled>
          </div>



          <div class="col-12">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="email@example.com" disabled>
          </div>

          <div class="col-12">
            <label for="senha" class="form-label">Senha</label>
            <input type="password" class="form-control" id="senha" placeholder="123456789" disabled>
          </div>

          <div class="col-md-6">
            <label for="country" class="form-label">Sexo</label>
            <select class="form-select" id="sexo" disabled>
              <option value="">Escolha...</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </div>

          <div class="col-md-6">
            <label for="dataNasc" class="form-label">Data Nascimento</label>
            <input disabled type="date" class="form-control" id="dataNasc" placeholder="" >
          </div>

          <div class="col-md-6">
            <label for="tel" class="form-label">Telefone</label>
            <input type="text" disabled onkeyup="mascaraTelefone(tel)" class="form-control" id="tel" placeholder="" >
          </div>

          <div class="col-md-6">
            <label for="country" class="form-label">Permite Receber Mensagem No Whatsapp</label>
            <select class="form-select" id="permiteMsg" disabled >
              <option value="S">Sim</option>
              <option value="N">Não</option>
            </select>
          </div>

          <div class="col-md-12">
            <label for="country" class="form-label">Status da Conta</label>
            <select class="form-select" id="status" disabled>
              <option value="">Escolha...</option>
              <option value="A">Ativo</option>
              <option value="I">Inativo</option>
              <option value="P">Pendente</option>
            </select>
          </div>

          <div class="col-md-12">
            <label for="country" class="form-label">Associar Um Plano Financeiro ao Aluno</label>
            <select class="form-select" id="planFin" >
              
            </select>
          </div>

          <div class="visually-hidden">
            <input type="text" id="idUsu">
          </div>
          <div class="visually-hidden">
            <input type="text" id="cobraAbertas">
          </div>
          <button class="btn mt-5 me-5 btn-lg col-sm-5 btn-secondary" id="btnVoltaListaUsuario" onclick='voltaListaUsuario()' type="submit" >Voltar</button>
          <button class="btn mt-5 ms-5 btn-lg col-sm-5 btn-warning" id="btnAssociaPlanoFinUsuario" type="submit" onclick="associarPlanoFinanceiroAluno()">Associar Plano</button>
    
        </div>
  </form>
</div>   



<!-- Modal Perdoa Parcelas-->
<div class="modal fade" id="modalPerdoaParcela" tabindex="-1" aria-labelledby="modalPerdoaParcela" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitlePerdoaParcela"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Deseja Continuar Cobrando As Mensalidades em Aberto Ou Perdoa-las?        
      </div>
      <div class="modal-footer col-12">
        <button type="button" class="btn btn-warning" onclick="perdoarCobraParcelas('N')" id="btnPerdoarParcelas" data-bs-dismiss="modal">Perdoar Parcelas</button>
        <button type="button" class="btn btn-success" onclick="perdoarCobraParcelas('S')" id="btnCobrarParcelas" data-bs-dismiss="modal">Cobrar Parcelas</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>


<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_fin_plano_aluno.js"></script>
