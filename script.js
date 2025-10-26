// Configurações do sistema
const SENHA_CORRETA = "Ecvitori@10"; // Altere para sua senha desejada

// Arrays para armazenar os dados carregados do JSON
let medicos = [];
let medicosCircurgia306 = [];
let examesTodosUSG = [];
let examesTodosTC = [];
let examesTodosRM = [];
let examesTodosCardio = [];
let examesPrevent = [];
let curativosTodos = [];
let senhasConvenios = [];
let senhasDiversas = [];

// Elementos DOM
const senhaInput = document.getElementById('SenhaAcesso');
const botaoEnviar = document.getElementById('botaoEnviar');
const mensagemErro = document.getElementById('MensageSenhaIncorreta');
const mensagemSucesso = document.getElementById('MensageSenhaCorreta');
const sectionBloqueador = document.getElementById('bloqueador');
const sectionSenhas = document.getElementById('senhas');
const buscadorMedico = document.getElementById('BuscadorMedico');
const tabelaMedicos = document.getElementById('tabela-medicos');
const buscadorUSG = document.getElementById('BuscadorUSG');
const tabelaUSG = document.getElementById('tabela-usg');
const buscadorTC = document.getElementById('BuscadorTC');
const tabelaTC = document.getElementById('tabela-tc');
const tabelaRM = document.getElementById('tabela-rm');
const buscadorRM = document.getElementById('BuscadorRM');
const tabelaCardio = document.getElementById('tabela-cardio');
const buscadorCardio = document.getElementById('BuscadorCARDIO');
const tabelaPreventivo = document.getElementById('tabela-preventivo');
const buscadorPreventivo = document.getElementById('BuscadorPrev');
const buscadorCura = document.getElementById('BuscadorCura');
const tabelaCura = document.getElementById('tabela-curativo');
const tabelaConvenios = document.getElementById('tabela-convenios');
const tabelaSistemas = document.getElementById('tabela-sistemas');
const tabelaCircurgia306 = document.getElementById('tabela-cirurgia306');
const buscadorCircurgia306 = document.getElementById('BuscadorCircurgia306');
;

// Estado do sistema
let acessoLiberado = false;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    inicializarSistema();
    configurarCopiaMobile();
});

function inicializarSistema() {
    // Configurar navegação suave
    configurarNavegacaoSuave();
    
    // Configurar sistema de autenticação
    configurarAutenticacao();
    
    // Configurar busca de médicos
    configurarBuscaMedicos();

    // Configurar botoes de expandir convênios
    configurarBotoesExpandirConvenios()
    
    // Configurar busca de USG
    configurarBuscaUSG();
    
    // ✅ NOVO: Configurar busca de TC
    configurarBuscaTC();

    // Configurar busca de RM
    configurarBuscaRM();

    // Configurar busca de cardio
    configurarBuscaCardio();

    // Configurar busca de exames preventivos
    configurarBuscaPreventivo();
    
    // Configurar busca de curativos
    configurarBuscaCurativos();
    
    // Carregar dados dos médicos
    carregarTabelaMedicos();
    
    // Carregar dados dos exames de USG
    carregarTabelaUSG();
    
    // ✅ NOVO: Carregar dados dos exames de TC
    carregarTabelaTC();

    // Carregar dados dos exames de RM
    carregarTabelaRM();

    // Carregar dados dos exames de cardio
    carregarTabelaCardio();

    // Carregar dados dos exames preventivos
    carregarTabelaPreventivo();
    
    // Carregar dados dos curativos
    carregarTabelaCurativos();
    
    // Ocultar todas as seções inicialmente
    ocultarTodasSections();
    // Carregar dados das senhas
    carregarTabelaConvenios();
    carregarTabelaSistemas();

    configurarBuscaCircurgia306();
    carregarTabelaCircurgia306();
}

