/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })
})()
//=====================CONTANTES==========================================================//
const NAO = false
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/*
========================================================================================
===================FUNÇÕES DO PAINEL DE CONTROLE========================================
========================================================================================
*/



function deslogar(){
  let obj = ""
  fazPost(URL_API,obj,"encerrarSessao",retornoDeslogar,false)
}

function retornoDeslogar(objRetorno,erro){
  redireciona(URL_LOGIN)
}

function trazUsuarioSession(retorno){
  let obj = ""
  fazPost(URL_API,obj,"trazUsuarioSessionJSON",retorno,false)
}


function geraPDFQRCode(localQRCode,localCodigoEscrito){
  let qrCode = document.getElementById(localQRCode)
  let codigoEscrito = document.getElementById(localCodigoEscrito).textContent
  let srcQRCode = qrCode.getElementsByTagName('img')
  srcQRCode = srcQRCode.item(0).getAttribute('src')
  //console.log(srcQRCode)
  //console.log(codigoEscrito)
  var doc = new jsPDF('landscape')
  var imgData = srcQRCode
  var doc = new jsPDF('landscape','','A4');
  doc.setFontSize(20);
  doc.text(25, 20, "Apresente este QRCode nas ");
  doc.text(25, 35, "barracas para fazer compras");
  doc.addImage(imgData, 'JPEG', 40, 50, 60, 60);
  doc.text(25, 125, codigoEscrito);
  doc.text(15, 135, "Desenvolvido Por DotBR - dotbr.net.br");
  doc.save('QRCode-Usuario.pdf')
  
}

function trazUsuarioPorId(id,retorno){
  let obj = {"ID":id}
  fazPost(URL_API,obj,"trazUsuarioPorId",retorno,false)
}


function retornaStatusPadrao(status){
  let listaStatus = [['A','ATIVO'],['I','INATIVO'],['P','PENDENTE']]
  for(let i = 0; i < listaStatus.length;i++){
    if(status == listaStatus[i][0])
      return listaStatus[i][1]
  }
  return status
}

function retornaStatusProduto(status){
  let listaStatus = [['A','ATIVO'],['I','INATIVO'],['P','PROMOÇÃO'],['E','ESGOTADO']]
  for(let i = 0; i < listaStatus.length;i++){
    if(status == listaStatus[i][0])
      return listaStatus[i][1]
  }
  return status
}
function buscaCardapio(){
  let pesquisa = document.getElementById('buscaCardapio').value
  let cardapio = document.getElementById('cardapio')
  if(pesquisa.length>=2){//inicia pesquisa
    cardapio.classList.remove('visually-hidden')
  }
  if(pesquisa.length == 0){//inicia pesquisa
    cardapio.classList.add('visually-hidden')
  }
}

function fechaCardapio(){
  document.getElementById('buscaCardapio').value = ""
  let cardapio = document.getElementById('cardapio')
  cardapio.classList.add('visually-hidden')
}


