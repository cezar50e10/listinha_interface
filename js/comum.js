function anoInicio(){
    let anoInicio = 2019;
    let anoAtual = new Date();
    anoAtual = parseInt(anoAtual.getUTCFullYear());
    let anoMostrar = "";
    if(anoInicio < anoAtual){
        anoMostrar = anoInicio +"-"+ anoAtual;             
    }else{
        anoMostrar = anoInicio;
        
    }
     return anoMostrar;
}
document.getElementById("anoInicio").textContent=anoInicio();

function fazPost(url,objetoEnvio,servicoInvocado,callBack,trataErro,btnDesbloqueia){
  //se o btn não informado, deve ser desbloqueado no callBack
 limpaMsgErro()
 let requisicao = new XMLHttpRequest();
 url += servicoInvocado;
 objetoEnvioJSON = JSON.stringify(montaObjeto(objetoEnvio,servicoInvocado))
 console.log(objetoEnvioJSON)
 requisicao.open('POST', url, true); //true = assincrono
 
  // Habilita 'withCredentials' somente para as requisições que não sejam de login
  if (!servicoInvocado.includes('login')) {
    requisicao.withCredentials = true;  // Isso garante o envio de cookies para requisições subsequentes
  }

 requisicao.setRequestHeader("Content-Type", "application/json");
 try {
   requisicao.send(objetoEnvioJSON);
} catch (e) {
   console.error("Esse é o erro que eu quis:", e);
}
 requisicao.onreadystatechange = function() {
     if (requisicao.readyState == XMLHttpRequest.DONE) {
       
         try {
             objRetorno = converteRetornoParaJSON(requisicao.responseText);
             console.log(objRetorno)
         } catch (e) {
             //console.error("Erro ao converter JSON:", e);
             objRetorno = { erro: true, mensagem: requisicao.responseText }; // Retorna a mensagem bruta
             console.log(requisicao.responseText)
         }
        
       if(null !== btnDesbloqueia && undefined !== btnDesbloqueia && "" !== btnDesbloqueia)
             desBloqueiaBtnCarregando(btnDesbloqueia)
         if(objRetorno.erro && !trataErro){
           exibeMsgErro(objRetorno.mensagem + ' - (' + objRetorno.codigoErro+')')
         }else{
           if(objRetorno.erro && trataErro)
             callBack(objRetorno,true)
           else
             callBack(objRetorno,false)
         }
     }
 }  
}







function fazPostRel(url,objetoEnvio,servicoInvocado){
  objetoEnvioJSON = JSON.stringify(montaObjeto(objetoEnvio,servicoInvocado))
  //url = url+"?dadosRel="+objetoEnvioJSON

  
    // Create a form
    var mapForm = document.createElement("form");
    mapForm.target = "_blank";    
    mapForm.method = "POST";
    mapForm.action = url;

    // Create an input
    var mapInput = document.createElement("input");
    mapInput.type = "text";
    mapInput.name = "dadosRel";
    mapInput.value = objetoEnvioJSON;

    // Add the input to the form
    mapForm.appendChild(mapInput);

    // Add the form to dom
    document.body.appendChild(mapForm);

    // Just submit
    mapForm.submit();
 
}

function fazPostComUploadArquivo(url,objetoEnvio,idArquivoEnvio,servicoInvocado,callBack,trataErro,btnDesbloqueia){
  let formData = new FormData(); 
  formData.append("arquivo", idArquivoEnvio.files[0]);
  formData.append('objJson', JSON.stringify(montaObjeto(objetoEnvio,servicoInvocado)));


//se o btn não informado, deve ser desbloqueado no callBack
limpaMsgErro()
let requisicao = new XMLHttpRequest();

requisicao.open('POST', url, true); //true = assincrono
//requisicao.setRequestHeader("Content-type", "multipart/form-data");
requisicao.send(formData);
requisicao.onreadystatechange = function() {
    if (requisicao.readyState == XMLHttpRequest.DONE) {
      //console.log(requisicao.responseText)
        let objRetorno = converteRetornoParaJSON(requisicao.responseText)
       // console.log(objRetorno)
      if(null !== btnDesbloqueia && undefined !== btnDesbloqueia && "" !== btnDesbloqueia)
            desBloqueiaBtnCarregando(btnDesbloqueia)
        if(objRetorno.erro && !trataErro){
          exibeMsgErro(objRetorno.mensagem)
        }else{
          if(objRetorno.erro && trataErro)
            callBack(objRetorno,true)
          else
            callBack(objRetorno,false)
        }
    }
}  



}

