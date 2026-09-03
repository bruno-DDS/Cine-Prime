// =================================================================
// CONTROLE DO PORTAL CINEPRIME - INDEX / INTERAÇÕES
// =================================================================

// 1. Seleção dos elementos principais da tela
const btnAbrirLogin = document.getElementById("open-login"); // CORRIGIDO: Agora seleciona o botão roxo da direita
const modalLogin = document.getElementById("modalLogin"); // Substitua pelo ID real da sua janela de login se for diferente
const formulario = document.getElementById("meuFormulario");
const campoNome = document.getElementById("campoNome");
const campoCelular = document.getElementById("campoCelular");

document.addEventListener("DOMContentLoaded", () => {
    
    // Configura a máscara do celular se o campo existir na tela
    if (campoCelular) {
        campoCelular.addEventListener("input", (e) => {
            // A lógica de input do celular continua aqui...
        });
    }

    // 2. Abre a janela de login ao clicar no botão "Fazer Login" da direita
    if (btnAbrirLogin && modalLogin) {
        btnAbrirLogin.addEventListener("click", () => {
            modalLogin.style.display = "flex"; // Abre a janelinha na tela
        });
    }

    // 3. Salva o nome e fecha a janela na hora do envio
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            
            if (campoNome && campoNome.value.trim() !== "") {
                const nome = campoNome.value.trim();
                localStorage.setItem("usuarioLogado", nome);
                
                // Atualiza o texto do botão roxo da direita para o nome do usuário
                if (btnAbrirLogin) {
                    btnAbrirLogin.innerText = `Olá, ${nome.split(' ')[0]}`;
                    btnAbrirLogin.style.backgroundColor = "#00b4d8"; // Muda a cor para indicar que está logado
                }
                
                alert(`🎉 Conta criada com sucesso!\nSeja bem-vindo, ${nome}!`);
                if (modalLogin) modalLogin.style.display = "none";
            }
        });
    }

    // 4. Botão do Google
    const btnGoogle = document.getElementById("btn-google");
    if (btnGoogle) { // CORRIGIDO: Mudado de 'it' para 'if' para corrigir o erro de sintaxe
        btnGoogle.addEventListener("click", () => {
            localStorage.setItem("usuarioLogado", "Usuário Google");
            
            // Atualiza o texto do botão roxo da direita para o usuário do Google
            if (btnAbrirLogin) {
                btnAbrirLogin.innerText = "Olá, Google";
                btnAbrirLogin.style.backgroundColor = "#00b4d8";
            }
            
            if (modalLogin) modalLogin.style.display = "none";
        });
    }
});
