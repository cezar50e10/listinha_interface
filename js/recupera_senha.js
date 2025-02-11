//impede formulario de submit automatico - comum.js
if(!!document.getElementById('recuperaSenha'))
    cancelaEventPreventDefault('submit','recuperaSenha')
if(!!document.getElementById('redefiniSenha'))
    cancelaEventPreventDefault('submit','redefiniSenha')
function recuperaSenha(){
    bloqueiaBtnCarregando('btnRecuperaSenha')
    let obj = {
        "USUARIO_RECUPERADO":document.getElementById('emailRecupera').value
        }
    fazPost(URL_API,obj,"recuperarSenha",retornoRecuperaSenha,false,'btnRecuperaSenha')
}

function retornoRecuperaSenha(objRetorno,erro){
//    desBloqueiaBtnCarregando('btnRecuperaSenha')
    exibeMsgSucesso("Email de Recuperação de Senha Enviado! - Verifique Seu Email para confirmar o Cadastro!")
}


function redefinirSenha(){
    bloqueiaBtnCarregando('btnRedefinirSenha')
    var urlAtual = window.location.href;
    var urlClass = new URL(urlAtual);
    var codId = urlClass.searchParams.get("codId");
    var codRec = urlClass.searchParams.get("codRec");
    // atob() decodifica Base64
    // ctob() codifica Base64
    let obj = {
        "ID_RECUPERACAO":atob(codId),
        "CODIGO_RECUPERACAO":atob(codRec),
        "SENHA":document.getElementById('novaSenha').value,
        "SENHA_CONFERE":document.getElementById('novaSenhaConfirma').value
        }
    fazPost(URL_API,obj,"definirNovaSenhaRecuperacao",retornoRedefinirSenha,false,'btnRedefinirSenha')
}

function retornoRedefinirSenha(objRetorno,erro){
//    desBloqueiaBtnCarregando('btnRedefinirSenha')
    alert("Recuperação de Senha Efetivada! - Faça o Login Na Plataforma!")
    redireciona(URL_LOGIN)
}