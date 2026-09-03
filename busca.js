// Lógica de Busca Instantânea para o Portal CinePrime
document.addEventListener("DOMContentLoaded", () => {
    const inputBusca = document.getElementById("input-busca-filme");

    if (inputBusca) {
        inputBusca.addEventListener("input", (e) => {
            // Pega o texto digitado e transforma em letras minúsculas
            const termoBusca = e.target.value.toLowerCase().trim();
            
            // Encontra todos os cards de filmes criados na tela pelo seu app.js
            const cardsFilmes = document.querySelectorAll(".movie-card");

            cardsFilmes.forEach(card => {
                // Procura pelo título do filme dentro da tag h3 do card
                const tagTitulo = card.querySelector("h3");
                
                if (tagTitulo) {
                    const tituloFilme = tagTitulo.innerText.toLowerCase();

                    // Se o filme contiver as letras digitadas, ele continua aparecendo.
                    // Se não tiver, ele é escondido na hora (display: none).
                    if (tituloFilme.includes(termoBusca)) {
                        card.style.display = ""; // Volta ao padrão do seu CSS (flex/block)
                    } else {
                        card.style.display = "none"; // Esconde o card
                    }
                }
            });
        });
    }
});
