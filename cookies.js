document.addEventListener("DOMContentLoaded", () => {
    // 1. Verifica se o usuário já aceitou os cookies anteriormente
    if (localStorage.getItem("cookiesAceitos") === "true") {
        return; // Se já aceitou, interrompe o código aqui e não cria o banner
    }

    // 2. Criar o elemento do HTML via código para o banner aparecer
    const divCookies = document.createElement("div");
    divCookies.classList.add("caixa-cookies");
    divCookies.id = "banner-cookies-portal";

    divCookies.innerHTML = `
        <p class="cookies-texto">
            Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência no 
            <strong>CinePrime</strong>, personalizar anúncios e recomendar filmes. Ao continuar navegando, 
            você concorda com a nossa <a href="privacidade.html">Política de Privacidade</a>.
        </p>
        <button class="btn-aceitar-cookies" id="btn-entendi-cookies">Aceitar e Continuar</button>
    `;

    // Coloca o aviso dentro da página
    document.body.appendChild(divCookies);

    // 3. Sobe o aviso com efeito chique 1 segundo após o site carregar
    setTimeout(() => {
        divCookies.classList.add("mostrar");
    }, 1000);

    // 4. Quando clicar em aceitar, salva no navegador e fecha na tela
    document.getElementById("btn-entendi-cookies").addEventListener("click", () => {
        // Grava no navegador que o usuário aceitou
        localStorage.setItem("cookiesAceitos", "true");

        divCookies.classList.remove("mostrar");
        setTimeout(() => {
            divCookies.remove();
        }, 500);
    });
});
