
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Alterar Cadastro Usuario</h1>
    </div>

    <!-- Area de listagem de usuario -->
    <div id="area_lista_cadastro_usuario" class="col-12">
      <div class="col-sm-6">
            <label for="nome" class="form-label">Pesquisar Usuario</label>
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
            <label for="email" class="form-label">Email
            </label>
            <input type="email" class="form-control" id="email" placeholder="email@example.com" disabled>
          </div>

          <div class="col-12">
            <label for="emailConfirm" class="form-label">Confirme seu Email</label>
            <input type="emailConfirm" class="form-control" id="emailConfirm" placeholder="email@example.com" disabled>
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
            <input type="date" class="form-control" id="dataNasc" placeholder="" disabled>
          </div>

          <div class="col-md-12">
            <label for="country" class="form-label">Status da Conta</label>
            <select class="form-select" id="status" disabled >
              <option value="">Escolha...</option>
              <option value="A">Ativo</option>
              <option value="I">Inativo</option>
              <option value="P">Pendente</option>
            </select>
          </div>

          <div class="col-md-6">
            <label for="country" class="form-label">Grupo Usuario</label>
            <select class="form-select" id="simboloGrupo" >
              
            </select>
          </div>
          <div class="col-md-6">
            <label for="country" class="form-label">Nivel Grupo Usuario</label>
            <select class="form-select" id="nivelGrupo" >
              <option value="1">Nivel 1</option>
              <option value="2">Nivel 2</option>
              <option value="3">Nivel 3</option>
              <option value="4">Nivel 4</option>
              <option value="5">Nivel 5</option>
              <option value="6">Nivel 6</option>
              <option value="7">Nivel 7</option>
              <option value="8">Nivel 8</option>
              <option value="9">Nivel 9</option>
            </select>
          </div>
          <div class="visually-hidden">
            <input type="text" id="idUsu">
          </div>
          <button class="btn mt-5 me-5 btn-lg col-sm-5 btn-secondary" id="btnVoltaAlteraGrupoUsuario" onclick='voltaListaUsuario()' type="submit" >Voltar</button>
          <button class="btn mt-5 ms-5 btn-lg col-sm-5 btn-warning" id="btnAlteraGrupoUsuario" type="submit" onclick="alterarUsuarioDeGrupoUsuario()">Alterar Grupo Cadastro</button>
    
        </div>
  </form>
</div>   


<?php include_once 'rodape.php'?>
<script src="../../interface/js/adm_permissoes_usuario.js"></script>
