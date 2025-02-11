
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Cadastrar Usuario</h1>
    </div>
    <div class="d-flex justify-content-center  col-sm-12">
    <form id="formCadUsuario">
    
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
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="email@example.com">
          </div>

          <div class="col-12">
            <label for="emailConfirm" class="form-label">Confirme o Email</label>
            <input type="emailConfirm" class="form-control" id="emailConfirm" placeholder="email@example.com">
          </div>

          <div class="col-5">
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
            <input type="text" onkeyup="mascaraTelefone(tel)" class="form-control" id="tel" placeholder="" >
          </div>

          <div class="col-md-6">
            <label for="country" class="form-label">Permite Receber Mensagem No Whatsapp</label>
            <select class="form-select" id="permiteMsg" >
              <option value="S">Sim</option>
              <option value="N">Não</option>
            </select>
          </div>
        </div>
      

 
    <button class="w-100 mt-4 btn btn-lg btn-success" id="btnCadastrarUsuario" type="submit" onclick="cadastrarUsuario()">Cadastrar</button>
    
  </form>
</div>   

<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_cadastrar_usuario.js"></script>