// VIA POST

function fazPostBaixarArquivo(url,objetoEnvio,servicoInvocado){
   var ajax = new XMLHttpRequest();
   ajax.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
         var data = converteRetornoParaJSON(this.responseText)
         var a = document.createElement("a");
         a.download = "arquivo-plataforma-biriba-"+new Date();
         a.href = data['OBJETO_RETORNO']['CONTEUDO'];
         document.body.appendChild(a);
         a.click();
         a.outerHTML = ''
      }
   }
   ajax.open("POST", url, true);
   ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
   let objetoEnvioJSON = JSON.stringify(montaObjeto(objetoEnvio,servicoInvocado))
   ajax.send(objetoEnvioJSON);
}


function converteRetornoParaJSON(data){
  return JSON.parse(data)
}
  
function montaObjeto(objetoEnvio,servicoInvocado){
  /*return {
    "DADOS":
    {
      "SERVICO_INVOCADO":servicoInvocado,
      "OBJETOS": objetoEnvio
    }
  }*/

  return objetoEnvio
}
function exibeMsgErro(mensagem){
  document.getElementById('mensagem-retorno-API').classList.add('alert-danger')
  document.getElementById('mensagem-retorno-API').classList.remove('visually-hidden')
  document.getElementById('mensagem-retorno-API').innerHTML=(mensagem)//undefined==objRetorno['MENSAGEM']?objRetorno:objRetorno['MENSAGEM'])
}

function exibeMsgSucesso(msg){
  document.getElementById('mensagem-retorno-API').classList.add('alert-success')
  document.getElementById('mensagem-retorno-API').classList.remove('visually-hidden')
  document.getElementById('mensagem-retorno-API').innerHTML=msg
}


function limpaMsgErro(){
  document.getElementById('mensagem-retorno-API').classList.remove('alert-danger')
  document.getElementById('mensagem-retorno-API').classList.remove('alert-success')
  document.getElementById('mensagem-retorno-API').classList.add('visually-hidden')
  document.getElementById('mensagem-retorno-API').innerHTML=''
}

function exibeMsgErroEspecifico(classe,msg){
  let caixaMsg = document.getElementsByClassName(classe)
  for(let i = 0; i < caixaMsg.length;i++){
    caixaMsg[i].classList.add('alert-danger')
    caixaMsg[i].classList.remove('visually-hidden')
    caixaMsg[i].innerHTML=msg
  }
}

function exibeMsgSucessoEspecifico(classe,msg){
  let caixaMsg = document.getElementsByClassName(classe)
  for(let i = 0; i < caixaMsg.length;i++){
    caixaMsg[i].classList.add('alert-success')
    caixaMsg[i].classList.remove('visually-hidden')
    caixaMsg[i].innerHTML=msg
  }
}


function limpaMsgErroEspecifico(classe){
  let caixaMsg = document.getElementsByClassName(classe)
  for(let i = 0; i < caixaMsg.length;i++){
    caixaMsg[i].classList.remove('alert-danger')
    caixaMsg[i].classList.remove('alert-success')
    caixaMsg[i].classList.add('visually-hidden')
    caixaMsg[i].innerHTML=''
  }
}


function cancelaEventPreventDefault(evento,id){
  document.getElementById(id).addEventListener(
    evento, stopDefAction, false
  );
}
function stopDefAction(evt) {
  evt.preventDefault();
}

function redireciona(URL){
  window.location.href = URL
}


