<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Tela de Login">
    <meta name="author" content="DotBR">
    <meta name="generator" content="Cezar">
    <title>Gerenciador de Academia de Capoeira - Biriba</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/dashboard/">
    <link rel="shortcut icon" href="../image/berimbau.png" type="image/x-icon">
    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../js/fullcalendar/main.min.css" rel="stylesheet">
    <link href="../css/calendario.css" rel="stylesheet">

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
    <link href="../css/painel_de_controle.css" rel="stylesheet">
  </head>
  <body>
    
<header class="navbar navbar-dark sticky-top bg-info flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-4 col-lg-2 me-0 px-3" href="#">Academia Capoart</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100" type="text" id="buscaCardapio" onkeyup="buscaCardapio()" placeholder="" aria-label="">
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <button class="btn btn-outline-danger nav-link px-3" onclick="deslogar()">  Sair  </button>
    </div>
  </div>
</header>

