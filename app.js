// =================================================================
// LÓGICA PRINCIPAL DO PORTAL CINEPRIME - TOTALMENTE OFF-LINE
// =================================================================

function renderizarCatalogo(generoFiltro = "todos") {
    // Pega a lista de filmes nativos da API_CINE_PRIME (dados.js)
    let emCartazLista = [...API_CINE_PRIME.EmCartaz];
    let emBreveLista = [...API_CINE_PRIME.EmBreve];
    let emAltaLista = [...API_CINE_PRIME.EmAlta];

    // Pega os filmes novos cadastrados pelo Painel Administrativo no localStorage
    const filmesCadastradosPainel = JSON.parse(localStorage.getItem("CinePrime_FilmesNovos")) || [];

    // Junta os filmes novos do painel nas suas respectivas listas
    filmesCadastradosPainel.forEach(item => {
        if (item.secao === "EmCartaz") emCartazLista.unshift(item.dados);
        if (item.secao === "EmBreve") emBreveLista.unshift(item.dados);
        if (item.secao === "EmAlta")  emAltaLista.unshift(item.dados);
    });

    const sessoes = [
        { lista: emCartazLista, id: "grid-em-cartaz", sectionId: "section-em-cartaz" },
        { lista: emBreveLista, id: "grid-em-breve", sectionId: "section-em-breve" },
        { lista: emAltaLista, id: "grid-em-alta", sectionId: "section-em-alta" }
    ];

    sessoes.forEach(sessao => {
        const container = document.getElementById(sessao.id);
        const sectionElement = document.getElementById(sessao.sectionId);
        if (!container) return;

        container.innerHTML = '';

        const filmesFiltrados = sessao.lista.filter(filme => {
            if (generoFiltro === "todos") return true;
            return filme.genre.toLowerCase().includes(generoFiltro.toLowerCase());
        });

        if (filmesFiltrados.length === 0) {
            if (sectionElement) sectionElement.style.display = "none";
        } else {
            if (sectionElement) sectionElement.style.display = "block";
            
            filmesFiltrados.forEach(filme => {
                const card = document.createElement('div');
                card.classList.add('movie-card');

                const imagemSrc = filme.poster ? `<img src="${filme.poster}" alt="${filme.title}">` : `<div class="movie-poster">🎬 IMAGEM<br>${filme.title}</div>`;

                card.innerHTML = `
                    ${imagemSrc}
                    <div class="movie-info">
                        <h3>${filme.title}</h3>
                        <span class="tag-classificacao">${filme.genre.split(',')}</span>
                        <button class="btn-comprar">Ver Detalhes</button>
                    </div>
                `;
                
                card.querySelector('.btn-comprar').addEventListener('click', () => abrirDetalhesDoFilme(filme));
                container.appendChild(card);
            });
        }
    });
}

const modalInfo = document.getElementById('booking-modal');
const containerCinemas = document.getElementById('cinemas-list-container');

// FUNÇÃO DE DETALHES ADAPTADA PARA CONTROLAR VÍDEO LOCAL (.MP4)
function abrirDetalhesDoFilme(filme) {
    document.getElementById('info-title').innerText = filme.title;
    document.getElementById('info-genre').innerText = filme.genre;
    document.getElementById('info-runtime').innerText = filme.runtime;
    document.getElementById('info-rating').innerText = filme.imdbRating;
    document.getElementById('info-director').innerText = filme.director;
    document.getElementById('info-actors').innerText = filme.actors;
    document.getElementById('info-plot').innerText = filme.plot;

    const btnVerTrailer = document.getElementById('btn-ver-trailer');
    const trailerContainer = document.getElementById('trailer-container');
    const videoTrailer = document.getElementById('video-trailer');

    if (trailerContainer && videoTrailer && btnVerTrailer) {
        trailerContainer.style.display = 'none';
        videoTrailer.pause();
        videoTrailer.src = '';
        btnVerTrailer.innerText = '🎬 Ver Trailer Oficial';

        btnVerTrailer.onclick = () => {
            if (trailerContainer.style.display === 'none') {
                if (filme.trailerUrl) {
                    videoTrailer.src = filme.trailerUrl;
                    trailerContainer.style.display = 'block';
                    videoTrailer.play();
                    btnVerTrailer.innerText = '❌ Fechar Trailer';
                } else {
                    alert('Trailer indisponível para este filme.');
                }
            } else {
                trailerContainer.style.display = 'none';
                videoTrailer.pause();
                videoTrailer.src = '';
                btnVerTrailer.innerText = '🎬 Ver Trailer Oficial';
            }
        };
    }

    containerCinemas.innerHTML = '';
    filme.cinemas.forEach(cine => {
        const row = document.createElement('div');
        row.classList.add('cinema-row-item');
        row.innerHTML = `
            <div>
                <div class="cinema-name">${cine.local}</div>
                <div class="cinema-hours">Horários: ${cine.horarios}</div>
            </div>
            <div class="cinema-price">${cine.preco}</div>
        `;
        containerCinemas.appendChild(row);
    });

    modalInfo.style.display = 'flex';
}

