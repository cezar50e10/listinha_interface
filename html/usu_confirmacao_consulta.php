<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Tela de Login">
    <meta name="author" content="DotBR">
    <meta name="generator" content="Cezar">
    <title>Gerenciador de Academia - Biriba</title>



    
    <link rel="shortcut icon" href="../image/berimbau.png" type="image/x-icon">
    <!-- Bootstrap core CSS -->
<link href="../css/bootstrap.min.css" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
    <!-- Custom styles for this template -->
    <link href="../css/signin.css" rel="stylesheet">
  </head>
  <body class="text-center">
    
<main class="form-signin">
  <form id="loginUsuario" class='col-12'>
    <a href="../"><img class="mb-4" src="../image/berimbau.png" alt="Logo" width="72" height="72"></a>
    <h1 class="h3 mb-3 fw-normal">Digite as Credenciais para Identificação</h1>
    <div class="mb-3">
      <label for="descricaoConsulta" class="form-label">Descrição Consulta</label>
      <textarea rows="10"class="form-control" id="descricaoConsulta" rows="3"></textarea>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="emailLogin" placeholder="nome@exemplo.com">
      <label for="emailLogin">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="senhaLogin" placeholder="Senha">
      <label for="senhaLogin">Senha</label>
    </div>
    <div class="row">
    <button class="w-50 btn btn-lg btn-success"  type="submit" onclick="confirmarComparecimento(true)">
        Sim
    </button>
    
    <button class="w-50 btn btn-lg btn-danger" type="submit" onclick="confirmarComparecimento(false)">
        Não
    </button>
    </div>
    <div id="mensagem-retorno-API" class="alert visually-hidden mt-2 mb-2"role="alert"></div>
    
    <p class="mt-5 mb-3 text-muted">Produzido por <a href="https://dotbr.net.br" target="_blank">DotBR &copy;</a> <span id="anoInicio"></span></p>
  </form>
</main>
<script src="../js/comum.js"></script>
<script src="../js/URL.js"></script>
<script src="../js/usu_confirmacao_consulta.js"></script>


 
  </body>
</html>
