
<?php include_once 'topo.php'?>
<?php include_once 'menu.php'?>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Tire Suas Dúvidas Com Nossa Equipe</h1>
    </div>
    <div class="d-flex justify-content-center  col-sm-12">
    <form id="formAltCadUsuario" class="col-lg-8 col-sm-12">
       
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" disabled="disabled"id="nome" placeholder="" value="">
          </div>

          <div class="col-sm-6">
            <label for="sobreNome" class="form-label">Sobre Nome</label>
            <input type="text" class="form-control" id="sobreNome"disabled="disabled" placeholder="" value="">
          </div>



          <div class="col-12">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" disabled="disabled" placeholder="email@example.com">
          </div>


          <div class="form-floating">
            <textarea class="form-control" placeholder="Digite aqui sua mensagem..." id="mensagemSAC" style="height: 100px"></textarea>
            <label for="mensagemSAC">Digite aqui sua mensagem...</label>
          </div>

          <button class="btn btn-lg col-sm-12 btn-success" id="btnEnviaDuvida" type="submit" onclick="enviaDuvidaSAC()">Enviar Mensagem</button>
    
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
<script src="../../interface/js/usr_duvida_sac.js"></script>
