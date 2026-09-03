// Direciona os links do menu do topo para as novas telas HTML isoladas
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura os links de navegação dentro do header do site
    const linksDoMenu = document.querySelectorAll('header a, .header a, .navbar a, nav a');

    linksDoMenu.forEach(link => {
        const textoLink = link.innerText.trim().toLowerCase();

        // Faz o redirecionamento limpo para cada arquivo criado
        if (textoLink === "filmes") {
            link.setAttribute("href", "index.html#section-em-cartaz");
        } 
        else if (textoLink === "cinemas") {
            link.setAttribute("href", "cinemas.html");
        } 
        else if (textoLink === "preços") {
            link.setAttribute("href", "precos.html");
        } 
        else if (textoLink === "promoções") {
            link.setAttribute("href", "promocoes.html");
        }
    });
});