/*
function listarProdutosExibirCardapio(){
  let obj = ""
  fazPost(URL_API,obj,"listarProdutos",retornoListarProdutosExibirCardapio,false)
}
function retornoListarProdutosExibirCardapio(produtos,erro){
     
  let tabela = document.querySelector("#tabelaListaDeCardapio");
  tabela.innerHTML="";
  for(let i = 0;i < produtos.length;i++){  
    //console.log(produtos[i]);
    if(produtos[i]['STATUS'] != 'I'){
    let linha = document.createElement("tr");
      
    let colunaBtn = document.createElement("td");
    let btnVisualiza = document.createElement("btn")
    let iconMao = document.createElement("img")
    iconMao.setAttribute('src', '../image/bootstrap-icons-1.8.3/exclamation-lg.svg')
    iconMao.setAttribute('width', '25')
    iconMao.setAttribute('height', '25')
    iconMao.setAttribute('data-bs-toggle', 'modal')
    iconMao.setAttribute('data-bs-target', '#descProduto')
   
    //let textoBtn = document.createTextNode("X");
    btnVisualiza.appendChild(iconMao)
    btnVisualiza.classList.add('btn')
    btnVisualiza.classList.add('btn-outline-warning')
    
    btnVisualiza.setAttribute('onclick', 'exibeDescCardapio("'+produtos[i]['NOME']+'","'+produtos[i]['DESCRICAO']+'")')

    colunaBtn.appendChild(btnVisualiza)

    let colunaNome = document.createElement("td");
    let textoNome = document.createTextNode(' '+produtos[i]['NOME']);
    colunaNome.appendChild(textoNome)

    let colunaValor = document.createElement("td");
    let textoValor = document.createTextNode(' '+produtos[i]['VALOR']);
    colunaValor.appendChild(textoValor)

    let colunaStatus = document.createElement("td");
   
    colunaStatus.appendChild(retornaStatusCardapio(produtos[i]['STATUS']))

    


    linha.appendChild(colunaBtn); 
    linha.appendChild(colunaNome); 
    linha.appendChild(colunaValor); 
    linha.appendChild(colunaStatus); 
    
    
    linha.setAttribute('id','idLinhaTabCardaPio'+i)
    tabela.appendChild(linha);
    }
  }
  adicionaPesquisaEmTabelasStaticas('buscaCardapio','tabelaDeCardaPio')
}

function exibeDescCardapio(nomeProd,descProd){
  document.getElementById('nomeProdCardapio').textContent =nomeProd
  document.getElementById('descProdCardapio').textContent =descProd
}

function retornaStatusCardapio(status){
  let listaStatus = [['A','ATIVO','alert-success'],['P','PROMOÇÃO','alert-warning'],['E','ESGOTADO','alert-danger']]
  let div = document.createElement("div");
  div.classList.add('alert')
  
  for(let i = 0; i < listaStatus.length;i++){
    if(status == listaStatus[i][0]){
     let textoStatus = document.createTextNode(listaStatus[i][1]);
     div.classList.add(listaStatus[i][2])
     div.appendChild(textoStatus)
     return div
    }
  }
  return div
}

function somaTempo(campoDestino,tempo,ehSoma){
  let tempoAtual = document.getElementById(campoDestino).value.split(":")
  let hora = tempoAtual[0]
  let minuto = tempoAtual[1]

  if(ehSoma){
    if(tempo == 1)
      hora = parseInt(hora)+tempo
    else{
      if(minuto == "30"){
        hora = parseInt(hora)+1
        minuto = "00"
      }else
        minuto = "30"
    }
  }else{
    if(parseInt(hora) <= 0){
      hora = "00"
      minuto = "00"
    }else{
      if(tempo == 1)
        hora = parseInt(hora)-tempo
      else{
        if(minuto == "00"){
          hora = parseInt(hora)-1
          minuto = "30"
        }else
          minuto = "00"
      }
    }
  }
  document.getElementById(campoDestino).value = hora+":"+minuto
}*/
/*
========================================================================================
===================FUNÇÕES DO MENU======================================================
========================================================================================
*/
function ativaMenu(idMenuAtiva,ehArcodeonAtiva,idAcordeonAtiva){
    
    let menuTodos = document.getElementsByClassName("nav-link")
    for(let i = 0;i < menuTodos.length;i++){
      menuTodos[i].classList.remove('active')
    }
       
    let menuAtiva = document.getElementById(idMenuAtiva)
    
    menuAtiva.classList.add('active')

    if(ehArcodeonAtiva){
      for(let i = 0;i < idAcordeonAtiva.length;i++){
        let menuAcordeonAtiva = document.getElementById(idAcordeonAtiva[i][0])
        menuAcordeonAtiva.classList.add('active')
        let acordeonAtiva = document.getElementById(idAcordeonAtiva[i][1])
        acordeonAtiva.classList.add('show')
      }
    }
}

let usuario = null
let grupoUsuarioMenu = null
function retornoListaGrupoUsuarioLogado(objRetorno,erro){
  //console.log(objRetorno)
  usuario = objRetorno
  listarGrupoUsuarioMenu()
}

function listarGrupoUsuarioMenu(){
  let obj=""
  fazPost(URL_API,obj,"listarGrupoUsuario",retornoListarGrupoUsuarioMenu,false)
}
function retornoListarGrupoUsuarioMenu(grupoUsuarioRetornados,erro){
 
  //console.log(grupoUsuarioRetornados);
  grupoUsuario = grupoUsuarioRetornados;
  
  
  for(let i = 0;i < grupoUsuario.length;i++){  
     if(grupoUsuario[i]['SIMBOLO'] == usuario['TIPO']){
        grupoUsuarioMenu = grupoUsuario[i]['ID']
     }
  }

  consultaMenuDoGrupoUsuarioMenu(grupoUsuarioMenu,usuario['NIVEL'])
}

 function consultaMenuDoGrupoUsuarioMenu(id,nivelGrupo){
    
  let obj={
      "SEQUENCIAL":"",
			"ID_GRUPO_USUARIO": id,
			"NIVEL_GRUPO_USUARIO":nivelGrupo,
			"CLASSE_MENU": ""
  }
  fazPost(URL_API,obj,"consultaMenuDoGrupoUsuario",retornoConsultarMenuDoGrupoUsuarioMenu,false,)
}

function retornoConsultarMenuDoGrupoUsuarioMenu(grupoUsuarioRetornados,erro){
  let menuLiberado = grupoUsuarioRetornados['MENU_ASSOCIADO']
  let menu = document.getElementsByClassName('menuBar')
  let ehAdmin = false;
  if(null!=menuLiberado){
    for(let i = 0; i < menu.length;i++){
      for(let j = 0; j < menuLiberado.length;j++){
        if(menu[i].id == menuLiberado[j]['CLASSE']){

          let idMenu = menu[i].id.includes("adm")
          if(idMenu)
            ehAdmin = true
          let libera = document.getElementById(menu[i].id)
          libera.classList.remove('visually-hidden')
        }
      }
    }
  }
  if(ehAdmin){
    let divisaoAdm = document.getElementById('divisaoAdm')
    divisaoAdm.classList.remove('visually-hidden')
  }




  let menuBloqueado = grupoUsuarioRetornados['MENU_NAO_ASSOCIADO']
  
  if(null != menuBloqueado){
    for(let i = 0; i < menu.length;i++){
      for(let j = 0; j < menuBloqueado.length;j++){
        if(menu[i].id == menuBloqueado[j]['CLASSE']){

          let bloqueia = document.getElementById(menu[i].id)
          bloqueia.remove()
        }
      }
    }
  }

}

/*
========================================================================================
===============FIM FUNÇÕES DO MENU======================================================
========================================================================================
*/