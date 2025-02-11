// Função que executa scripts sequencialmente
let loadedScripts = [];

async function executeScriptsSequentially(scripts) {
  for (const oldScript of scripts) {
    const scriptSrc = oldScript.src;
    if (scriptSrc && loadedScripts.includes(scriptSrc)) {
      //console.log("Script já carregado:", scriptSrc);
      continue; // Se já foi carregado, pular o script
    }

    //console.log("Adicionando script:", scriptSrc || oldScript.textContent); 

    const newScript = document.createElement("script");
    if (oldScript.src) {
      newScript.src = oldScript.src;
      newScript.async = false;
      await new Promise((resolve) => {
        newScript.onload = resolve;
        newScript.onerror = resolve;
        document.body.appendChild(newScript);
      });

      loadedScripts.push(scriptSrc); // Adicionar ao array de scripts carregados
    } else {
      newScript.textContent = oldScript.textContent;
      document.body.appendChild(newScript);
    }
  }
}


// Função auxiliar para carregar e inserir HTML
async function loadAndInsert(url, insertFn, checkId) {
  if (document.getElementById(checkId)) return;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Falha ao carregar ${url}`);

  const htmlText = await res.text();
  const temp = document.createElement("div");
  temp.innerHTML = htmlText;

  const scripts = Array.from(temp.querySelectorAll("script"));
  for (const script of scripts) {
    //console.log("Removendo script 3:", script.src || script.textContent); // Mostra o src ou o conteúdo do script
    script.remove();
  }

  insertFn(temp.innerHTML);
  await executeScriptsSequentially(scripts);
}

// Função que carrega os módulos do sistema (topo, menu, rodapé, etc.)
async function includeHTML() {
  const body = document.body;
  body.innerHTML = "";
  try {
    await loadAndInsert("modulos/topo.html", html => document.body.insertAdjacentHTML("afterbegin", html), "topo");
    await loadAndInsert("modulos/menu.html", html => document.body.insertAdjacentHTML("beforeend", html), "menu");

    if (!document.getElementById("content")) {
      document.body.insertAdjacentHTML("beforeend", `<main id="content"></main>`);
    }

    await loadAndInsert("modulos/rodape.html", html => document.body.insertAdjacentHTML("beforeend", html), "rodape");
    await loadPage("usr_inicio");

    document.querySelectorAll("[data-page]").forEach(link => {
      link.addEventListener("click", async (event) => {
        event.preventDefault();
        const page = event.target.getAttribute("data-page");
        await loadPage(page);
      });
    });

  } catch (error) {
    console.error("Erro em includeHTML:", error);
  }
}

// Função para carregar uma página no <main id="content">
async function loadPage(page) {
  const content = document.getElementById("content");
  if (!content) return;

  try {
    const res = await fetch(`html/${page}.html`);
    if (!res.ok) throw new Error(`Falha ao carregar html/${page}.html`);

    const htmlText = await res.text();
    const temp = document.createElement("div");
    temp.innerHTML = htmlText;

    const scripts = Array.from(temp.querySelectorAll("script"));
    for (const script of scripts) {
      //console.log("Removendo script 2:", script.src || script.textContent); // Mostra o src ou o conteúdo do script
      script.remove();
    }

    content.innerHTML = temp.innerHTML;
    await executeScriptsSequentially(scripts);

  } catch (error) {
    //console.error("Erro em loadPage:", error);
    content.innerHTML = "<p>Erro ao carregar a página.</p>";
  }
}

// Função para carregar a tela de login antes dos módulos
async function loadPageSolo(pagina) {
  const body = document.body;

  try {
    const res = await fetch(`modulos/pagina_solo/${pagina}.html`);
    if (!res.ok) throw new Error(`Erro ao carregar ${pagina}.html`);

    const htmlText = await res.text();
    body.innerHTML = htmlText;

    const temp = document.createElement("div");
    temp.innerHTML = htmlText;

    const scripts = Array.from(temp.querySelectorAll("script"));
    // Remover scripts de forma sincrona antes de prosseguir
    for (const script of scripts) {
      //console.log("Removendo script:", script.src || script.textContent); // Mostra o src ou o conteúdo do script
      script.remove();
    }
    await executeScriptsSequentially(scripts);

  } catch (error) {
    console.error("Erro ao carregar a tela de login:", error);
    body.innerHTML = "<p>Erro ao carregar a tela de login.</p>";
  }
}

// Verifica se o usuário está autenticado
function isAuthenticated() {
  return localStorage.getItem("user_logged") === "true";
}

// Função de login
//function login() {
//  localStorage.setItem("user_logged", "true");
//  startApplication();
//}

// Função para iniciar a aplicação após login
//async function startApplication() {
//  document.body.innerHTML = "";
//  await includeHTML();
//}

// Se o usuário já estiver logado, carrega os módulos, senão carrega a tela de login
document.addEventListener("DOMContentLoaded", async () => {
//  if (isAuthenticated()) {
//    await startApplication();
//  } else {
    await loadPageSolo("login");
//  }
});
