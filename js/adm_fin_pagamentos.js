ativaMenu('menu_mol_adm_financeiro',true,[['menu_mol_adm_financeiro_pagamentos','flush-collapseFinanceiro']])
cancelaEventPreventDefault('submit','formPagto')

listarUsuariosFiltros()
function listarUsuariosFiltros(){
    let obj = ""
    fazPost(URL_API,obj,"listaUsuariosParaPlanoFin",retornoListaUsuariosParaPlanoFin,false)
      
}

function retornoListaUsuariosParaPlanoFin(usuarios,erro){
    let select = document.querySelector("#usuarioFiltro");
    select.innerHTML="";

  let option = document.createElement("option");
  let textoOption = document.createTextNode("Escolha Um...");
  option.appendChild(textoOption)
  option.setAttribute('value', "");
  select.appendChild(option);
  for(let i = 0;i < usuarios.length;i++){  
    
    let option = document.createElement("option");
    let textoOption = document.createTextNode(usuarios[i]['PERFIL']['NOME']+" "+usuarios[i]['PERFIL']['SOBRE_NOME']);
    option.appendChild(textoOption)
    option.setAttribute('value', usuarios[i]['ID']);

    select.appendChild(option);
  }
}

function pesquisarParcelas(){
    usuarioFiltro = document.getElementById('usuarioFiltro').value
    statusParcela = document.getElementById('statusParcela').value
    let dataIni = document.getElementById('dataIni').value
    let dataFim = document.getElementById('dataFim').value

    let obj = {
        "ID_ALUNO":usuarioFiltro,
        "STATUS_PARCELA":statusParcela,
        "DATA_INI":dataIni,
        "DATA_FIM":dataFim,
        "ID_PARCELA":""
    }

    fazPost(URL_API,obj,"pesquisarParcelas",retornoPesquisarConsultas,false)
}

function retornoPesquisarConsultas(objetoRetorno,erro){
    console.log(objetoRetorno);
   let tabela = document.querySelector("#tabelaListaConsultas");
    tabela.innerHTML="";
    let consultas = objetoRetorno;
    for(let i = 0;i < consultas.length;i++){  
      //console.log(consultas[i]);

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
      
      btnVisualiza.setAttribute('onclick', 'exibeAreaPagamento('+consultas[i]['ID']+')')

      colunaBtn.appendChild(btnVisualiza)

      let colunaNomeFunc = document.createElement("td");
      let textoNomeFunc = document.createTextNode(' '+consultas[i]['NOME']+" "+consultas[i]['SOBRE_NOME']);
      colunaNomeFunc.appendChild(textoNomeFunc)

      let colunaValor = document.createElement("td");
      let textoValor = document.createTextNode(' '+consultas[i]['VALOR']);
      colunaValor.appendChild(textoValor)

      let colunaStatus = document.createElement("td");
      let textoStatus = document.createTextNode(' '+consultas[i]['STATUS']);
      colunaStatus.appendChild(textoStatus)


      linha.appendChild(colunaBtn); 
      linha.appendChild(colunaNomeFunc); 
      linha.appendChild(colunaValor); 
      linha.appendChild(colunaStatus); 
      
      //linha.setAttribute('id','idLinhaTabUsu'+i)
      tabela.appendChild(linha);
    }
      
}

function exibeAreaPagamento(idConsulta){
    let area_tela_pesquisa = document.getElementById('area_tela_pesquisa')
    let area_tela_comprovante = document.getElementById('area_tela_comprovante')

    area_tela_pesquisa.classList.add('visually-hidden')
    area_tela_comprovante.classList.remove('visually-hidden')
    document.getElementById("consultaSelecionada").value = idConsulta
    
    let obj = {
        "ID_ALUNO":"",
        "STATUS_PARCELA":"",
        "DATA_INI":"",
        "DATA_FIM":"",
        "ID_PARCELA":idConsulta
    }

    fazPost(URL_API,obj,"pesquisarParcelas",retornoPesquisarParcelaID,false)
}

function retornoPesquisarParcelaID(parcela,erro){
    parcela = parcela[0]
    document.getElementById('btnPagamentoManual').classList.remove('visually-hidden')
    document.getElementById('btnPagamentoPerdoado').classList.remove('visually-hidden')
    document.getElementById('btnPagamentoPIX').classList.remove('visually-hidden')


    document.getElementById('nomePagto').value = parcela['NOME']+" "+parcela['SOBRE_NOME']
    document.getElementById('dataVenctoPagto').value = dataFormatadaParaInput(parcela['DATA_VENCIMENTO'])
    document.getElementById('dataPagto').value = dataFormatadaParaInput(parcela['DATA_PAGAMENTO'])
    document.getElementById('statusParcelaPagto').value = parcela['STATUS']
    document.getElementById('valorPagto').value = parcela['VALOR']
    document.getElementById('consultaSelecionada').value = parcela['ID']
    document.getElementById('controlePagamento').value = parcela['ID_CONTROLE_PAGAMENTO']

    document.getElementById('btnVisualizarQRCode').classList.add('visually-hidden')
    if(parcela['STATUS'] != "ABERTA" && parcela['STATUS'] != "ATRASADA"){
            document.getElementById('btnPagamentoManual').classList.add('visually-hidden')
            document.getElementById('btnPagamentoPerdoado').classList.add('visually-hidden')
            document.getElementById('btnPagamentoPIX').classList.add('visually-hidden')
    }

    if(parcela['STATUS'] == "PENDENTE"){
        document.getElementById('btnVisualizarQRCode').classList.remove('visually-hidden')
    }

}

function voltarPesquisa(){
    let area_tela_pesquisa = document.getElementById('area_tela_pesquisa')
    let area_tela_comprovante = document.getElementById('area_tela_comprovante')

    area_tela_comprovante.classList.add('visually-hidden')
    area_tela_pesquisa.classList.remove('visually-hidden')
}

function processarPagamento(tipoProcessamento){
    
    bloqueiaBtnCarregando('btnVoltaListaConsulta')
    bloqueiaBtnCarregando('btnPagamentoPerdoado')
    bloqueiaBtnCarregando('btnPagamentoManual')
    bloqueiaBtnCarregando('btnVisualizarQRCode')
    bloqueiaBtnCarregando('btnPagamentoPIX')
    let obj = {
        "ID_PARCELA":document.getElementById("consultaSelecionada").value,
        "TIPO_PROCESSAMENTO":tipoProcessamento
    }

    fazPost(URL_API,obj,"processarPagamento",retornoProcessarPagamento,false)
}

function retornoProcessarPagamento(objetoRetorno,erro){
    exibeMsgSucesso("Mensalidade Processada Com Sucesso. Recarregue a Mensalidade para ver o Status!")
    setTimeout(function(){
        document.location.reload(true);
    },2000);
    
}

function verQRCode(){

    let obj = {
        "ID":document.getElementById("controlePagamento").value,
    }

    fazPost(URL_API,obj,"trazQRCodePagamentoPorId",retornoTrazQRCodePagamentoPorId,false)

    
    
}


function retornoTrazQRCodePagamentoPorId(objetoRetorno,erro){
    let qrCodePagamento = document.getElementById('qrCodePagamento')
    let pixCopiaColaPagamento = document.getElementById('pixCopiaColaPagamento')

    pixCopiaColaPagamento.value = objetoRetorno['PIX_COPIA_COLA'];
    qrCodePagamento.setAttribute('src', objetoRetorno['IMG_QRCODE']);
    
    let myModal = new bootstrap.Modal(document.getElementById('modalQRCode'))
    myModal.show()
}

