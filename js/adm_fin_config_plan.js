ativaMenu('menu_mol_adm_financeiro',true,[['menu_mol_adm_financeiro_configplanos','flush-collapseFinanceiro']])

//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','formCadPlanoFin')
cancelaEventPreventDefault('submit','formAltPlanoFin')


function inciaCadastroPlano(){
  
  
    let area_lista_cadastro_plano = document.getElementById('area_lista_cadastro_plano')
    let area_altera_cadastro_plano = document.getElementById('area_altera_cadastro_plano')

    let area_cadastro_plano_fin = document.getElementById('area_cadastro_plano_fin')

    area_lista_cadastro_plano.classList.add('visually-hidden')
    area_altera_cadastro_plano.classList.add('visually-hidden')

    area_cadastro_plano_fin.classList.remove('visually-hidden')
  
}

function voltaListaPlanos(){
  let area_lista_cadastro_plano = document.getElementById('area_lista_cadastro_plano')
    let area_altera_cadastro_plano = document.getElementById('area_altera_cadastro_plano')

    let area_cadastro_plano_fin = document.getElementById('area_cadastro_plano_fin')

    area_lista_cadastro_plano.classList.remove('visually-hidden')
    area_altera_cadastro_plano.classList.add('visually-hidden')

    area_cadastro_plano_fin.classList.add('visually-hidden')
}

function cadastrarPlano(){
  bloqueiaBtnCarregando('btnVoltaListaPlanos')
  bloqueiaBtnCarregando('btnCadastrarPlano')
  let obj = {
        "PLANO_CADASTRADO":{
          "NOME":document.getElementById('nome').value,
          "VALOR":document.getElementById('valorPlano').value,
          "PERIODICIDADE":document.getElementById('periodicidade').value,
          "DIA_PAGTO":document.getElementById('diaPagto').value
        }
      }
  fazPost(URL_API,obj,"cadastrarPlano",retornoCadastrarPlano,true)
}

function retornoCadastrarPlano(objRetorno,erro){

  if(erro){
    exibeMsgErro(objRetorno['OBJETO_RETORNO'])
    desBloqueiaBtnCarregando('btnVoltaListaPlanos')
    desBloqueiaBtnCarregando('btnCadastrarPlano')
  }else{
    //console.log(objRetorno)
    voltaListaPlanos()
    exibeMsgSucesso("Plano Cadastrado Com Sucesso")
    }

}



listaPlanosCompletosCadastrados()
  function listaPlanosCompletosCadastrados(){
    let obj = ""
    fazPost(URL_API,obj,"listaPlanosCompletosCadastrados",retornoListaPlanosCompletosCadastrados,false)
  }
  function retornoListaPlanosCompletosCadastrados(planos,erro){
       
    let tabela = document.querySelector("#tabelaListaPlanos");
    tabela.innerHTML="";
    for(let i = 0;i < planos.length;i++){  
      //console.log(planos[i]);

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
      
      btnVisualiza.setAttribute('onclick', 'trazPlanoPorIdPesq('+planos[i]['ID']+')')

      colunaBtn.appendChild(btnVisualiza)

      let colunaNome = document.createElement("td");
      let textoNome = document.createTextNode(' '+planos[i]['NOME']);
      colunaNome.appendChild(textoNome)

      let colunaValor = document.createElement("td");
      let textoValor = document.createTextNode(' '+planos[i]['VALOR']);
      colunaValor.appendChild(textoValor)

      let colunaPeriodicidade = document.createElement("td");
      let textoPeriodicidade = document.createTextNode(' '+planos[i]['PERIODICIDADE']);
      colunaPeriodicidade.appendChild(textoPeriodicidade)

      let colunaStatus = document.createElement("td");
      let textoStatus = document.createTextNode(' '+planos[i]['STATUS']);
      colunaStatus.appendChild(textoStatus)


      linha.appendChild(colunaBtn); 
      linha.appendChild(colunaNome); 
      linha.appendChild(colunaValor); 
      linha.appendChild(colunaPeriodicidade); 
      linha.appendChild(colunaStatus); 
      
      linha.setAttribute('id','idLinhaTabPlan'+i)
      tabela.appendChild(linha);
    }
    adicionaPesquisaEmTabelasStaticas('pesquisa','tabelaDePlanos')
  }


  function trazPlanoPorIdPesq(id){
    let obj = {"ID":id}
    fazPost(URL_API,obj,"trazPlanoPorIdPesq",retornoTrazPlanoPorIdPesq,false)
  }
  function retornoTrazPlanoPorIdPesq(objRetorno,erro){
    if(!erro){
      preencheFormAlteracao(objRetorno)
      let area_lista_cadastro_plano = document.getElementById('area_lista_cadastro_plano')
      let area_altera_cadastro_plano = document.getElementById('area_altera_cadastro_plano')
  
      let area_cadastro_plano_fin = document.getElementById('area_cadastro_plano_fin')
  
      area_lista_cadastro_plano.classList.add('visually-hidden')
      area_altera_cadastro_plano.classList.remove('visually-hidden')
  
      area_cadastro_plano_fin.classList.add('visually-hidden')
    }
  }
  function preencheFormAlteracao(PLANO){
    document.getElementById('nomeAlt').value = PLANO['NOME']
    document.getElementById('valorAlt').value = PLANO['VALOR']
    document.getElementById('periodicidadeAlt').value = PLANO['PERIODICIDADE']
    document.getElementById('diaPagtoAlt').value = PLANO['DIA_PAGTO']
    document.getElementById('statusAlt').value = PLANO['STATUS']
    document.getElementById('idAlt').value = PLANO['ID']
  }
  

  function alterarPlano(){
    bloqueiaBtnCarregando('btnVoltaAlteraListaPlanos')
    bloqueiaBtnCarregando('btnAlterarPlano')
    let obj = {
            "PLANO_ALTERADO":{
              "NOME":document.getElementById('nomeAlt').value,
              "VALOR":document.getElementById('valorAlt').value,
              "PERIODICIDADE":document.getElementById('periodicidadeAlt').value,
              "DIA_PAGTO":document.getElementById('diaPagtoAlt').value,
              "STATUS":document.getElementById('statusAlt').value,
              "ID":document.getElementById('idAlt').value
            }
          }
    fazPost(URL_API,obj,"alterarPlanoFin",retornoAlteraPlanoFin,true)
  }


  function retornoAlteraPlanoFin(objRetorno,erro){
    
    if(erro){
        exibeMsgErro(objRetorno['OBJETO_RETORNO'])
        desBloqueiaBtnCarregando('btnVoltaAlteraListaPlanos')
        desBloqueiaBtnCarregando('btnAlterarPlano')
      }else{
        //console.log(objRetorno)
          exibeMsgSucesso("Plano Alterado Com Sucesso")
        
        setTimeout(function(){
          document.location.reload(true);
        }, 5000);
      }
  }