// INICIALIZADOR DO SITE
document.addEventListener("DOMContentLoaded", () => {
    // 1. Carrega todos os filmes na tela inicial
    renderizarCatalogo("todos");

        // 🌟 CORREÇÃO: Limpa, pausa e destrói o vídeo antigo ao clicar no (X) para não travar o próximo filme
    const btnFechar = document.getElementById('close-cinema');
    const videoTrailer = document.getElementById('video-trailer');
    
    if (btnFechar) {
        btnFechar.addEventListener('click', () => {
            if (videoTrailer) {
                videoTrailer.pause(); // Para o som do filme imediatamente
                videoTrailer.src = ''; // Apaga o caminho do vídeo antigo da memória
                videoTrailer.load(); // Força o navegador a resetar o player
            }
            
            // Esconde o container do trailer e fecha a janela inteira
            const trailerContainer = document.getElementById('trailer-container');
            if (trailerContainer) trailerContainer.style.display = 'none';
            if (modalInfo) modalInfo.style.display = 'none';
        });
    }


    // =====================================================
    // CONTROLE INTEGRADO DA JANELA DE LOGIN
    // =====================================================
    const modalLogin = document.getElementById("login-modal");
    const btnAbrirLogin = document.getElementById("open-login");
    const btnFecharLogin = document.getElementById("close-login");

    const abaEntrar = document.getElementById("aba-entrar");
    const abaCadastro = document.getElementById("aba-cadastro");
    const formLogin = document.getElementById("form-login");
    const formCadastro = document.getElementById("form-cadastro");

    // Checa se o usuário já fez login antes ao carregar a página
    const usuarioSalvo = localStorage.getItem("usuarioLogado");
    if (usuarioSalvo && btnAbrirLogin) {
        btnAbrirLogin.innerText = `Olá, ${usuarioSalvo.split(' ')[0]}`;
        btnAbrirLogin.style.backgroundColor = "#00b4d8"; 
    }

    if (btnAbrirLogin && modalLogin) {
        btnAbrirLogin.addEventListener("click", () => modalLogin.style.display = "flex");
    }
    if (btnFecharLogin && modalLogin) {
        btnFecharLogin.addEventListener("click", () => modalLogin.style.display = "none");
    }

    if (abaEntrar && abaCadastro && formLogin && formCadastro) {
        abaEntrar.addEventListener("click", () => {
            abaEntrar.classList.add("active");
            abaCadastro.classList.remove("active");
            formLogin.style.display = "flex";
            formCadastro.style.display = "none";
        });

        abaCadastro.addEventListener("click", () => {
            abaCadastro.classList.add("active");
            abaEntrar.classList.remove("active");
            formCadastro.style.display = "flex";
            formLogin.style.display = "none";
        });
    }

    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            const usuarioInput = document.getElementById('login-usuario').value.trim();
            const senhaInput = document.getElementById('login-senha').value;

            if (usuarioInput.toLowerCase() === 'adm' && senhaInput === '123') {
                localStorage.setItem("usuarioLogado", "Administrador");
                alert("🔓 Acesso ADM liberado! Redirecionando para o painel...");
                window.location.href = "painel-adm.html";
                return;
            }

            const usuariosCadastrados = JSON.parse(localStorage.getItem("CinePrime_Contas")) || [];
            const contaEncontrada = usuariosCadastrados.find(u => u.usuario.toLowerCase() === usuarioInput.toLowerCase() && u.senha === senhaInput);

            if (contaEncontrada) {
                localStorage.setItem("usuarioLogado", contaEncontrada.nome);
                if (btnAbrirLogin) {
                    btnAbrirLogin.innerText = `Olá, ${contaEncontrada.nome.split(' ')[0]}`;
                    btnAbrirLogin.style.backgroundColor = "#00b4d8";
                }
                alert(`🍿 Bem-vindo de volta, ${contaEncontrada.nome.split(' ')[0]}!`);
                modalLogin.style.display = "none";
            } else {
                alert("❌ Usuário ou senha incorretos! Tente novamente.");
            }
        });
    }

    if (formCadastro) {
        formCadastro.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('cad-nome').value.trim();
            const usuario = document.getElementById('cad-usuario').value.trim();
            const senha = document.getElementById('cad-senha').value;

            if (usuario.toLowerCase() === 'adm') {
                alert("⚠ Este nome de usuário é reservado ao sistema!");
                return;
            }

            let usuariosCadastrados = JSON.parse(localStorage.getItem("CinePrime_Contas")) || [];
            const usuarioJaExiste = usuariosCadastrados.some(u => u.usuario.toLowerCase() === usuario.toLowerCase());
            if (usuarioJaExiste) {
                alert("❌ Este nome de usuário já está sendo usado!");
                return;
            }

            const agora = new Date();
            const dataCadastro = `${agora.toLocaleDateString('pt-BR')} às ${agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;

            usuariosCadastrados.push({ nome, usuario, senha, cadastradoEm: dataCadastro });
            localStorage.setItem("CinePrime_Contas", JSON.stringify(usuariosCadastrados));
            
            localStorage.setItem("usuarioLogado", nome);
            if (btnAbrirLogin) {
                btnAbrirLogin.innerText = `Olá, ${nome.split(' ')[0]}`;
                btnAbrirLogin.style.backgroundColor = "#00b4d8";
            }

            alert(`🎉 Conta criada com sucesso!\nSeja bem-vindo, ${nome}!`);
            modalLogin.style.display = "none";
        });
    }
});
