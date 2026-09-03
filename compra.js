document.addEventListener("DOMContentLoaded", () => {
    const gridAssentos = document.getElementById("sala-assentos-grid");
    const resumoAssentos = document.getElementById("resumo-assentos");
    const valorTotalPedido = document.getElementById("valor-total-pedido");
    const inputIdade = document.getElementById("selecao-idade");
    const tipoIngresso = document.getElementById("tipo-ingresso");
    const formCompra = document.getElementById("form-compra-ingressos");
    const selecaoCinema = document.getElementById("selecao-cinema");

    // Elementos da Nova Modal de QR Code
    const modalQR = document.getElementById("modal-ingresso-sucesso");
    const imgQR = document.getElementById("img-codigo-qr");
    const ticketCinema = document.getElementById("ticket-cinema");
    const ticketPoltronas = document.getElementById("ticket-poltronas");
    const ticketValor = document.getElementById("ticket-valor");
    const btnFecharTicket = document.getElementById("btn-fechar-ticket");

    let assentosSelecionados = [];
    const totalAssentos = 48;
    let vendaTemporariaParaImpressao = null; // Guarda os dados para imprimir depois

    const filmeNomeAtual = localStorage.getItem("CinePrime_FilmeAtual") || "Filme Selecionado";

    // 1. Gera as poltronas da sala
    if (gridAssentos) {
        for (let i = 1; i <= totalAssentos; i++) {
            const assento = document.createElement("div");
            assento.classList.add("assento");
            assento.dataset.numero = i;

            if (Math.random() < 0.25) {
                assento.classList.add("ocupado");
            }

            assento.addEventListener("click", () => {
                if (assento.classList.contains("ocupado")) return;
                assento.classList.toggle("selecionado");
                const num = assento.dataset.numero;
                if (assento.classList.contains("selecionado")) {
                    assentosSelecionados.push(num);
                } else {
                    assentosSelecionados = assentosSelecionados.filter(n => n !== num);
                }
                atualizarResumo();
            });
            gridAssentos.appendChild(assento);
        }
    }

    function atualizarResumo() {
        if (!resumoAssentos) return;
        resumoAssentos.innerText = assentosSelecionados.length > 0 ? assentosSelecionados.join(", ") : "Nenhum";
        const precoUnitario = parseFloat(tipoIngresso.value);
        const total = assentosSelecionados.length * precoUnitario;
        valorTotalPedido.innerText = total.toFixed(2).replace(".", ",");
    }

    if (tipoIngresso) tipoIngresso.addEventListener("change", atualizarResumo);
    // 2. Finalizar Compra, Exibir QR Code e Salvar Dados
    if (formCompra) {
        formCompra.addEventListener("submit", (e) => {
            e.preventDefault();

            if (assentosSelecionados.length === 0) {
                alert("Por favor, selecione pelo menos um assento na sala!");
                return;
            }

            const precoUnitario = parseFloat(tipoIngresso.value);
            const totalValor = assentosSelecionados.length * precoUnitario;
            const nomeUsuario = localStorage.getItem("usuarioLogado") || "Cliente Anônimo";

            // Cria o objeto oficial da venda
            vendaTemporariaParaImpressao = {
                cliente: nomeUsuario,
                filme: filmeNomeAtual,
                cinema: selecaoCinema.value,
                idade: inputIdade.value,
                assentos: assentosSelecionados.join(", "),
                total: totalValor,
                data: new Date().toLocaleDateString('pt-BR')
            };

            // CORRIGIDO: Removido o 'JSON.org' antigo que travava o site
            let historicoVendas = JSON.parse(localStorage.getItem("CinePrime_Vendas")) || [];
            historicoVendas.push(vendaTemporariaParaImpressao);
            localStorage.setItem("CinePrime_Vendas", JSON.stringify(historicoVendas));

            // INTEGRAÇÃO: Monta as informações fictícias e gera a imagem do QR Code
            if (modalQR && imgQR) {
                ticketCinema.innerText = vendaTemporariaParaImpressao.cinema;
                ticketPoltronas.innerText = vendaTemporariaParaImpressao.assentos;
                ticketValor.innerText = `R$ ${totalValor.toFixed(2).replace(".", ",")}`;

                // Cria o texto codificado que vai dentro do QR Code
                const textoQR = `CinePrime - Ingressos: ${vendaTemporariaParaImpressao.assentos} | Filme: ${vendaTemporariaParaImpressao.filme} | Cinema: ${vendaTemporariaParaImpressao.cinema}`;
                
                // Puxa a imagem gerada na hora pela URL off-line estável do Google Charts
                imgQR.src = "imagens/qr-code-21342.png"; // Puxa o seu arquivo offline do computador


                // Abre a janela flutuante estilizada roxa
                modalQR.style.display = "flex";
            }
        });
    }

    // 3. Ao fechar o bilhete com QR Code, abre a tela de impressão tradicional
    if (btnFecharTicket) {
        btnFecharTicket.addEventListener("click", () => {
            if (modalQR) modalQR.style.display = "none";
            if (!vendaTemporariaParaImpressao) return;

            // Transforma a tela no cupom térmico para o usuário imprimir
            document.body.innerHTML = `
                <div style="max-width: 600px; margin: 50px auto; background: #fff; color: #000; padding: 30px; border-radius: 10px; border: 3px dashed #7c3aed; font-family: 'Courier New', Courier, monospace; box-shadow: 0 0 20px rgba(0,0,0,0.2);">
                    <h2 style="text-align: center; margin-bottom: 5px; color: #3b0764;">🎟️ CINEPRIME - INGRESSO 🎟️</h2>
                    <p style="text-align: center; font-size: 12px; margin-top: 0; color: #666;">COMPROVANTE OFICIAL DE ENTRADA</p>
                    <hr style="border-top: 2px dashed #000;">
                    <p><strong>CLIENTE:</strong> ${vendaTemporariaParaImpressao.cliente}</p>
                    <p><strong>FILME:</strong> ${vendaTemporariaParaImpressao.filme}</p>
                    <p><strong>LOCAL:</strong> ${vendaTemporariaParaImpressao.cinema}</p>
                    <p><strong>ASSENTOS:</strong> ${vendaTemporariaParaImpressao.assentos}</p>
                    <p><strong>DATA DA COMPRA:</strong> ${vendaTemporariaParaImpressao.data}</p>
                    <hr style="border-top: 2px dashed #000;">
                    <h3 style="text-align: right; margin: 20px 0 0 0;">TOTAL PAGO: R$ ${vendaTemporariaParaImpressao.total.toFixed(2).replace(".", ",")}</h3>
                    <div style="display: flex; gap: 15px; margin-top: 30px;" class="no-print">
                        <button onclick="window.print()" style="flex: 1; padding: 12px; background: #6d28d9; color: white; border: none; font-weight: bold; border-radius: 5px; cursor: pointer;">🖨️ Imprimir Ingresso</button>
                        <button onclick="window.location.href='index.html'" style="flex: 1; padding: 12px; background: #333; color: white; border: none; font-weight: bold; border-radius: 5px; cursor: pointer;">Voltar ao Site</button>
                    </div>
                </div>
                <style>
                    @media print { .no-print { display: none !important; } body { background: white !important; } }
                </style>
            `;
        });
    }

    // 4. Monitorador automático do Modal de detalhes da Home
    setInterval(() => {
        const modalInfo = document.getElementById('booking-modal');
        const titleEl = document.getElementById('info-title');
        const containerCinemas = document.getElementById('cinemas-list-container');
        
        if (modalInfo && modalInfo.style.display === 'flex' && titleEl) {
            localStorage.setItem("CinePrime_FilmeAtual", titleEl.innerText);

            if (!document.getElementById('btn-ir-para-compra')) {
                const btnCompra = document.createElement('button');
                btnCompra.id = 'btn-ir-para-compra';
                btnCompra.innerText = '🎟️ Avançar para Seleção de Poltronas';
                btnCompra.style.width = '100%';
                btnCompra.style.padding = '15px';
                btnCompra.style.marginTop = '20px';
                btnCompra.style.background = 'linear-gradient(90deg, #3b0764, #6d28d9)';
                btnCompra.style.color = '#ffffff';
                btnCompra.style.border = '1px solid #7c3aed';
                btnCompra.style.borderRadius = '8px';
                btnCompra.style.fontWeight = 'bold';
                btnCompra.style.fontSize = '16px';
                btnCompra.style.cursor = 'pointer';
                
                btnCompra.onclick = () => { window.location.href = "compra.html"; };
                if (containerCinemas) containerCinemas.after(btnCompra);
            }
        }
    }, 300);
});
