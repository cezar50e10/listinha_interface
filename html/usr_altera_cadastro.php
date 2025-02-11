
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Meu Cadastro</h1>
    </div>
    <div class="d-flex justify-content-center  col-sm-12">
    <form id="formAltCadUsuario" class="col-lg-8 col-sm-12">
       
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" placeholder="" value="">
          </div>

          <div class="col-sm-6">
            <label for="sobreNome" class="form-label">Sobre Nome</label>
            <input type="text" class="form-control" id="sobreNome" placeholder="" value="">
          </div>



          <div class="col-12">
            <label for="email" class="form-label">Email
            <button type="button" class="btn btn-sm btn-warning ms-3" 
            data-bs-toggle="popover" title="ATENÇÃO" 
            data-bs-content="Ao alterar o seu email para um diferente do já cadastrado, será necessario reconfirmar o seu cadastro através do link enviado ao novo email, e depois fazer um novo login">!</button>
            </label>
            <input type="email" class="form-control" id="email" placeholder="email@example.com">
          </div>

          <div class="col-12">
            <label for="emailConfirm" class="form-label">Confirme seu Email</label>
            <input type="emailConfirm" class="form-control" id="emailConfirm" placeholder="email@example.com">
          </div>

          <div class="col-6">
            <label for="senha" class="form-label">Senha</label>
            <input type="password" class="form-control" id="senha" placeholder="123456789" >
          </div>

          <div class="col-6">
            <label for="cpf" class="form-label">CPF</label>
            <input type="text" class="form-control" id="cpf" maxlength="14" placeholder="000.000.000-00" >
          </div>

          <div class="col-md-6">
            <label for="country" class="form-label">Sexo</label>
            <select class="form-select" id="sexo" >
              <option value="">Escolha...</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </div>

          <div class="col-md-6">
            <label for="dataNasc" class="form-label">Data Nascimento</label>
            <input type="date" class="form-control" id="dataNasc" placeholder="" >
          </div>

          <div class="col-md-6">
            <label for="tel" class="form-label">Telefone</label>
            <input type="text" class="form-control" onkeyup="mascaraTelefone(tel)" id="tel" placeholder="" >
          </div>

          <div class="col-md-6">
            <label for="country" class="form-label">Permite Receber Mensagem No Whatsapp</label>
            <select class="form-select" id="permiteMsg" >
              <option value="S">Sim</option>
              <option value="N">Não</option>
            </select>
          </div>

          <button class="btn mt-5 me-5 btn-lg col-sm-5 btn-danger" data-bs-toggle="modal" data-bs-target="#modalExcluirConta" id="btnExcluiCadastroUsuario" type="submit" >Excluir Cadastro</button>
          <button class="btn mt-5 ms-5 btn-lg col-sm-5 btn-warning" id="btnAlteraCadastroUsuario" type="submit" onclick="alterarCadastroUsuario()">Alterar Cadastro</button>
    
        </div>
  </form>
</div>   

<!-- Modal ExclusãoConta-->
<div class="modal fade" id="modalExcluirConta" tabindex="-1" aria-labelledby="modalExcluirContaLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalExcluirContaLabel">Tem Certeza?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Atenção: Se você excluir sua conta agora, perderá acesso ao sistema, e não conseguirá utilizar mais as funções, consultas e nem poderá criar outra conta com o mesmo usuario <b><span id="usuarioExcluido"></span></b>!
        <br/>Caso queira recuperar a conta no futuro, será necessario entrar em contato com um dos administradores do sistema...Tem certeza que quer prosseguir?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Não</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="excluirCadastroUsuario()">Sim</button>
      </div>
    </div>
  </div>
</div>



<?php include_once 'rodape.php'?>
<script src="../../interface/js/usr_altera_cadastro.js"></script>
