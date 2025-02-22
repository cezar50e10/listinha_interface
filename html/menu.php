<div class="container-fluid overflow-auto">
  <div class="row overflow-auto">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar overflow-auto collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item ">
            <a class="nav-link active menuBar visually-hidden" id="menu_mol_usu_agenda" onclick="redireciona(URL_PAINEL_USR_AGENDA)" href="#">
              <span data-feather="calendar"></span>
              Agenda
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menuBar visually-hidden" id="menu_mol_usu_cadastro" onclick="redireciona(URL_PAINEL_USR_ALT_CAD)" href="#">
              <span data-feather="user"></span>
              Meu Cadastro
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menuBar visually-hidden" id="menu_mol_usu_ajuda" onclick="redireciona(URL_PAINEL_USR_AJUDA)" href="#">
              <span data-feather="help-circle"></span>
              Ajuda
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menuBar visually-hidden" id="menu_mol_usu_mensalidade" onclick="redireciona(URL_PAINEL_USR_MENSALIDADE)" href="#">
              <span data-feather="help-circle"></span>
              Mensalidades
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading  d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted visually-hidden" id="divisaoAdm">
          <span>Menu Administrativo</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <div class="accordion accordion-flush" id="accordionFlushAdmUsuarios">
              <div class="accordion-item">
                <span class="accordion-header" id="flush-headingAdmUsuarios">
                  <a class="nav-link menuBar visually-hidden" href="#" id="menu_mol_adm_usuarios"   data-bs-toggle="collapse" data-bs-target="#flush-collapseAdmUsuarios" aria-expanded="false" aria-controls="flush-collapseAdmUsuarios">
                  <span data-feather="users"></span>
                  Usuários
                  </a>
                </h2>
                <div id="flush-collapseAdmUsuarios" class="accordion-collapse collapse" aria-labelledby="flush-headingAdmUsuarios" data-bs-parent="#accordionFlushAdmUsuarios">
                  <div class="accordion-body">
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_usuario_cad" onclick="redireciona(URL_PAINEL_ADM_CADASTRAR_USUARIO)" href="#">
                          <span data-feather="user-plus"></span>
                          Cadastrar Usuario
                        </a>
                      </li>         
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_usuario_alt" onclick="redireciona(URL_PAINEL_ADM_ALTERAR_CADASTRO_USUARIO)" href="#">
                          <span data-feather="user-check"></span>
                          Alterar Usuario
                        </a>
                      </li> 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="accordion accordion-flush" id="accordionFlushControleAcesso">
              <div class="accordion-item">
                <span class="accordion-header" id="flush-headingControleAcesso">
                  <a class="nav-link menuBar visually-hidden" href="#" id="menu_mol_adm_controleacesso"  data-bs-toggle="collapse" data-bs-target="#flush-collapseControleAcesso" aria-expanded="false" aria-controls="flush-collapseControleAcesso">
                  <span data-feather="clipboard"></span>
                  Controle Acesso
                  </a>
                </h2>
                <div id="flush-collapseControleAcesso" class="accordion-collapse collapse" aria-labelledby="flush-headingControleAcesso" data-bs-parent="#accordionFlushControleAcesso">
                  <div class="accordion-body">
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_controleacesso_grupousuario" onclick="redireciona(URL_PAINEL_ADM_CTRL_GRUPO_USUARIO)" href="#">
                          <span data-feather="settings"></span>
                          Grupo Usuário
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_controleacesso_acessopaginas" onclick="redireciona(URL_PAINEL_ADM_CTRL_ACESSO_PAGINAS)" href="#">
                          <span data-feather="sidebar"></span>
                          Acesso as Páginas
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_controleacesso_acessoconteudo" onclick="redireciona(URL_PAINEL_ADM_CTRL_ACESSO_CONTEUDO)" href="#">
                          <span data-feather="columns"></span>
                          Acesso ao Conteúdo
                        </a>
                      </li>         
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_controleacesso_permissaousuario" onclick="redireciona(URL_PAINEL_ADM_CTRL_PERMISSOES_USUARIO)" href="#">
                          <span data-feather="alert-triangle"></span>
                          Permissões Usuário
                        </a>
                      </li>         
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="accordion accordion-flush" id="accordionFlushServicoPrestado">
              <div class="accordion-item">
                <span class="accordion-header" id="flush-headingServicoPrestado">
                  <a class="nav-link menuBar visually-hidden" href="#"  id="menu_mol_adm_servicosprestados"  data-bs-toggle="collapse" data-bs-target="#flush-collapseServicoPrestado" aria-expanded="false" aria-controls="flush-collapseServicoPrestado">
                  <span data-feather="grid"></span>
                  Serviços Prestados
                  </a>
                </h2>
                <div id="flush-collapseServicoPrestado" class="accordion-collapse collapse" aria-labelledby="flush-headingServicoPrestado" data-bs-parent="#accordionFlushServicoPrestado">
                  <div class="accordion-body">
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_servicosprestados_cadastro" onclick="redireciona(URL_PAINEL_ADM_CADASTRO_SERVICO)" href="#">
                          <span data-feather="hash"></span>
                          Cadastro
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_servicosprestados_altera" onclick="redireciona(URL_PAINEL_ADM_ALTERA_SERVICO)" href="#">
                          <span data-feather="crosshair"></span>
                          Alteração
                        </a>
                      </li>   
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_servicosprestados_atribuifuncionario" onclick="redireciona(URL_PAINEL_ADM_SERVICO_USUARIO)" href="#">
                          <span data-feather="award"></span>
                          Atribui Funcionario
                        </a>
                      </li>       
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_pacientes" onclick="redireciona(URL_PAINEL_ADM_PACIENTE_FUNCIONARIO)" href="#">
              <span data-feather="watch"></span>
              Pacientes
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_agenda" onclick="redireciona(URL_PAINEL_ADM_AGENDA)" href="#">
              <span data-feather="calendar"></span>
              Agenda
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_comprovantes" onclick="redireciona(URL_PAINEL_ADM_COMPROVANTE)" href="#">
              <span data-feather="printer"></span>
              Comprovante Pagto
            </a>
          </li>
          <li class="nav-item">
            <div class="accordion accordion-flush" id="accordionFlushFinanceiro">
              <div class="accordion-item">
                <span class="accordion-header" id="flush-headingFinanceiro">
                  <a class="nav-link menuBar visually-hidden" href="#" id="menu_mol_adm_financeiro"  data-bs-toggle="collapse" data-bs-target="#flush-collapseFinanceiro" aria-expanded="false" aria-controls="flush-collapseFinanceiro">
                  <span data-feather="printer"></span>
                  Financeiro
                  </a>
                </h2>
                <div id="flush-collapseFinanceiro" class="accordion-collapse collapse" aria-labelledby="flush-headingFinanceiro" data-bs-parent="#accordionFlushFinanceiro">
                  <div class="accordion-body">
                    <ul class="nav flex-column mb-2">
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_financeiro_configplanos" onclick="redireciona(URL_PAINEL_ADM_FIN_CONFIG_PLAN)" href="#">
                          <span data-feather="printer"></span>
                          Config Planos
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_financeiro_planosalunos" onclick="redireciona(URL_PAINEL_ADM_FIN_PLANO_ALUNO)" href="#">
                          <span data-feather="sidebar"></span>
                          Planos Alunos
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link menuBar visually-hidden" id="menu_mol_adm_financeiro_pagamentos" onclick="redireciona(URL_PAINEL_ADM_FIN_PAGAMENTOS)" href="#">
                          <span data-feather="columns"></span>
                          Pagamentos
                        </a>
                      </li>               
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">


    <div id="mensagem-retorno-API" class="alert mt-2 mb-2 "role="alert">tretreter</div>

