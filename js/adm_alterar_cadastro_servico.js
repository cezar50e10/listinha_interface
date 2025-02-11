ativaMenu('menu_mol_adm_servicosprestados',true,[['menu_mol_adm_servicosprestados_altera','flush-collapseServicoPrestado']])
//impede formulario de submit automatico - comum.js
cancelaEventPreventDefault('submit','formAltCadServico')

function alterarCadastroServico(){
    bloqueiaBtnCarregando('btnAlteraCadastroServico')
    bloqueiaBtnCarregando('btnVoltaListaServico')
    let obj = {
            "NOME":document.getElementById('nome').value,
            "VALOR":parseFloat(document.getElementById('valor').value),
            "DESCRICAO":document.getElementById('descricao').value,
            "STATUS":document.getElementById('status').value,
            "TEMPO":document.getElementById('tempo').value,
            "ID":document.getElementById('idProd').value
        }
    fazPost(URL_API,obj,"alteraServicoPrestado",retornoAlteraCadastroServico,true)
  }
  function retornoAlteraCadastroServico(objRetorno,erro){
    
    if(erro){
        exibeMsgErro(objRetorno['OBJETO_RETORNO'])
        desBloqueiaBtnCarregando('btnAlteraCadastroServico')
        desBloqueiaBtnCarregando('btnVoltaListaServico')
      }else{
        exibeMsgSucesso("Servico Alterado Com Sucesso!")
        setTimeout(function(){
          document.location.reload(true);
        }, 5000);
      }
  }
  
  listarServicos()
  function listarServicos(){
    let obj = ""
    fazPost(URL_API,obj,"listarServico",retornoListarServicos,false)
  }
  function retornoListarServicos(servicos,erro){
       
    let tabela = document.querySelector("#tabelaListaServico");
    tabela.innerHTML="";
    for(let i = 0;i < servicos.length;i++){  
      //console.log(servicos[i]);

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
      
      btnVisualiza.setAttribute('onclick', 'consultarServicoPesq('+servicos[i]['ID']+')')

      colunaBtn.appendChild(btnVisualiza)

      let colunaNome = document.createElement("td");
      let textoNome = document.createTextNode(' '+servicos[i]['NOME']);
      colunaNome.appendChild(textoNome)

      let colunaValor = document.createElement("td");
      let textoValor = document.createTextNode(' '+formataMoedaBRL(servicos[i]['VALOR']));
      colunaValor.appendChild(textoValor)

      let colunaStatus = document.createElement("td");
      let textoStatus = document.createTextNode(' '+retornaStatusPadrao(servicos[i]['STATUS']));
      colunaStatus.appendChild(textoStatus)

      let colunaDataCria = document.createElement("td");
      let textoDataCria = document.createTextNode(' '+servicos[i]['TEMPO']);
      colunaDataCria.appendChild(textoDataCria)


      linha.appendChild(colunaBtn); 
      linha.appendChild(colunaNome); 
      linha.appendChild(colunaValor); 
      linha.appendChild(colunaStatus); 
      linha.appendChild(colunaDataCria); 
      
      linha.setAttribute('id','idLinhaTabUsu'+i)
      tabela.appendChild(linha);
    }
    adicionaPesquisaEmTabelasStaticas('pesquisa','tabelaDeServico')
  }
function consultarServicoPesq(id){
  let obj = {
    "ID":id
  }
    fazPost(URL_API,obj,"consultarServico",retornoConsultarServicoPesq,false)
}
function retornoConsultarServicoPesq(objRetorno,erro){
  if(!erro){
    preencheFormAlteracao(objRetorno[0])
    let area_lista_cadastro_servico = document.getElementById('area_lista_cadastro_servico')
    let area_altera_cadastro_servico = document.getElementById('area_altera_cadastro_servico')

    area_lista_cadastro_servico.classList.add('visually-hidden')
    area_altera_cadastro_servico.classList.remove('visually-hidden')
  }
}
function preencheFormAlteracao(SERVICO){
  document.getElementById('nome').value = SERVICO['NOME']
  document.getElementById('valor').value = SERVICO['VALOR']
  document.getElementById('tempo').value = SERVICO['TEMPO']
  document.getElementById('descricao').value = SERVICO['DESCRICAO']
  document.getElementById('status').value = SERVICO['STATUS']
  document.getElementById('idProd').value = SERVICO['ID']
}

function voltaListaServico(){
  let area_lista_cadastro_servico = document.getElementById('area_lista_cadastro_servico')
    let area_altera_cadastro_servico = document.getElementById('area_altera_cadastro_servico')

    area_lista_cadastro_servico.classList.remove('visually-hidden')
    area_altera_cadastro_servico.classList.add('visually-hidden')
}