function bloqueiaBtnCarregando(idBotao){
  var btn = document.querySelector("#"+idBotao);
  var spinner = document.createElement("span");
  
  spinner.classList.add('spinner-border')
  spinner.classList.add('spinner-border-md')
  spinner.classList.add('float-end')
  spinner.setAttribute('id', 'spinner'+idBotao)
  btn.appendChild(spinner);
  btn.classList.add('disabled')
}

function desBloqueiaBtnCarregando(idBotao){
  var btn = document.querySelector("#"+idBotao);
  var spinner = document.getElementById('spinner'+idBotao);
  btn.removeChild(spinner);
  btn.classList.remove('disabled')
}

function geraQrCode(conteudo,alvo,tW,tH){
  
  //se altura ou largura não definido usa o padrão
  if(null == tW || undefined == tW || "" == tW || tW <= 20 ||
  null == tH || undefined == tH || "" == tH || tH <= 20){
    tW = 256
    tH = 256
  }
        var qrcode = new QRCode(alvo, {
            text: conteudo,
            width: tW,
            height: tH,
            colorDark: "black",
            colorLight: "white",
            correctLevel : QRCode.CorrectLevel.H
        });
}

function consultaQRCodeCamera(idVideo,btnFechaScanner,funcaoDeConsulta){
  
    let scanner = new Instascan.Scanner({ video: document.getElementById(idVideo) });
    Instascan.Camera.getCameras().then(cameras => {
      scanner.camera = cameras[cameras.length - 1];
      scanner.start();
    }).catch(e => console.error(e));
  
    scanner.addListener('scan', content => {
      funcaoDeConsulta(content);
     scanner.stop();
    });

    let fechaScanner = document.getElementById(btnFechaScanner);
    fechaScanner.addEventListener('click',function(){
      scanner.stop();
    });
  
}

function dataFormatada(dataParam){
  if(null !=dataParam){
  var data = new Date(dataParam),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano  = data.getFullYear();
  return dia+"/"+mes+"/"+ano;
  }else{
    return dataParam;
  }
}

function dataHoraFormatada(dataParam){
  var data = new Date(dataParam),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano  = data.getFullYear();
      hora = data.getHours(),
      minuto = data.getMinutes();
      if(parseInt(minuto)<=9){
        if(parseInt(minuto)==0)
          minuto = "00"
        else
          minuto = "0"+minuto
      }
  return dia+"/"+mes+"/"+ano+" "+hora+":"+minuto;
}



function dataFormatadaParaInput(dataParam){
  if(null !=dataParam){
  var data = new Date(dataParam),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano  = data.getFullYear();
  return ano+"-"+mes+"-"+dia;
  }else{
    return null;
  }
}

function dataHoraFormatadaParaInput(dataParam){
  var data = new Date(dataParam),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano  = data.getFullYear(),
      hora = data.getHours(),
      minuto = data.getMinutes();
      if(parseInt(minuto)<=9){
        if(parseInt(minuto)==0)
          minuto = "00"
        else
          minuto = "0"+minuto
      }
    
      if(parseInt(hora)<=9){
        if(parseInt(hora)==0)
          hora = "00"
        else
          hora = "0"+hora
      }
  return ano+"-"+mes+"-"+dia+" "+hora+":"+minuto+":00";
}

function retornaHoraFormatada(hora){
  let tempo = hora.split(':')
  hora = tempo[0];
  minuto = tempo[1];
  if(parseInt(minuto)<=9){
    if(parseInt(minuto)==0)
      minuto = "00"
    else
      minuto = "0"+minuto
  }

  if(parseInt(hora)<=9){
    if(parseInt(hora)==0)
      hora = "00"
    else
      hora = "0"+hora
  }

  return hora+":"+minuto+":00";
}

function dataEhMenorIgualQue(dataVerifica,dataReferencia){
  let data1 = new Date(dataVerifica)
  let data2 = new Date(dataReferencia)

  if(data1 <= data2)
   return true
  else
    return false

}