function configurarNavegacaoSuave() {
    // Adicionar evento de clique aos links de navegação
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            ocultarTodasSections();

            if (targetId === '#bloqueador') {
                mostrarSection('bloqueador');
            }

            else if (targetId === '#cirurgia306') {
            // Mostrar as seções informa E cirurgia306
            mostrarSection('informa');
            mostrarSection('cirurgia306');
            // Fazer scroll suave para a seção cirurgia306
            setTimeout(() => {
                const targetElement = document.getElementById('cirurgia306');
                if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                }, 100);
            }

            else if (targetId === '#capita') {
                // Mostrar as seções informa E capita
                mostrarSection('informa');
                mostrarSection('capita');
                // Fazer scroll suave para a seção capita
                setTimeout(() => {
                    const targetElement = document.getElementById('capita');
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }

            else if (link.textContent.includes('Senhas e Logins')) {
                if (acessoLiberado) {
                    mostrarSection('senhas');
                } else {
                    mostrarSection('bloqueador');
                }
            }

            else if (targetId === '#usg') {
                // Mostrar as seções codigos E usg
                mostrarSection('codigos');
                mostrarSection('usg');
                // Fazer scroll suave para a seção USG
                setTimeout(() => {
                    const targetElement = document.getElementById('usg');
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }

            else if (targetId === '#tc') {
                // ✅ NOVO: Mostrar as seções codigos E tc
                mostrarSection('codigos');
                mostrarSection('tc');
                // Fazer scroll suave para a seção TC
                setTimeout(() => {
                    const targetElement = document.getElementById('tc');
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }

            else if (targetId === '#rm') {
                // Mostrar as seções codigos E rm
                mostrarSection('codigos');
                mostrarSection('rm');
                // Fazer scroll suave para a seção RM
                setTimeout(() => {
                    const targetElement = document.getElementById('rm');
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
            
            else if (targetId === '#cardio') {
                // Mostrar as seções codigos E cardio
                mostrarSection('codigos');
                mostrarSection('cardio');
                // Fazer scroll suave para a seção cardio
                setTimeout(() => {
                    const targetElement = document.getElementById('cardio');
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }

            else if (targetId === '#prev') {
                // Mostrar as seções codigos E preventivo
                mostrarSection('codigos');
                mostrarSection('prev');
                // Fazer scroll suave para a seção preventivo
                setTimeout(() => {
                    const targetElement = document.getElementById('prev');
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
            
            else if (targetId === '#curativo') {
                // Mostrar as seções codigos E curativo
                mostrarSection('codigos');
                mostrarSection('curativo');
                // Fazer scroll suave para a seção curativo
                setTimeout(() => {
                    const targetElement = document.getElementById('curativo');
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                const sectionId = targetId.replace('#', '');
                mostrarSection(sectionId);
            }
        });
    });
}

function configurarAutenticacao() {
    // Evento do botão enviar
    botaoEnviar.addEventListener('click', verificarSenha);
    
    // Evento de pressionar Enter no campo de senha
    senhaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            verificarSenha();
        }
    });
    
    // Limpar mensagem de erro quando o usuário começar a digitar
    senhaInput.addEventListener('input', function() {
        mensagemErro.style.display = 'none';
    });
}

function verificarSenha() {
    const senhaDigitada = senhaInput.value.trim();
    
    if (senhaDigitada === SENHA_CORRETA) {
        acessoAutorizado();
    } else {
        acessoNegado();
    }
}

function acessoAutorizado() {
    acessoLiberado = true;
    mensagemErro.style.display = 'none';
    mensagemSucesso.style.display = 'block'
    
    // Aguardar 1 segundos e redirecionar
    setTimeout(() => {
        // Remover mensagem de sucesso
        if (mensagemSucesso.parentNode) {
            mensagemSucesso.parentNode.removeChild(mensagemSucesso);
        }
        liberarAcesso();
    }, 1000);
}

function acessoNegado() {
    mensagemErro.style.display = 'block';
    senhaInput.value = '';
    senhaInput.focus();
    
    // Efeito visual de erro
    senhaInput.style.borderColor = 'red';
    setTimeout(() => {
        senhaInput.style.borderColor = '';
    }, 2000);
}

function liberarAcesso() {
    // Ocultar bloqueador e mostrar seção de senhas
    ocultarTodasSections();
    mostrarSection('senhas');
}

let btnMaiusculo = document.getElementById("btnMaiusculas");
let btnMinusculo = document.getElementById("btnMinusculas");
let btnCapitalizar = document.getElementById("btnCapitalizar");
const inputTexto = document.getElementById("inputTexto");
btnMaiusculo.addEventListener('click', converterTextoMaiusculas);
btnMinusculo.addEventListener('click', converterTextoMinusculas);
btnCapitalizar.addEventListener('click', converterTextoCapitalizar);

inputTexto.addEventListener("input", function () {
  this.style.height = "auto"; // reseta altura
  this.style.height = this.scrollHeight + "px"; // ajusta conforme conteúdo
});

function converterTextoMaiusculas(){
    var texto = document.getElementById("inputTexto").value;
    var textoResposta = document.getElementById("outputTexto")
    textoResposta.innerHTML = texto.toUpperCase();
}

function converterTextoMinusculas(){
    var texto = document.getElementById("inputTexto").value;
    var textoResposta = document.getElementById("outputTexto")
    textoResposta.innerHTML = texto.toLowerCase();
}

function converterTextoCapitalizar() {
    const texto = document.getElementById("inputTexto").value.trim();
    const textoResposta = document.getElementById("outputTexto");

    // Lista de palavras que não devem ser capitalizadas (exceto se forem a primeira)
    const excecoes = ["de", "da", "do", "dos", "das", "e", "em", "no", "na", "nos", "nas", "por", "a", "o", "as", "os"];

    let palavras = texto.toLowerCase().split(/\s+/); // divide por espaços múltiplos também

    for (let i = 0; i < palavras.length; i++) {
        if (i === 0 || !excecoes.includes(palavras[i])) {
            // Primeira palavra ou não está na lista de exceções → Capitaliza
            palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
        }
    }

    const textoCapitalizado = palavras.join(" ");
    textoResposta.innerHTML = textoCapitalizado;
}

var btnCopiarTextoConvertido = document.getElementById("btnCopiarTextoConvertido");
btnCopiarTextoConvertido.addEventListener('click', function() {
    var textoResposta = document.getElementById("outputTexto").innerText;
    navigator.clipboard.writeText(textoResposta).then(function() {
        setTimeout(() => {
        btnCopiarTextoConvertido.style.backgroundColor = "#4CAF50"; // Verde
        btnCopiarTextoConvertido.innerText = "Copiado ✓";
        }, 100); // Pequeno atraso para melhor percepção do clique
        setTimeout(function() {
            btnCopiarTextoConvertido.style.backgroundColor = ""; // Reseta cor
            btnCopiarTextoConvertido.innerText = "Copiar";
        }, 1500);
    }, function(err) {
        console.error("Erro ao copiar texto: ", err);
        alert("Falha ao copiar o texto.");
    });
});

var btnLimparTextoConvertido = document.getElementById("btnLimparTextoConvertido");
btnLimparTextoConvertido.addEventListener('click', function() {
    document.getElementById("inputTexto").value = "";
    document.getElementById("outputTexto").innerText = "";
    document.getElementById("inputTexto").style.height = "auto"; // Reseta a altura do textarea
    document.getElementById("inputTexto").focus(); // Foca no campo de entrada
});



function carregarTabelaConvenios() {
    if (!tabelaConvenios) return;
    
    fetch('SenhasConvenios.json')
        .then(resposta => resposta.json())
        .then(dados => {
            senhasConvenios = dados;
            const tbody = tabelaConvenios.querySelector('tbody');
            tbody.innerHTML = '';
            
            dados.forEach(item => {
                const linha = document.createElement("tr");
                
                // CONVÊNIO
                const celulaConvenio = document.createElement('td');
                celulaConvenio.textContent = item.nome;
                
                // CÓDIGO ADICIONAL com botão copiar
                const celulaCodigo = document.createElement('td');
                celulaCodigo.className = 'celula-codigo';
                
                const spanCodigo = document.createElement('span');
                spanCodigo.textContent = item.codigoAdicional || '---';
                spanCodigo.className = 'dados-codigo';
                
                celulaCodigo.appendChild(spanCodigo);
                
                // Só criar o botão se houver código para copiar
                if (item.codigoAdicional) {
                    const botaoCodigo = criarBotaoCopiar(item.codigoAdicional);
                    celulaCodigo.appendChild(botaoCodigo);
                }
                
                // LOGIN com botão copiar
                const celulaLogin = document.createElement('td');
                celulaLogin.className = 'celula-login';
                
                const spanLogin = document.createElement('span');
                spanLogin.textContent = item.login;
                spanLogin.className = 'dados-login';
                
                const botaoLogin = criarBotaoCopiar(item.login);
                
                celulaLogin.appendChild(spanLogin);
                celulaLogin.appendChild(botaoLogin);
                
                // SENHA com botão copiar
                const celulaSenha = document.createElement('td');
                celulaSenha.className = 'celula-senha';
                
                const spanSenha = document.createElement('span');
                spanSenha.textContent = '••••••••'; // Mascarar senha por padrão
                spanSenha.className = 'dados-senha';
                spanSenha.dataset.senhaReal = item.senha;
                spanSenha.dataset.oculta = 'true';
                
                // Botão para mostrar/ocultar senha
                const botaoMostrar = document.createElement('button');
                botaoMostrar.className = 'btn-mostrar-senha';
                botaoMostrar.innerHTML = '👁️';
                botaoMostrar.title = 'Mostrar/Ocultar senha';
                botaoMostrar.addEventListener('click', function(e) {
                    e.stopPropagation();
                    toggleSenha(spanSenha, botaoMostrar);
                });
                
                const botaoSenha = criarBotaoCopiar(item.senha);
                
                celulaSenha.appendChild(spanSenha);
                celulaSenha.appendChild(botaoMostrar);
                celulaSenha.appendChild(botaoSenha);
                
                // Adicionar evento de clique na linha para abrir URL
                celulaConvenio.addEventListener('click', function (e) {
                    e.stopPropagation(); // evita interferir em outros cliques
                    if (item.url) {
                        window.open(item.url, '_blank');
                    }
                });
                celulaConvenio.style.cursor = 'pointer';
                celulaConvenio.title = `Clique para abrir ${item.nome}`;

                linha.appendChild(celulaConvenio);
                linha.appendChild(celulaCodigo);
                linha.appendChild(celulaLogin);
                linha.appendChild(celulaSenha);
                
                tbody.appendChild(linha);
            });
        })
        .catch(erro => {
            console.error("Erro ao carregar SenhasConvenios.json:", erro);
            const tbody = tabelaConvenios.querySelector('tbody');
            tbody.innerHTML = '<tr><td colspan="4" class="mensagem-erro">Erro ao carregar dados dos convênios</td></tr>';
        });
}

// Função para carregar dados das senhas de sistemas internos
function carregarTabelaSistemas() {
    if (!tabelaSistemas) return;
    
    fetch('SenhasDiversas.json')
        .then(resposta => resposta.json())
        .then(dados => {
            senhasDiversas = dados;
            const tbody = tabelaSistemas.querySelector('tbody');
            tbody.innerHTML = '';
            
            dados.forEach(item => {
                const linha = document.createElement("tr");
                
                // PROGRAMA (tratar arrays de nomes)
                const celulaPrograma = document.createElement('td');
                const nomePrograma = Array.isArray(item.nome) ? item.nome.join(' / ') : item.nome;
                celulaPrograma.textContent = nomePrograma;
                
                // LOGIN com botão copiar
                const celulaLogin = document.createElement('td');
                celulaLogin.className = 'celula-login';
                
                const spanLogin = document.createElement('span');
                spanLogin.textContent = item.login;
                spanLogin.className = 'dados-login';
                
                const botaoLogin = criarBotaoCopiar(item.login);
                
                celulaLogin.appendChild(spanLogin);
                celulaLogin.appendChild(botaoLogin);
                
                // SENHA com botão copiar
                const celulaSenha = document.createElement('td');
                celulaSenha.className = 'celula-senha';
                
                const spanSenha = document.createElement('span');
                spanSenha.textContent = '••••••••';
                spanSenha.className = 'dados-senha';
                spanSenha.dataset.senhaReal = item.senha;
                spanSenha.dataset.oculta = 'true';
                
                const botaoMostrar = document.createElement('button');
                botaoMostrar.className = 'btn-mostrar-senha';
                botaoMostrar.innerHTML = '👁️';
                botaoMostrar.title = 'Mostrar/Ocultar senha';
                botaoMostrar.addEventListener('click', function(e) {
                    e.stopPropagation();
                    toggleSenha(spanSenha, botaoMostrar);
                });
                
                const botaoSenha = criarBotaoCopiar(item.senha);
                
                celulaSenha.appendChild(spanSenha);
                celulaSenha.appendChild(botaoMostrar);
                celulaSenha.appendChild(botaoSenha);
                
                // Adicionar evento de clique na linha para abrir URL
                celulaPrograma.addEventListener('click', function (e) {
                e.stopPropagation();
                    if (item.url) {
                    window.open(item.url, '_blank');
                    }
                });
                celulaPrograma.style.cursor = 'pointer';
                celulaPrograma.title = `Clique para abrir ${nomePrograma}`;
                
                linha.appendChild(celulaPrograma);
                linha.appendChild(celulaLogin);
                linha.appendChild(celulaSenha);
                
                tbody.appendChild(linha);
            });
        })
        .catch(erro => {
            console.error("Erro ao carregar SenhasDiversas.json:", erro);
            const tbody = tabelaSistemas.querySelector('tbody');
            tbody.innerHTML = '<tr><td colspan="3" class="mensagem-erro">Erro ao carregar dados dos sistemas</td></tr>';
        });
}

// Função para mostrar/ocultar senha
function toggleSenha(spanSenha, botaoMostrar) {
    const oculta = spanSenha.dataset.oculta === 'true';
    
    if (oculta) {
        // Mostrar senha
        spanSenha.textContent = spanSenha.dataset.senhaReal;
        spanSenha.dataset.oculta = 'false';
        botaoMostrar.innerHTML = '🙈';
        botaoMostrar.title = 'Ocultar senha';
    } else {
        // Ocultar senha
        spanSenha.textContent = '••••••••';
        spanSenha.dataset.oculta = 'true';
        botaoMostrar.innerHTML = '👁️';
        botaoMostrar.title = 'Mostrar senha';
    }
}

function ocultarTodasSections() {
    const sections = ['bloqueador', 'senhas', 'equipe', 'capitacao', 'codigos', 'ramais', 'usg', 'tc', 'cardio', 'curativo', 'rm', 'prev', 'informa','cirurgia306', 'capita'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'none';
        }
    });
}

function mostrarSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função para remover acentos
function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function configurarBuscaMedicos() {
    if (buscadorMedico) {
        buscadorMedico.addEventListener('input', function() {
            const termoBusca = removerAcentos(this.value.toLowerCase().trim());
            filtrarMedicos(termoBusca);
        });
    }
}

function configurarBuscaUSG() {
    if (buscadorUSG) {
        buscadorUSG.addEventListener('input', function() {
            const termoBusca = removerAcentos(this.value.toLowerCase().trim());
            filtrarUSG(termoBusca);
        });
    }
}

// ✅ NOVA FUNÇÃO: Configurar busca de TC
function configurarBuscaTC() {
    if (buscadorTC) {
        buscadorTC.addEventListener('input', function() {
            const termoBusca = removerAcentos(this.value.toLowerCase().trim());
            filtrarTC(termoBusca);
        });
    }
}

// Função para configurar busca de rm
function configurarBuscaRM() {
    if (buscadorRM) {
        buscadorRM.addEventListener('input', function() {
            const termoBusca = removerAcentos(this.value.toLowerCase().trim());
            filtrarRM(termoBusca);
        });
    }
}

// Função para configurar busca de cardio
function configurarBuscaCardio() {
    if (buscadorCardio) {
        buscadorCardio.addEventListener('input', function() {
            const termoBusca = removerAcentos(this.value.toLowerCase().trim());
            filtrarCardio(termoBusca);
        });
    }
}

// Função para configurar busca de exames preventivos
function configurarBuscaPreventivo() {
    if (buscadorPreventivo) {
        buscadorPreventivo.addEventListener('input', function() {
            const termoBusca = removerAcentos(this.value.toLowerCase().trim());
            filtrarPreventivo(termoBusca);
        });
    }
}

// Função para configurar busca de curativos
function configurarBuscaCurativos() {
    if (buscadorCura) {
        buscadorCura.addEventListener('input', function() {
            const termoBusca = removerAcentos(this.value.toLowerCase().trim());
            filtrarCurativos(termoBusca);
        });
    }
}

function formatarArrayParaExibicao(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return '-';
    }

    return `
        <ul class="lista-tabela">
            ${array.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

function formatarArrayParaBusca(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return '';
    }
    return removerAcentos(array.join(' ').toLowerCase());
}

/**
 * Função centralizada para criar botão de copiar
 * @param {string} textoParaCopiar - Texto que será copiado
 * @returns {HTMLElement} - Elemento button configurado
 */
function criarBotaoCopiar(textoParaCopiar) {
    const botao = document.createElement('button');
    botao.className = 'btn-copiar';
    botao.textContent = 'Copiar';
    
    botao.addEventListener('click', function() {
        // Copia o texto
        navigator.clipboard.writeText(textoParaCopiar);
        
        // Salva o estado original
        const textoOriginal = botao.textContent;
        
        // Encontra a linha e identifica qual célula contém este botão
        const linha = botao.closest('tr');
        const celulaAtual = botao.closest('td');
        
        // Identifica qual número deve ser movido baseado na célula
        let numeroParaMover = null;
        let distanciaMovimento = 0;
        
        if (celulaAtual.classList.contains('celula-sigla')) {
            // Botão da sigla - move apenas o número da sigla
            numeroParaMover = linha.querySelector('.numero-sigla');
            distanciaMovimento = -43; // Ajustado para novo valor
        } else if (celulaAtual.classList.contains('celula-tasy')) {
            // Botão do TASY - move apenas o número do TASY
            numeroParaMover = linha.querySelector('.numero-tasy');
            distanciaMovimento = -43; // Novo suporte para TASY
        } else if (celulaAtual.classList.contains('celula-tuss')) {
            // Botão do TUSS - move apenas o número do TUSS
            numeroParaMover = linha.querySelector('.numero-tuss');
            distanciaMovimento = -43; // Sem movimento para TUSS, ou defina um valor se precisar
        }
        
        // CORREÇÃO: Aplicar o movimento ANTES de mudar o estado do botão
        if (numeroParaMover && distanciaMovimento !== 0) {
            numeroParaMover.style.transform = `translateX(${distanciaMovimento}px)`;
        }
        
        // Muda para o estado "copiado"
        botao.classList.add('copiado');
        botao.textContent = 'Copiado ✓';
        const container = botao.closest('.celula-codigo, .celula-login, .celula-senha, .celula-sigla');
        if (container) container.classList.add('botao-copiado');
        
        // Volta ao estado original após 1 segundo
        setTimeout(() => {
            botao.textContent = textoOriginal;
            botao.classList.remove('copiado');
    
        // Remover classe do container
            if (container) container.classList.remove('botao-copiado');
    
        // Volta o número ao estado original
            if (numeroParaMover) {
                numeroParaMover.style.transform = '';
            }
        }, 1500);

        setTimeout(() => {
        botao.textContent = textoOriginal;
        botao.classList.remove('copiado');

        // Remover classe do container
        if (container) container.classList.remove('botao-copiado');

        // Volta o número ao estado original
        if (numeroParaMover) {
        numeroParaMover.style.transform = '';
        }
}, 1500);
    });
    
    return botao;
}

/**
 * Função centralizada para criar linha da tabela USG
 * @param {Object} item - Objeto com dados do exame (exame, tuss)
 * @returns {HTMLElement} - Elemento tr configurado
 */
function criarLinhaUSG(item) {
    const linha = document.createElement("tr");
    
    // Criar célula do exame
    const celulaExame = document.createElement('td');
    celulaExame.textContent = item.exame;
    
    // Criar célula do TUSS - REMOVIDOS OS ESTILOS INLINE
    const celulaTuss = document.createElement('td');
    celulaTuss.className = 'celula-tuss'; // Usar classe CSS em vez de estilos inline
    
    // Criar span para o número TUSS
    const spanTuss = document.createElement('span');
    spanTuss.textContent = item.tuss;
    spanTuss.className = 'numero-tuss'; // Usar classe CSS
    
    // Criar botão de copiar usando a função centralizada
    const botaoCopia = criarBotaoCopiar(item.tuss);
    
    // Montar a célula TUSS
    celulaTuss.appendChild(spanTuss);
    celulaTuss.appendChild(botaoCopia);
    
    // Montar a linha
    linha.appendChild(celulaExame);
    linha.appendChild(celulaTuss);
    
    return linha;
}

function criarLinhaCardio(item) {
    const linha = document.createElement("tr");
    
    // Criar célula do exame
    const celulaExame = document.createElement('td');
    celulaExame.textContent = item.exame;
    
    // Criar célula do TUSS - REMOVIDOS OS ESTILOS INLINE
    const celulaTuss = document.createElement('td');
    celulaTuss.className = 'celula-tuss'; // Usar classe CSS em vez de estilos inline
    
    // Criar span para o número TUSS
    const spanTuss = document.createElement('span');
    spanTuss.textContent = item.tuss;
    spanTuss.className = 'numero-tuss'; // Usar classe CSS
    
    // Criar botão de copiar usando a função centralizada
    const botaoCopia = criarBotaoCopiar(item.tuss);
    
    // Montar a célula TUSS
    celulaTuss.appendChild(spanTuss);
    celulaTuss.appendChild(botaoCopia);
    
    // Montar a linha
    linha.appendChild(celulaExame);
    linha.appendChild(celulaTuss);
    
    return linha;
}

// ✅ NOVA FUNÇÃO: Criar linha da tabela TC (mesma estrutura do USG)
/**
 * Função centralizada para criar linha da tabela TC
 * @param {Object} item - Objeto com dados do exame (exame, tuss)
 * @returns {HTMLElement} - Elemento tr configurado
 */
function criarLinhaTC(item) {
    const linha = document.createElement("tr");
    
    // Criar célula do exame
    const celulaExame = document.createElement('td');
    celulaExame.textContent = item.exame;
    
    // Criar célula do TUSS - REMOVIDOS OS ESTILOS INLINE
    const celulaTuss = document.createElement('td');
    celulaTuss.className = 'celula-tuss'; // Usar classe CSS em vez de estilos inline
    
    // Criar span para o número TUSS
    const spanTuss = document.createElement('span');
    spanTuss.textContent = item.tuss;
    spanTuss.className = 'numero-tuss'; // Usar classe CSS
    
    // Criar botão de copiar usando a função centralizada
    const botaoCopia = criarBotaoCopiar(item.tuss);
    
    // Montar a célula TUSS
    celulaTuss.appendChild(spanTuss);
    celulaTuss.appendChild(botaoCopia);
    
    // Montar a linha
    linha.appendChild(celulaExame);
    linha.appendChild(celulaTuss);
    
    return linha;
}

// Função para criar linha da tabela de exames preventivos
/**
 * Função centralizada para criar linha da tabela de exames preventivos
 * @param {Object} item - Objeto com dados do exame (sigla, exame, coleta, tasy, tuss)
 * @returns {HTMLElement} - Elemento tr configurado
 */
function criarLinhaPreventivo(item) {
    const linha = document.createElement("tr");
    
    // Criar célula da sigla
    const celulaSigla = document.createElement('td');
    celulaSigla.className = 'celula-sigla';
    
    // Criar span para a sigla
    const spanSigla = document.createElement('span');
    spanSigla.textContent = item.sigla;
    spanSigla.className = 'numero-sigla';
    
    // Criar botão de copiar para a sigla
    const botaoCopiaSigla = criarBotaoCopiar(item.sigla);
    
    // Criar div para agrupar span e botão
    const divSigla = document.createElement('div');
    divSigla.className = 'sigla-container';
    divSigla.appendChild(spanSigla);
    divSigla.appendChild(botaoCopiaSigla);
    
    // Adiciona a div à célula SIGLA
    celulaSigla.appendChild(divSigla);
    
    // Criar célula do exame
    const celulaExame = document.createElement('td');
    celulaExame.textContent = item.exame;
    
    // Criar célula do tipo de coleta
    const celulaColeta = document.createElement('td');
    celulaColeta.textContent = item.coleta;
    
    // Criar célula do CÓDIGO TASY
    const celulaTasy = document.createElement('td');
    celulaTasy.className = 'celula-tasy';
    
    const spanTasy = document.createElement('span');
    spanTasy.textContent = item.tasy;
    spanTasy.className = 'numero-tasy';
    
    const botaoCopiaTasy = criarBotaoCopiar(item.tasy);
    
    celulaTasy.appendChild(spanTasy);
    celulaTasy.appendChild(botaoCopiaTasy);
    
    // Criar célula do TUSS
    const celulaTuss = document.createElement('td');
    celulaTuss.className = 'celula-tuss';
    
    const spanTuss = document.createElement('span');
    spanTuss.textContent = item.tuss;
    spanTuss.className = 'numero-tuss';
    
    const botaoCopiaTuss = criarBotaoCopiar(item.tuss);
    
    celulaTuss.appendChild(spanTuss);
    celulaTuss.appendChild(botaoCopiaTuss);
    
    // Montar a linha completa
    linha.appendChild(celulaSigla);
    linha.appendChild(celulaExame);
    linha.appendChild(celulaColeta);
    linha.appendChild(celulaTasy);
    linha.appendChild(celulaTuss);
    
    return linha;
}


/**
 * Função centralizada para criar linha da tabela de curativos
 * @param {Object} item - Objeto com dados do curativo (convenio, descricao, tuss)
 * @returns {HTMLElement} - Elemento tr configurado
 */
function criarLinhaCurativo(item) {
    const linha = document.createElement("tr");
    
    // Criar célula do convênio
    const celulaConvenio = document.createElement('td');
    celulaConvenio.textContent = item.convenio;
    celulaConvenio.className = 'celula-convenio';
    
    // Criar célula da descrição
    const celulaDescricao = document.createElement('td');
    celulaDescricao.textContent = item.descricao;
    
    // Criar célula do TUSS
    const celulaTuss = document.createElement('td');
    celulaTuss.className = 'celula-tuss';
    
    // Criar span para o número TUSS
    const spanTuss = document.createElement('span');
    spanTuss.textContent = item.tuss;
    spanTuss.className = 'numero-tuss';
    
    // Criar botão de copiar usando a função centralizada
    const botaoCopia = criarBotaoCopiar(item.tuss);
    
    // Montar a célula TUSS
    celulaTuss.appendChild(spanTuss);
    celulaTuss.appendChild(botaoCopia);
    
    // Montar a linha
    linha.appendChild(celulaConvenio);
    linha.appendChild(celulaDescricao);
    linha.appendChild(celulaTuss);
    
    return linha;
}

/**
 * Função para popular tbody da tabela USG com array de exames
 * @param {HTMLElement} tbody - Elemento tbody da tabela
 * @param {Array} exames - Array de exames para exibir
 */
function popularTabelaUSG(tbody, exames) {
    tbody.innerHTML = '';
    
    exames.forEach(item => {
        const linha = criarLinhaUSG(item);
        tbody.appendChild(linha);
    });
}

/**
 * Função para popular tbody da tabela de cardio com array de exames
 * @param {HTMLElement} tbody - Elemento tbody da tabela
 * @param {Array} exames - Array de exames para exibir
 * */
function popularTabelaCardio(tbody, exames) {
    tbody.innerHTML = '';
    exames.forEach(item => {
        const linha = criarLinhaCardio(item);
        tbody.appendChild(linha);
    });
}

/**
 * Função para popular tbody da tabela de exames preventivos com array de exames
 * @param {HTMLElement} tbody - Elemento tbody da tabela
 * @param {Array} exames - Array de exames para exibir
 */
function popularTabelaPreventivo(tbody, exames) {
    tbody.innerHTML = '';
    
    exames.forEach(item => {
        const linha = criarLinhaPreventivo(item);
        tbody.appendChild(linha);
    });
}


// ✅ NOVA FUNÇÃO: Popular tabela TC
/**
 * Função para popular tbody da tabela TC com array de exames
 * @param {HTMLElement} tbody - Elemento tbody da tabela
 * @param {Array} exames - Array de exames para exibir
 */
function popularTabelaTC(tbody, exames) {
    tbody.innerHTML = '';
    
    exames.forEach(item => {
        const linha = criarLinhaTC(item);
        tbody.appendChild(linha);
    });
}

/**
 * Função para popular tbody da tabela de curativos com array de curativos
 * @param {HTMLElement} tbody - Elemento tbody da tabela
 * @param {Array} curativos - Array de curativos para exibir
 */
function popularTabelaCurativos(tbody, curativos) {
    tbody.innerHTML = '';
    
    curativos.forEach(item => {
        const linha = criarLinhaCurativo(item);
        tbody.appendChild(linha);
    });
}

function filtrarMedicos(termo) {
    console.log('Filtro chamado com termo:', termo);
    
    if (!tabelaMedicos) {
        console.log('Tabela não encontrada');
        return;
    }
    
    const tbody = tabelaMedicos.querySelector('tbody');
    
    if (medicos.length === 0) {
        console.log('Array medicos vazio, tentando novamente...');
        setTimeout(() => filtrarMedicos(termo), 100);
        return;
    }
    
    // Se o termo estiver vazio, recarrega todos os médicos
    if (!termo || termo.trim() === '') {
        carregarTabelaMedicos();
        return;
    }
    
    console.log('Buscando por:', termo);
    
    // Limpa a tabela
    tbody.innerHTML = '';
    
    // Dividir o termo de busca em palavras individuais
    const palavrasBusca = termo.split(/\s+/).filter(palavra => palavra.length > 0);
    
    // Filtra os médicos
    const medicosFiltrados = medicos.filter(item => {
        // Tratar SALAS adequadamente
        let salasTexto = "";
        if (Array.isArray(item["SALAS"])) {
            salasTexto = item["SALAS"].join(" ");
        } else if (item["SALAS"]) {
            salasTexto = String(item["SALAS"]);
        }
        const salas = removerAcentos(salasTexto.toLowerCase());
        
        // Tratar outros campos
        const medico = removerAcentos(String(item["MÉDICOS"] || "").toLowerCase());
        const crm = removerAcentos(String(item["CRM"] || "").toLowerCase());
        
        // Tratar ESPECIALIDADES adequadamente
        let especialidadesTexto = "";
        if (Array.isArray(item["ESPECIALIDADES"])) {
            especialidadesTexto = item["ESPECIALIDADES"].join(" ");
        } else if (item["ESPECIALIDADES"]) {
            especialidadesTexto = String(item["ESPECIALIDADES"]);
        }
        const especialidades = removerAcentos(especialidadesTexto.toLowerCase());
        
        // Tratar CONVÊNIOS adequadamente
        let conveniosTexto = "";
        if (Array.isArray(item["CONVÊNIOS"])) {
            conveniosTexto = item["CONVÊNIOS"].join(" ");
        } else if (item["CONVÊNIOS"]) {
            conveniosTexto = String(item["CONVÊNIOS"]);
        }
        const convenios = removerAcentos(conveniosTexto.toLowerCase());
        
        // Tratar TELEFONES adequadamente
        let telefonesTexto = "";
        if (Array.isArray(item["TELEFONES"])) {
            telefonesTexto = item["TELEFONES"].join(" ");
        } else if (item["TELEFONES"]) {
            telefonesTexto = String(item["TELEFONES"]);
        }
        const telefones = removerAcentos(telefonesTexto.toLowerCase());

        // Criar texto completo para busca
        const textoCompleto = `${salas} ${medico} ${crm} ${especialidades} ${convenios} ${telefones}`;
        
        // Verificar se TODAS as palavras estão presentes
        return palavrasBusca.every(palavra => textoCompleto.includes(palavra));
    });
    
    console.log('Total filtrados:', medicosFiltrados.length);
    
    // Recriar as linhas
    medicosFiltrados.forEach(item => {
        const linha = document.createElement("tr");
        linha.classList.add("linha-com-hover");
        
        // SALAS
        const celulaSalas = document.createElement('td');
        const valorSalas = Array.isArray(item["SALAS"]) ? item["SALAS"].join(", ") : (item["SALAS"] || "");
        celulaSalas.textContent = valorSalas;
        
        // MÉDICOS
        const celulaMedico = document.createElement('td');
        celulaMedico.textContent = item["MÉDICOS"];
        const botaoMedico = criarBotaoCopiar(item["MÉDICOS"]);
        botaoMedico.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        celulaMedico.appendChild(document.createTextNode(' '));
        celulaMedico.appendChild(botaoMedico);

        // CRM
        const celulaCRM = document.createElement('td');
        celulaCRM.classList.add('celula-centralizada');
        celulaCRM.textContent = item["CRM"];
        const botaoCRM = criarBotaoCopiar(item["CRM"]);
        botaoCRM.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        celulaCRM.appendChild(document.createTextNode(' '));
        celulaCRM.appendChild(botaoCRM);

        // ESPECIALIDADES - USAR NOVA FUNÇÃO
        const celulaEspecialidades = document.createElement('td');
        celulaEspecialidades.innerHTML = formatarEspecialidadesLista(item["ESPECIALIDADES"]);
        
        // CONVÊNIOS COM SISTEMA EXPANDÍVEL
        const celulaConvenios = document.createElement('td');
        celulaConvenios.innerHTML = formatarConveniosExpandiveis(item["CONVÊNIOS"]);
        
        // TELEFONES - USAR NOVA FUNÇÃO
        const celulaTelefones = document.createElement('td');
        celulaTelefones.innerHTML = formatarTelefonesLista(item["TELEFONES"]);
        
        // Adicionar todas as células na linha
        linha.appendChild(celulaSalas);
        linha.appendChild(celulaMedico);
        linha.appendChild(celulaCRM);
        linha.appendChild(celulaEspecialidades);
        linha.appendChild(celulaConvenios);
        linha.appendChild(celulaTelefones);

        tbody.appendChild(linha);
    });
    
    // Se não encontrou resultados
    if (medicosFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="mensagem-vazia">Nenhum médico encontrado</td></tr>';
    }
}


/**
 * VERSÃO FINAL CORRIGIDA - Função para formatar convênios
 * Compatível com seu CSS existente e garantindo PARTICULAR sempre visível
 * CORREÇÃO: Normaliza dados que vêm como string ao invés de array
 */
function formatarConveniosExpandiveis(convenios) {
    console.log('💡 Formatando convênios (entrada):', convenios, typeof convenios);

    let conveniosNormalizados = [];

    if (!convenios) {
        console.log('⚠️ Convênios null/undefined');
        return '<span class="sem-convenios">-</span>';
    }

    if (Array.isArray(convenios)) {
        conveniosNormalizados = convenios;
    } else if (typeof convenios === 'string') {
        if (convenios.trim() === '' || convenios.trim() === '-') {
            console.log('⚠️ String vazia ou hífen');
            return '<span class="sem-convenios">-</span>';
        }
        conveniosNormalizados = [convenios.trim()];
    } else {
        conveniosNormalizados = [String(convenios)];
    }

    // 🔹 Filtra vazios e hifens
    conveniosNormalizados = conveniosNormalizados.filter(conv => 
        conv && conv.trim() !== '' && conv.trim() !== '-'
    );

    if (conveniosNormalizados.length === 0) {
        console.log('⚠️ Nenhum convênio válido após normalização');
        return '<span class="sem-convenios">-</span>';
    }

    // 🔹 Ordenar em ordem alfabética (case-insensitive)
    conveniosNormalizados.sort((a, b) => a.localeCompare(b, 'pt', { sensitivity: 'base' }));

    console.log('✅ Convênios normalizados e ordenados:', conveniosNormalizados);

    // Mostrar todos se houver 1 ou 2
    if (conveniosNormalizados.length <= 2) {
        return `
            <div class="convenios-container">
                <ul class="lista-convenios">
                    ${conveniosNormalizados.map(conv => `<li>${conv}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    console.log('🔄 Sistema expandível ativado');

    const indexParticular = conveniosNormalizados.findIndex(conv =>
        conv.toUpperCase().includes('PARTICULAR')
    );

    let conveniosVisiveis = [];
    let conveniosOcultos = [];

    if (indexParticular !== -1) {
        const particular = conveniosNormalizados[indexParticular];
        console.log('✨ PARTICULAR encontrado:', particular);

        // PARTICULAR sempre primeiro
        conveniosVisiveis.push(particular);

        const outrosConvenios = conveniosNormalizados.filter((conv, index) => index !== indexParticular);

        // Adiciona mais um convênio visível se houver
        if (outrosConvenios.length > 0) {
            conveniosVisiveis.push(outrosConvenios[0]);
            conveniosOcultos = outrosConvenios.slice(1);
        }
    } else {
        console.log('📝 Sem PARTICULAR, lógica padrão');
        conveniosVisiveis = conveniosNormalizados.slice(0, 2);
        conveniosOcultos = conveniosNormalizados.slice(2);
    }

    if (conveniosOcultos.length === 0) {
        return `
            <div class="convenios-container">
                <ul class="lista-convenios">
                    ${conveniosVisiveis.map(conv => `<li>${conv}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    const totalOcultos = conveniosOcultos.length;

    const html = `
        <div class="convenios-container">
            <ul class="lista-convenios convenios-visiveis">
                ${conveniosVisiveis.map(conv => `<li>${conv}</li>`).join('')}
            </ul>
            
            <ul class="lista-convenios convenios-ocultos" style="display: none;">
                ${conveniosOcultos.map(conv => `<li>${conv}</li>`).join('')}
            </ul>
            
            <button class="btn-expandir-convenios" 
                    data-expandido="false"
                    title="Clique para ver todos os convênios">
                <span class="texto-expandir">Ver +${totalOcultos}</span>
                <span class="texto-recolher" style="display: none;">Ocultar</span>
                <svg class="icone-expandir" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                </svg>
            </button>
        </div>
    `;

    console.log('✅ HTML gerado com sucesso');
    return html;
}


/**
 * VERSÃO MELHORADA - Event handler para expandir/recolher
 * Usa event delegation mais eficiente
 */
function configurarBotoesExpandirConvenios() {
    // Evita configurar múltiplas vezes
    if (window.conveniosEventConfigured) {
        return;
    }
    
    console.log('🔧 Configurando eventos de expansão...');
    
    // Event delegation no documento
    document.addEventListener('click', function(e) {
        // Verifica se clicou no botão ou em um elemento filho
        const botao = e.target.closest('.btn-expandir-convenios');
        if (!botao) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        console.log('🖱️ Botão clicado');
        
        const container = botao.closest('.convenios-container');
        if (!container) {
            console.error('❌ Container não encontrado');
            return;
        }
        
        const conveniosOcultos = container.querySelector('.convenios-ocultos');
        const textoExpandir = botao.querySelector('.texto-expandir');
        const textoRecolher = botao.querySelector('.texto-recolher');
        const icone = botao.querySelector('.icone-expandir');
        
        if (!conveniosOcultos || !textoExpandir || !textoRecolher) {
            console.error('❌ Elementos necessários não encontrados');
            return;
        }
        
        const expandido = botao.dataset.expandido === 'true';
        
        if (expandido) {
            // Recolher
            console.log('📤 Recolhendo convênios');
            conveniosOcultos.style.display = 'none';
            conveniosOcultos.classList.remove('expandido');
            textoExpandir.style.display = 'inline';
            textoRecolher.style.display = 'none';
            if (icone) icone.style.transform = 'rotate(0deg)';
            botao.dataset.expandido = 'false';
            botao.classList.remove('expandido');
        } else {
            // Expandir
            console.log('📥 Expandindo convênios');
            conveniosOcultos.style.display = 'block';
            conveniosOcultos.classList.add('expandido');
            textoExpandir.style.display = 'none';
            textoRecolher.style.display = 'inline';
            if (icone) icone.style.transform = 'rotate(180deg)';
            botao.dataset.expandido = 'true';
            botao.classList.add('expandido');
        }
    });
    
    // Marcar como configurado
    window.conveniosEventConfigured = true;
    console.log('✅ Eventos configurados com sucesso');
}

let eventoConveniosConfigurado = false;
/**
 * Função para configurar eventos dos botões de expandir convênios
 * Deve ser chamada após carregar a tabela
 */
function configurarBotoesExpandirConvenios() {
    // Evita configurar o evento múltiplas vezes
    if (eventoConveniosConfigurado) {
        return;
    }
    
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-expandir-convenios')) {
            e.stopPropagation();
            
            const botao = e.target.closest('.btn-expandir-convenios');
            const container = botao.closest('.convenios-container');
            const conveniosOcultos = container.querySelector('.convenios-ocultos');
            const textoExpandir = botao.querySelector('.texto-expandir');
            const textoRecolher = botao.querySelector('.texto-recolher');
            const icone = botao.querySelector('.icone-expandir');
            
            const expandido = botao.dataset.expandido === 'true';
            
            if (expandido) {
                // Recolher
                conveniosOcultos.style.display = 'none';
                textoExpandir.style.display = 'inline';
                textoRecolher.style.display = 'none';
                icone.style.transform = 'rotate(0deg)';
                botao.dataset.expandido = 'false';
                botao.classList.remove('expandido');
            } else {
                // Expandir
                conveniosOcultos.style.display = 'block';
                textoExpandir.style.display = 'none';
                textoRecolher.style.display = 'inline';
                icone.style.transform = 'rotate(180deg)';
                botao.dataset.expandido = 'true';
                botao.classList.add('expandido');
            }
        }
    });
    
    eventoConveniosConfigurado = true; // Marca como configurado
}

// ===== MODIFICAR SUA FUNÇÃO carregarTabelaMedicos =====

function carregarTabelaMedicos() {
    if (!tabelaMedicos) return;

    fetch('medicos.json')
        .then(resposta => resposta.json())
        .then(dados => {
            medicos = dados;
            const tbody = tabelaMedicos.querySelector('tbody');
            tbody.innerHTML = '';
           
            dados.forEach(item => {
                const linha = document.createElement("tr");
                linha.classList.add("linha-com-hover");
                
                // SALAS
                const celulaSalas = document.createElement('td');
                const valorSalas = Array.isArray(item["SALAS"]) ? item["SALAS"].join(", ") : (item["SALAS"] || "");
                celulaSalas.textContent = valorSalas;
                
                // MÉDICO
                const celulaMedico = document.createElement('td');
                celulaMedico.textContent = item["MÉDICOS"];
                const botaoMedico = criarBotaoCopiar(item["MÉDICOS"]);
                botaoMedico.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
                celulaMedico.appendChild(document.createTextNode(' '));
                celulaMedico.appendChild(botaoMedico);

                // CRM
                const celulaCRM = document.createElement('td');
                celulaCRM.classList.add('celula-centralizada');
                celulaCRM.textContent = item["CRM"];
                const botaoCRM = criarBotaoCopiar(item["CRM"]);
                botaoCRM.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
                celulaCRM.appendChild(document.createTextNode(' '));
                celulaCRM.appendChild(botaoCRM);

                // ESPECIALIDADES - USAR NOVA FUNÇÃO
                const celulaEspecialidades = document.createElement('td');
                celulaEspecialidades.innerHTML = formatarEspecialidadesLista(item["ESPECIALIDADES"]);
                
                // CONVÊNIOS - USAR FUNÇÃO EXISTENTE
                const celulaConvenios = document.createElement('td');
                celulaConvenios.innerHTML = formatarConveniosExpandiveis(item["CONVÊNIOS"]);
                
                // TELEFONES - USAR NOVA FUNÇÃO
                const celulaTelefones = document.createElement('td');
                celulaTelefones.innerHTML = formatarTelefonesLista(item["TELEFONES"]);
                
                // Montar linha
                linha.appendChild(celulaSalas);
                linha.appendChild(celulaMedico);
                linha.appendChild(celulaCRM);
                linha.appendChild(celulaEspecialidades);
                linha.appendChild(celulaConvenios);
                linha.appendChild(celulaTelefones);

                tbody.appendChild(linha);
            });
        })
        .catch(erro => {
            console.error("Erro ao carregar o arquivo JSON:", erro);
            const tbody = tabelaMedicos.querySelector('tbody');
            tbody.innerHTML = '<tr><td colspan="6" class="mensagem-erro">Erro ao carregar dados dos médicos</td></tr>';
        });
}

// CORREÇÃO 3: Função formatarArrayParaExibicao para convênios (garantir que está funcionando)
function formatarArrayParaExibicao(valor) {
    if (Array.isArray(valor) && valor.length > 0) {
        return `<ul class="lista-convenios">
            ${valor.map(conv => `<li>${conv}</li>`).join("")}
        </ul>`;
    }
    return valor || "-";
}

/**
 * Função para formatar especialidades em lista
 * Sempre exibe todos os itens, sem sistema de expansão
 */
function formatarEspecialidadesLista(especialidades) {
    console.log('📋 Formatando especialidades (entrada):', especialidades, typeof especialidades);
    
    // Normalizar dados independente do formato
    let especialidadesNormalizadas = [];
    
    if (!especialidades) {
        console.log('⚠️ Especialidades null/undefined');
        return '<span class="sem-dados">-</span>';
    }
    
    if (Array.isArray(especialidades)) {
        // Já é array, usar diretamente
        especialidadesNormalizadas = especialidades;
    } else if (typeof especialidades === 'string') {
        // É string, verificar se contém separadores
        if (especialidades.trim() === '' || especialidades.trim() === '-') {
            console.log('⚠️ String vazia ou hífen');
            return '<span class="sem-dados">-</span>';
        }
        
        // Tentar separar por vírgula, ponto-e-vírgula ou quebra de linha
        const separadores = /[,;|\n]/;
        if (separadores.test(especialidades)) {
            especialidadesNormalizadas = especialidades.split(separadores)
                .map(esp => esp.trim())
                .filter(esp => esp.length > 0);
        } else {
            // É uma única especialidade
            especialidadesNormalizadas = [especialidades.trim()];
        }
    } else {
        // Outro tipo, tentar converter para string
        especialidadesNormalizadas = [String(especialidades)];
    }
    
    // Filtrar especialidades vazias
    especialidadesNormalizadas = especialidadesNormalizadas.filter(esp => 
        esp && esp.trim() !== '' && esp.trim() !== '-'
    );
    
    console.log('✅ Especialidades normalizadas:', especialidadesNormalizadas);
    
    if (especialidadesNormalizadas.length === 0) {
        console.log('⚠️ Nenhuma especialidade válida após normalização');
        return '<span class="sem-dados">-</span>';
    }
    
    // Se tem apenas 1 especialidade, mostra como texto normal
    if (especialidadesNormalizadas.length === 1) {
        return especialidadesNormalizadas[0];
    }
    
    // Para múltiplas especialidades, mostra em lista
    console.log('📝 Múltiplas especialidades, criando lista');
    return `
        <div class="especialidades-container">
            <ul class="lista-especialidades">
                ${especialidadesNormalizadas.map(esp => `<li>${esp}</li>`).join('')}
            </ul>
        </div>
    `;
}

/**
 * Função para formatar telefones em lista
 * Sempre exibe todos os itens, sem sistema de expansão
 */
function formatarTelefonesLista(telefones) {
    console.log('📞 Formatando telefones (entrada):', telefones, typeof telefones);
    
    // Normalizar dados independente do formato
    let telefonesNormalizados = [];
    
    if (!telefones) {
        console.log('⚠️ Telefones null/undefined');
        return '<span class="sem-dados">-</span>';
    }
    
    if (Array.isArray(telefones)) {
        // Já é array, usar diretamente
        telefonesNormalizados = telefones;
    } else if (typeof telefones === 'string') {
        // É string, verificar se contém separadores
        if (telefones.trim() === '' || telefones.trim() === '-') {
            console.log('⚠️ String vazia ou hífen');
            return '<span class="sem-dados">-</span>';
        }
        
        // Tentar separar por vírgula, ponto-e-vírgula, quebra de linha ou barra
        const separadores = /[,;|\n\/]/;
        if (separadores.test(telefones)) {
            telefonesNormalizados = telefones.split(separadores)
                .map(tel => tel.trim())
                .filter(tel => tel.length > 0);
        } else {
            // É um único telefone
            telefonesNormalizados = [telefones.trim()];
        }
    } else {
        // Outro tipo, tentar converter para string
        telefonesNormalizados = [String(telefones)];
    }
    
    // Filtrar telefones vazios
    telefonesNormalizados = telefonesNormalizados.filter(tel => 
        tel && tel.trim() !== '' && tel.trim() !== '-'
    );
    
    console.log('✅ Telefones normalizados:', telefonesNormalizados);
    
    if (telefonesNormalizados.length === 0) {
        console.log('⚠️ Nenhum telefone válido após normalização');
        return '<span class="sem-dados">-</span>';
    }
    
    // Se tem apenas 1 telefone, mostra como texto normal
    if (telefonesNormalizados.length === 1) {
        return telefonesNormalizados[0];
    }
    
    // Para múltiplos telefones, mostra em lista
    console.log('📱 Múltiplos telefones, criando lista');
    return `
        <div class="telefones-container">
            <ul class="lista-telefones">
                ${telefonesNormalizados.map(tel => `<li>${tel}</li>`).join('')}
            </ul>
        </div>
    `;
}

function carregarTabelaUSG() {
    if (!tabelaUSG) return;
    
    fetch('USG.json')
        .then(resposta => resposta.json())
        .then(dados => {
            examesTodosUSG = dados; // Armazena os dados globalmente para busca
            const tbody = tabelaUSG.querySelector('tbody');
            
            // Usar função centralizada para popular tabela
            popularTabelaUSG(tbody, dados);
        })
        .catch(erro => {
            console.error("Erro ao carregar o arquivo USG.json:", erro);
            const tbody = tabelaUSG.querySelector('tbody');
            tbody.innerHTML = '<tr><td colspan="2" class="mensagem-erro">Erro ao carregar dados dos exames de ultrassom</td></tr>';
        });
}

//Carregar tabela Cardio
function carregarTabelaCardio() {
    if (!tabelaCardio) return;
    fetch('cardio.json')
        .then(resposta => resposta.json())
        .then(dados => {
            examesTodosCardio = dados; // Armazena os dados globalmente para busca
            const tbody = tabelaCardio.querySelector('tbody');
            // Usar função centralizada para popular tabela
            popularTabelaCardio(tbody, dados);
        })
        .catch(erro => {
            console.error("Erro ao carregar o arquivo cardio.json:", erro);
            const tbody = tabelaCardio.querySelector('tbody');
            tbody.innerHTML = '<tr><td colspan="2" class="mensagem-erro">Erro ao carregar dados dos exames de cardiologia</td></tr>';
        });
}

//Carregar tabela TC
function carregarTabelaTC() {
    if (!tabelaTC) return;
    
    fetch('tc.json')
        .then(resposta => resposta.json())
        .then(dados => {
            examesTodosTC = dados; // Armazena os dados globalmente para busca
            const tbody = tabelaTC.querySelector('tbody');
            
            // Usar função centralizada para popular tabela
            popularTabelaTC(tbody, dados);
        })
        .catch(erro => {
            console.error("Erro ao carregar o arquivo tc.json:", erro);
            const tbody = tabelaTC.querySelector('tbody');
            tbody.innerHTML = '<tr><td colspan="2" class="mensagem-erro">Erro ao carregar dados dos exames de tomografia</td></tr>';
        });
}

function carregarTabelaPreventivo() {
    if (!tabelaPreventivo) return;
    
    fetch('preventivo.json')
        .then(resposta => resposta.json())
        .then(dados => {
            examesPrevent = dados; // Armazena os dados globalmente para busca
            const tbody = tabelaPreventivo.querySelector('tbody');
            
            // Usar função centralizada para popular tabela
            popularTabelaPreventivo(tbody, dados);
        })
        .catch(erro => {
            console.error("Erro ao carregar o arquivo preventivo.json:", erro);
            const tbody = tabelaPreventivo.querySelector('tbody');
            tbody.innerHTML = '<tr><td colspan="4" class="mensagem-erro">Erro ao carregar dados dos exames preventivos</td></tr>';
        });
}

//Carregar tabela RM
 function carregarTabelaRM() {
     if (!tabelaRM) return;
     
     fetch('rm.json')
         .then(resposta => resposta.json())
         .then(dados => {
             examesTodosRM = dados; // Armazena os dados globalmente para busca
             const tbody = tabelaRM.querySelector('tbody');
             
             // Usar função centralizada para popular tabela
             popularTabelaRM(tbody, dados);
         })
         .catch(erro => {
             console.error("Erro ao carregar o arquivo rm.json:", erro);
             const tbody = tabelaRM.querySelector('tbody');
             tbody.innerHTML = '<tr><td colspan="2" class="mensagem-erro">Erro ao carregar dados dos exames de ressonância magnética</td></tr>';
         });
 }

//Carregar tabela Curativos
function carregarTabelaCurativos() {
    if (!tabelaCura) return;
    
    fetch('curativos.json')
        .then(resposta => resposta.json())
        .then(dados => {
            curativosTodos = dados; // Armazena os dados globalmente para busca
            const tbody = tabelaCura.querySelector('tbody');
            
            // Usar função centralizada para popular tabela
            popularTabelaCurativos(tbody, dados);
        })
        .catch(erro => {
            console.error("Erro ao carregar o arquivo curativo.json:", erro);
            const tbody = tabelaCura.querySelector('tbody');
            tbody.innerHTML = '<tr><td colspan="3" class="mensagem-erro">Erro ao carregar dados dos curativos</td></tr>';
        });
}

// Função para criar linha da tabela RM (mesma estrutura do USG e TC)
/**
 * Função centralizada para criar linha da tabela RM
 * @param {Object} item - Objeto com dados do exame (exame, tuss)
 * @returns {HTMLElement} - Elemento tr configurado
 */
function criarLinhaRM(item) {
    const linha = document.createElement("tr");
    
    // Criar célula do exame
    const celulaExame = document.createElement('td');
    celulaExame.textContent = item.exame;
    
    // Criar célula do TUSS - REMOVIDOS OS ESTILOS INLINE
    const celulaTuss = document.createElement('td');
    celulaTuss.className = 'celula-tuss'; // Usar classe CSS em vez de estilos inline
    
    // Criar span para o número TUSS
    const spanTuss = document.createElement('span');
    spanTuss.textContent = item.tuss;
    spanTuss.className = 'numero-tuss'; // Usar classe CSS
    
    // Criar botão de copiar usando a função centralizada
    const botaoCopia = criarBotaoCopiar(item.tuss);
    
    // Montar a célula TUSS
    celulaTuss.appendChild(spanTuss);
    celulaTuss.appendChild(botaoCopia);
    
    // Montar a linha
    linha.appendChild(celulaExame);
    linha.appendChild(celulaTuss);
    
    return linha;
}

/**
 * Função para popular tbody da tabela RM com array de exames
 * @param {HTMLElement} tbody - Elemento tbody da tabela
 * @param {Array} exames - Array de exames para exibir
 */
function popularTabelaRM(tbody, exames) {
    tbody.innerHTML = '';
    
    exames.forEach(item => {
        const linha = criarLinhaRM(item);
        tbody.appendChild(linha);
    });
}

/**
 * Função para filtrar exames de RM baseado no termo de busca
 * @param {string} termo - Termo de busca digitado pelo usuário
 */
function filtrarRM(termo) {
    if (!tabelaRM) return;
    
    const tbody = tabelaRM.querySelector('tbody');
    
    if (examesTodosRM.length === 0) {
        // Se os dados ainda não foram carregados, aguarda um pouco e tenta novamente
        setTimeout(() => filtrarRM(termo), 100);
        return;
    }
    
    // Se não há termo de busca, mostra todos os exames
    if (!termo || termo.trim() === '') {
        popularTabelaRM(tbody, examesTodosRM);
        return;
    }
    
    // Dividir o termo de busca em palavras individuais
    const palavrasBusca = termo.split(/\s+/).filter(palavra => palavra.length > 0);
    
    // Filtra os exames baseado no termo de busca
    const examesFiltrados = examesTodosRM.filter(exame => {
        // Cria texto completo para busca (remove acentos de todos os campos)
        const textoCompleto = removerAcentos(`${exame.exame} ${exame.tuss}`.toLowerCase());
        
        // Verifica se TODAS as palavras da busca estão presentes no texto (independente da ordem)
        return palavrasBusca.every(palavra => 
            textoCompleto.includes(removerAcentos(palavra.toLowerCase()))
        );
    });
    
    // Usar função centralizada para popular tabela
    popularTabelaRM(tbody, examesFiltrados);
    
    // Se não encontrou nenhum resultado
    if (examesFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="2" class="mensagem-vazia">Nenhum exame encontrado</td></tr>';
    }
}

/**
 * Função para filtrar exames preventivos baseado no termo de busca
 * @param {string} termo - Termo de busca digitado pelo usuário
 */
function filtrarPreventivo(termo) {
    if (!tabelaPreventivo) return;
    
    const tbody = tabelaPreventivo.querySelector('tbody');
    
    if (examesPrevent.length === 0) {
        // Se os dados ainda não foram carregados, aguarda um pouco e tenta novamente
        setTimeout(() => filtrarPreventivo(termo), 100);
        return;
    }
    
    // Se não há termo de busca, mostra todos os exames
    if (!termo || termo.trim() === '') {
        popularTabelaPreventivo(tbody, examesPrevent);
        return;
    }
    
    // Dividir o termo de busca em palavras individuais
    const palavrasBusca = termo.split(/\s+/).filter(palavra => palavra.length > 0);
    
    // Filtra os exames baseado no termo de busca
    const examesFiltrados = examesPrevent.filter(exame => {
        // Cria texto completo para busca (remove acentos de todos os campos)
        const textoCompleto = removerAcentos(`${exame.sigla} ${exame.exame} ${exame.coleta} ${exame.tuss}`.toLowerCase());
        
        // Verifica se TODAS as palavras da busca estão presentes no texto (independente da ordem)
        return palavrasBusca.every(palavra => 
            textoCompleto.includes(removerAcentos(palavra.toLowerCase()))
        );
    });
    
    // Usar função centralizada para popular tabela
    popularTabelaPreventivo(tbody, examesFiltrados);
    
    // Se não encontrou nenhum resultado
    if (examesFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="mensagem-vazia">Nenhum exame preventivo encontrado</td></tr>';
    }
}

/**
 * Função para filtrar exames de cardio baseado no termo de busca
 * @param {string} termo - Termo de busca digitado pelo usuário
 * */
function filtrarCardio(termo) {
    if (!tabelaCardio) return;
    const tbody = tabelaCardio.querySelector('tbody');
    if (examesTodosCardio.length === 0) {
        // Se os dados ainda não foram carregados, aguarda um pouco e tenta novamente
        setTimeout(() => filtrarCardio(termo), 100);
        return;
    }
    // Se não há termo de busca, mostra todos os exames
    if (!termo || termo.trim() === '') {
        popularTabelaCardio(tbody, examesTodosCardio);
        return;
    }
    // Dividir o termo de busca em palavras individuais
    const palavrasBusca = termo.split(/\s+/).filter(palavra => palavra.length > 0);
    // Filtra os exames baseado no termo de busca
    const examesFiltrados = examesTodosCardio.filter(exame => {
        // Cria texto completo para busca (remove acentos de todos os campos)
        const textoCompleto = removerAcentos(`${exame.exame} ${exame.tuss}`.toLowerCase());
        // Verifica se TODAS as palavras da busca estão presentes no texto (independente da ordem)
        return palavrasBusca.every(palavra =>
            textoCompleto.includes(removerAcentos(palavra.toLowerCase()))
        );
    });
    // Usar função centralizada para popular tabela
    popularTabelaCardio(tbody, examesFiltrados);
    // Se não encontrou nenhum resultado
    if (examesFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="2" class="mensagem-vazia">Nenhum exame encontrado</td></tr>';
    }
}

function filtrarUSG(termo) {
    if (!tabelaUSG) return;
    
    const tbody = tabelaUSG.querySelector('tbody');
    
    if (examesTodosUSG.length === 0) {
        // Se os dados ainda não foram carregados, aguarda um pouco e tenta novamente
        setTimeout(() => filtrarUSG(termo), 100);
        return;
    }
    
    // Se não há termo de busca, mostra todos os exames
    if (!termo || termo.trim() === '') {
        popularTabelaUSG(tbody, examesTodosUSG);
        return;
    }
    
    // Dividir o termo de busca em palavras individuais
    const palavrasBusca = termo.split(/\s+/).filter(palavra => palavra.length > 0);
    
    // Filtra os exames baseado no termo de busca
    const examesFiltrados = examesTodosUSG.filter(exame => {
        // Cria texto completo para busca (remove acentos de todos os campos)
        const textoCompleto = removerAcentos(`${exame.exame} ${exame.tuss}`.toLowerCase());
        
        // Verifica se TODAS as palavras da busca estão presentes no texto (independente da ordem)
        return palavrasBusca.every(palavra => 
            textoCompleto.includes(removerAcentos(palavra.toLowerCase()))
        );
    });
    
    // Usar função centralizada para popular tabela
    popularTabelaUSG(tbody, examesFiltrados);
    
    // Se não encontrou nenhum resultado
    if (examesFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="2" class="mensagem-vazia">Nenhum exame encontrado</td></tr>';
    }
}

// ✅ NOVA FUNÇÃO: Filtrar TC (mesma lógica do USG)
function filtrarTC(termo) {
    if (!tabelaTC) return;
    
    const tbody = tabelaTC.querySelector('tbody');
    
    if (examesTodosTC.length === 0) {
        // Se os dados ainda não foram carregados, aguarda um pouco e tenta novamente
        setTimeout(() => filtrarTC(termo), 100);
        return;
    }
    
    // Se não há termo de busca, mostra todos os exames
    if (!termo || termo.trim() === '') {
        popularTabelaTC(tbody, examesTodosTC);
        return;
    }
    
    // Dividir o termo de busca em palavras individuais
    const palavrasBusca = termo.split(/\s+/).filter(palavra => palavra.length > 0);
    
    // Filtra os exames baseado no termo de busca
    const examesFiltrados = examesTodosTC.filter(exame => {
        // Cria texto completo para busca (remove acentos de todos os campos)
        const textoCompleto = removerAcentos(`${exame.exame} ${exame.tuss}`.toLowerCase());
        
        // Verifica se TODAS as palavras da busca estão presentes no texto (independente da ordem)
        return palavrasBusca.every(palavra => 
            textoCompleto.includes(removerAcentos(palavra.toLowerCase()))
        );
    });
    
    // Usar função centralizada para popular tabela
    popularTabelaTC(tbody, examesFiltrados);
    
    // Se não encontrou nenhum resultado
    if (examesFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="2" class="mensagem-vazia">Nenhum exame encontrado</td></tr>';
    }
}

function filtrarCurativos(termo) {
    if (!tabelaCura) return;
    
    const tbody = tabelaCura.querySelector('tbody');
    
    if (curativosTodos.length === 0) {
        // Se os dados ainda não foram carregados, aguarda um pouco e tenta novamente
        setTimeout(() => filtrarCurativos(termo), 100);
        return;
    }
    
    // Se não há termo de busca, mostra todos os curativos
    if (!termo || termo.trim() === '') {
        popularTabelaCurativos(tbody, curativosTodos);
        return;
    }
    
    // Dividir o termo de busca em palavras individuais
    const palavrasBusca = termo.split(/\s+/).filter(palavra => palavra.length > 0);
    
    // Filtra os curativos baseado no termo de busca
    const curativosFiltrados = curativosTodos.filter(curativo => {
        // Cria texto completo para busca (remove acentos de todos os campos)
        const textoCompleto = removerAcentos(`${curativo.convenio} ${curativo.descricao} ${curativo.tuss}`.toLowerCase());
        
        // Verifica se TODAS as palavras da busca estão presentes no texto (independente da ordem)
        return palavrasBusca.every(palavra => 
            textoCompleto.includes(removerAcentos(palavra.toLowerCase()))
        );
    });
    
    // Usar função centralizada para popular tabela
    popularTabelaCurativos(tbody, curativosFiltrados);
    
    // Se não encontrou nenhum resultado
    if (curativosFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="mensagem-vazia">Nenhum curativo encontrado</td></tr>';
    }
}

function configurarBuscaCircurgia306() {
    // Note que usa o mesmo buscador da equipe médica
    if (buscadorCircurgia306) {
        // Adicionar um event listener adicional específico para cirurgia306
        buscadorCircurgia306.addEventListener('input', function() {
            const termoBusca = removerAcentos(this.value.toLowerCase().trim());
            // Verificar se estamos na seção cirurgia306
            const secaoCircurgia306 = document.getElementById('cirurgia306');
            if (secaoCircurgia306 && secaoCircurgia306.style.display !== 'none') {
                filtrarCircurgia306(termoBusca);
            }
        });
    }
}

function carregarTabelaCircurgia306() {
    if (!tabelaCircurgia306) return;
    
    fetch('sala306.json')
        .then(resposta => resposta.json())
        .then(dados => {
            medicosCircurgia306 = dados;
            const tbody = tabelaCircurgia306.querySelector('tbody');
            tbody.innerHTML = '';
            
            dados.forEach(item => {
                const linha = document.createElement("tr");
                linha.classList.add("linha-com-hover");
                
                // CRM
                const celulaCRM = document.createElement('td');
                celulaCRM.classList.add('celula-centralizada');
                celulaCRM.textContent = item.crm;
                
                // MÉDICO
                const celulaMedico = document.createElement('td');
                celulaMedico.textContent = item.medico;
                const botaoMedico = criarBotaoCopiar(item.medico);
                botaoMedico.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
                celulaMedico.appendChild(document.createTextNode(' '));
                celulaMedico.appendChild(botaoMedico);
                
                // ESPECIALIDADE
                const celulaEspecialidade = document.createElement('td');
                celulaEspecialidade.textContent = item.especialidade;
                
                // Montar linha
                linha.appendChild(celulaCRM);
                linha.appendChild(celulaMedico);
                linha.appendChild(celulaEspecialidade);
                
                tbody.appendChild(linha);
            });
        })
        .catch(erro => {
            console.error("Erro ao carregar o arquivo sala306.json:", erro);
            const tbody = tabelaCircurgia306.querySelector('tbody');
            tbody.innerHTML = '<tr><td colspan="3" class="mensagem-erro">Erro ao carregar dados dos médicos da sala 306</td></tr>';
        });
}

function filtrarCircurgia306(termo) {
    if (!tabelaCircurgia306) return;
    
    const tbody = tabelaCircurgia306.querySelector('tbody');
    
    if (medicosCircurgia306.length === 0) {
        setTimeout(() => filtrarCircurgia306(termo), 100);
        return;
    }
    
    // Se o termo estiver vazio, recarrega todos os médicos
    if (!termo || termo.trim() === '') {
        carregarTabelaCircurgia306();
        return;
    }
    
    // Dividir o termo de busca em palavras individuais
    const palavrasBusca = termo.split(/\s+/).filter(palavra => palavra.length > 0);
    
    // Filtra os médicos
    const medicosFiltrados = medicosCircurgia306.filter(item => {
        const crm = removerAcentos(String(item.crm || "").toLowerCase());
        const medico = removerAcentos(String(item.medico || "").toLowerCase());
        const especialidade = removerAcentos(String(item.especialidade || "").toLowerCase());
        
        // Criar texto completo para busca
        const textoCompleto = `${crm} ${medico} ${especialidade}`;
        
        // Verificar se TODAS as palavras estão presentes
        return palavrasBusca.every(palavra => textoCompleto.includes(palavra));
    });
    
    // Limpar tabela e recriar as linhas
    tbody.innerHTML = '';
    
    medicosFiltrados.forEach(item => {
        const linha = document.createElement("tr");
        linha.classList.add("linha-com-hover");
        
        // CRM
        const celulaCRM = document.createElement('td');
        celulaCRM.classList.add('celula-centralizada');
        celulaCRM.textContent = item.crm;
        
        // MÉDICO
        const celulaMedico = document.createElement('td');
        celulaMedico.textContent = item.medico;
        const botaoMedico = criarBotaoCopiar(item.medico);
        botaoMedico.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        celulaMedico.appendChild(document.createTextNode(' '));
        celulaMedico.appendChild(botaoMedico);
        
        // ESPECIALIDADE
        const celulaEspecialidade = document.createElement('td');
        celulaEspecialidade.textContent = item.especialidade;
        
        linha.appendChild(celulaCRM);
        linha.appendChild(celulaMedico);
        linha.appendChild(celulaEspecialidade);
        
        tbody.appendChild(linha);
    });
    
    // Se não encontrou resultados
    if (medicosFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="mensagem-vazia">Nenhum médico encontrado</td></tr>';
    }
}

// Adicione no final do script.js
document.querySelectorAll('.tabela-container').forEach(container => {
  container.addEventListener('scroll', function() {
    if (this.scrollLeft > 0) {
      this.classList.add('scrolled');
    }
  }, { once: true });
});