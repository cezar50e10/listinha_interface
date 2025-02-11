ativaMenu('menu_mol_adm_financeiro',true,[['menu_mol_adm_financeiro_planosalunos','flush-collapseFinanceiro']])

//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','formAltCadUsuario')

function associarPlanoFinanceiroAluno(){
    bloqueiaBtnCarregando('btnAssociaPlanoFinUsuario')
    bloqueiaBtnCarregando('btnVoltaListaUsuario')
    let obj = {
            "ID_ALUNO":document.getElementById('idUsu').value,
            "ID_PLANO":document.getElementById('planFin').value,
            "COBRA_PARCELAS_ABERTAS":document.getElementById('cobraAbertas').value
        }
    fazPost(URL_API,obj,"associarPlanoFinanceiroAluno",retornoAssociarPlanoFinanceiroAluno,true)
  }
  function retornoAssociarPlanoFinanceiroAluno(objRetorno,erro){
    
    if(erro){
        if(objRetorno['OBJETO_RETORNO']['CODIGO']=='51'){
          let myModal = new bootstrap.Modal(document.getElementById('modalPerdoaParcela'))
          myModal.show()
        }else{
          exibeMsgErro(objRetorno['OBJETO_RETORNO'])
        }
        
        desBloqueiaBtnCarregando('btnAssociaPlanoFinUsuario')
        desBloqueiaBtnCarregando('btnVoltaListaUsuario')
      }else{
          exibeMsgSucesso("Plano Financeiro Associado com sucesso")
       
        setTimeout(function(){
          document.location.reload(true);
        }, 5000);
      }
  }
  
  listaUsuariosParaPlanoFin()
  function listaUsuariosParaPlanoFin(){
    let obj = ""
    fazPost(URL_API,obj,"listaUsuariosParaPlanoFin",retornoListaUsuariosParaPlanoFin,false)
  }


  function retornoListaUsuariosParaPlanoFin(usuarios,erro){
    
    let obj = ""
    fazPost(URL_API,obj,"listaPlanosAtivosCompletosCadastradosJSON",retornoListaPlanosFinanceiros,false)


    let tabela = document.querySelector("#tabelaListaUsuario");
    tabela.innerHTML="";
    for(let i = 0;i < usuarios.length;i++){  
      //console.log(usuarios[i]);

      let linha = document.createElement("tr");
        
      let colunaBtn = document.createElement("td");
      let btnVisualiza = document.createElement("btn")
      let iconMao = document.createElement("img")
      iconMao.setAttribute('src', '../image/bootstrap-icons-1.8.3/hand-index.svg')
      iconMao.setAttribute('width', '25')
      iconMao.setAttribute('height', '25')

      //let textoBtn = document.createTextNode("X");
      btnVisualiza.appendChild(iconMao)
      btnVisualiza.classList.add('btn')
      btnVisualiza.classList.add('btn-outline-info')
      
      btnVisualiza.setAttribute('onclick', 'trazUsuarioPorIdPesq('+usuarios[i]['ID']+')')

      colunaBtn.appendChild(btnVisualiza)

      let colunaNome = document.createElement("td");
      let textoNome = document.createTextNode(' '+usuarios[i]['PERFIL']['NOME']);
      colunaNome.appendChild(textoNome)

      let colunaSobreNome = document.createElement("td");
      let textoSobreNome = document.createTextNode(' '+usuarios[i]['PERFIL']['SOBRE_NOME']);
      colunaSobreNome.appendChild(textoSobreNome)

      let colunaEmail = document.createElement("td");
      let textoEmail = document.createTextNode(' '+usuarios[i]['USUARIO']);
      colunaEmail.appendChild(textoEmail)

      let colunaDataNasc = document.createElement("td");
      let textoDataNasc = document.createTextNode(' '+dataFormatada(usuarios[i]['PERFIL']['DATA_NASC']));
      colunaDataNasc.appendChild(textoDataNasc)


      linha.appendChild(colunaBtn); 
      linha.appendChild(colunaNome); 
      linha.appendChild(colunaSobreNome); 
      linha.appendChild(colunaEmail); 
      linha.appendChild(colunaDataNasc); 
      
      linha.setAttribute('id','idLinhaTabUsu'+i)
      tabela.appendChild(linha);
    }
    adicionaPesquisaEmTabelasStaticas('pesquisa','tabelaDeUsuario')
  }
function trazUsuarioPorIdPesq(id){
  trazUsuarioPorId(id,retornoTrazUsuarioPorIdPesq)
}
function retornoTrazUsuarioPorIdPesq(objRetorno,erro){
  if(!erro){
    preencheFormAlteracao(objRetorno)
    let area_lista_cadastro_usuario = document.getElementById('area_lista_cadastro_usuario')
    let area_altera_cadastro_usuario = document.getElementById('area_altera_cadastro_usuario')

    area_lista_cadastro_usuario.classList.add('visually-hidden')
    area_altera_cadastro_usuario.classList.remove('visually-hidden')
  }
}
function preencheFormAlteracao(USUARIO){
  document.getElementById('nome').value = USUARIO['PERFIL']['NOME']
  document.getElementById('sobreNome').value = USUARIO['PERFIL']['SOBRE_NOME']
  document.getElementById('email').value = USUARIO['USUARIO']
  document.getElementById('senha').value = USUARIO['SENHA']
  document.getElementById('dataNasc').value = USUARIO['PERFIL']['DATA_NASC']
  document.getElementById('sexo').value = USUARIO['PERFIL']['SEXO']
  document.getElementById('tel').value = USUARIO['PERFIL']['TEL']
  document.getElementById('permiteMsg').value = USUARIO['PERFIL']['PERMITE_MSG']
  document.getElementById('status').value = USUARIO['STATUS']
  document.getElementById('idUsu').value = USUARIO['ID']
}

function voltaListaUsuario(){
  let area_lista_cadastro_usuario = document.getElementById('area_lista_cadastro_usuario')
    let area_altera_cadastro_usuario = document.getElementById('area_altera_cadastro_usuario')

    area_lista_cadastro_usuario.classList.remove('visually-hidden')
    area_altera_cadastro_usuario.classList.add('visually-hidden')
}


function retornoListaPlanosFinanceiros(planos,erro){
  let select = document.querySelector("#planFin");
  select.innerHTML="";

  let option = document.createElement("option");
  let textoOption = document.createTextNode("Nenhum");
  option.appendChild(textoOption)
  option.setAttribute('value', "I");
  select.appendChild(option);
  for(let i = 0;i < planos.length;i++){  
    
    let option = document.createElement("option");
    let textoOption = document.createTextNode(planos[i]['NOME']);
    option.appendChild(textoOption)
    option.setAttribute('value', planos[i]['ID']);

    select.appendChild(option);
  }
}

function perdoarCobraParcelas(flagPerdoaCobra){
  document.getElementById('cobraAbertas').value = flagPerdoaCobra
  associarPlanoFinanceiroAluno();
}