function adicionaTempoData(dataInicial,tempoAdicionado){//aaaa-mm-dd hh:mm:ss,hh:mm:ss
 let data = new Date(dataInicial)
 let tempo = tempoAdicionado.split(':')
 data.setHours(data.getHours()+parseInt(tempo[0]))
 data.setMinutes(data.getMinutes()+parseInt(tempo[1]))
 data.setSeconds(data.getSeconds()+parseInt(tempo[2]))

 return dataHoraFormatadaParaInput(data)
}

function adicionaPesquisaEmTabelasStaticas(campoPesquisa,TabelaAlvo){

  const input = document.getElementById(campoPesquisa);
  const trs = [...document.querySelectorAll('#'+TabelaAlvo+' tbody tr')];
  
  input.addEventListener('input', () => {
    const search = input.value.toLowerCase();
    trs.forEach(el => {
      const matches = el.textContent.toLowerCase().includes(search);
      let idLinha = el.getAttribute('id')
      let tr = document.getElementById(idLinha)
      
      //console.log(idLinha)
      matches ? tr.classList.remove('visually-hidden'):tr.classList.add('visually-hidden');
    });
  });
}

function adicionaRemoveClasseDeClasse(nomeClasse,adicionaRemove,classeAltera){
  if(null == classeAltera || undefined == classeAltera || "" == classeAltera)
  classeAltera = 'visually-hidden'
  
  let classesAlteradas = document.getElementsByClassName(nomeClasse);
  

  for(let i = 0; i < classesAlteradas.length;i++){
    if(adicionaRemove){
      classesAlteradas[i].classList.add(classeAltera)
    }else{
      classesAlteradas[i].classList.remove(classeAltera)
    }
  }
  
}

function formataMoedaBRL(valor){
  return Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valor)
}

function removeCifrao(valor){
  valor  = valor.replace("R","")
  valor  = valor.replace("$","")
  return parseFloat(valor)
}


function mascaraTelefone(tel){
  let telefone = tel.value;
  let telefoneMascarado = telefone.replace(/[^0-9]/g,'');

  for(let i = 0; i < 10;i++){
    if("undefined" == typeof telefoneMascarado[i])
    telefoneMascarado=telefoneMascarado+" "
  }
  if(telefoneMascarado.trim().length<=2)
    if(telefoneMascarado.trim().length<1)
      telefoneMascarado=telefoneMascarado.trim()
    else
      telefoneMascarado="("+telefoneMascarado.trim()
  else{
      if(telefoneMascarado.trim().length<=6){
        telefoneMascarado=
          "("+telefoneMascarado[0]+telefoneMascarado[1]+") "+
          telefoneMascarado[2]+telefoneMascarado[3]+telefoneMascarado[4]+telefoneMascarado[5]
      }else{
        if(telefoneMascarado.trim().length<=10){
        telefoneMascarado=
        "("+telefoneMascarado[0]+telefoneMascarado[1]+") "+
        telefoneMascarado[2]+telefoneMascarado[3]+telefoneMascarado[4]+telefoneMascarado[5]+"-"+
        telefoneMascarado[6]+telefoneMascarado[7]+telefoneMascarado[8]+telefoneMascarado[9]
      }else{
        telefoneMascarado=
        "("+telefoneMascarado[0]+telefoneMascarado[1]+") "+
        telefoneMascarado[2]+telefoneMascarado[3]+telefoneMascarado[4]+telefoneMascarado[5]+telefoneMascarado[6]+"-"+
        telefoneMascarado[7]+telefoneMascarado[8]+telefoneMascarado[9]+telefoneMascarado[10]
      }
    }
  }
    //console.log(telefoneMascarado)
    tel.value=telefoneMascarado.trim()
}

function mascaraCPF(idInput){
  document.getElementById(idInput).addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    value = value.replace(/^(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona o segundo ponto
    value = value.replace(/\.(\d{3})(\d{1,2})$/, '.$1-$2'); // Adiciona o hífen
    e.target.value = value;
});
}