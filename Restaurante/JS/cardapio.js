$(document).ready(function() {
    let itensSelecionados = [];
    let total = 0;
    let pedidos = [];
    let numComanda = 1; 

    function atualizarPedido() {
        $("#itens-selecionados").empty();
        total = 0;
        itensSelecionados.forEach(function(item, index) {
            let li = $("<li>").text(item.comida + " - R$" + item.preco.toFixed(2) + "  ");
            let botaoRemover = $("<button>").text("Remover").addClass("btn-remover").addClass("btn1").data("index", index);
            li.append(botaoRemover);
            $("#itens-selecionados").append(li);
            total += item.preco;
        });
        $("#total").text(total.toFixed(2));
        $("#comanda").text(numComanda); // Atualiza o número da comanda na interface
    }

    function fecharComanda() {
        // Adicionar o pedido atual à lista de pedidos
        pedidos.push({
            comanda: numComanda,
            itens: itensSelecionados.slice(),
            total: total
        });

        // Limpar itensSelecionados e atualizar a interface
        itensSelecionados = [];
        atualizarPedido();
        numComanda++; 

        atualizarTotalComandas();
    }

    function atualizarTotalComandas() {
        let totalComandas = pedidos.reduce(function(acc, pedido) {
            return acc + pedido.total;
        }, 0);
        $("#total-comandas").text(totalComandas.toFixed(2));
    }

    function gerarComprovanteXML(gerarArquivo) {
        let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n<comprovante>\n';

        // Adicionar cada pedido ao XML
        pedidos.forEach(function(pedido, index) {
            xmlString += '\t<pedido>\n';
            xmlString += '\t\t<comanda>' + pedido.comanda + '</comanda>\n';
            pedido.itens.forEach(function(item) {
                xmlString += '\t\t<item>\n';
                xmlString += '\t<comida>' + item.comida + '</comida>\n';
                xmlString += '\t<preco>' + item.preco.toFixed(2) + '</preco>\n';
                xmlString += '\t\t</item>\n';
            });
            xmlString += '\t\t<total>' + pedido.total.toFixed(2) + '</total>\n';
            xmlString += '\t</pedido>\n';
        });

        xmlString += '</comprovante>';

        if (gerarArquivo) {
            // Gerar o arquivo XML
            let blob = new Blob([xmlString], { type: 'text/xml' });
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = 'comprovante_total.xml';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } else {
            // Mostrar o comprovante na tela
            $("#comprovante-text").text(xmlString);
            $("#download-comprovante").show(); // Mostra o botão de download
            $("#comprovante").show();
        }
    }

    function adicionarItem(nome, preco) {
        itensSelecionados.push({
            comida: nome,
            preco: preco
        });
        atualizarPedido();
    }

    // Evento de clique no botão para adicionar item
    $("#adicionar-item button").click(function(event) {
        event.preventDefault(); // Impede o envio do formulário

        let nome = $("#nome").val();
        let preco = parseFloat($("#preco").val().replace(",", ".")); // Trata o preço como número decimal

        // Verifica se o nome e o preço foram informados
        if (nome && preco && preco > 0) {
            adicionarItem(nome, preco);

            // Limpa os campos do formulário
            $("#nome").val("");
            $("#preco").val("");
        } else {
            alert("Por favor, informe um nome e um preço válido para o item.");
        }
    });

    // Evento de clique no botão de fechar comanda
    $("#fechar-comanda").click(function() {
        fecharComanda();
    });

    // Evento de clique no botão de gerar comprovante
    $("#gerar-comprovante").click(function() {
        gerarComprovanteXML();
    });

    // Função para tratar o clique no botão de remover item
    $(document).on("click", ".btn-remover", function() {
        let index = $(this).data("index");
        itensSelecionados.splice(index, 1);
        atualizarPedido();
    });

    // Carregar o cardápio do arquivo JSON
    $.getJSON('cardapio.json', function(data) {
        let produtos = data.CATALOG.PRODUTOS;

        produtos.forEach(function(produto) {
            let tr = $("<tr>");
            let categorias = $("<td>").html(produto.CATEGORIAS);
            let comidas = $("<td>").html(produto.COMIDAS);
            let precos = $("<td>").html(produto.PRECOS);
            let botaoAdicionar = $("<td>").html("<i class='fas fa-plus'></i>").addClass("btn-add");

            tr.append(categorias);
            tr.append(comidas);
            tr.append(precos);
            tr.append(botaoAdicionar);

            switch (produto.CATEGORIAS) {
                case "Salgados":
                    $("#table-salgados").append(tr);
                    break;
                case "Doces":
                    $("#table-doces").append(tr);
                    break;
                case "Bebidas":
                    $("#table-bebidas").append(tr);
                    break;
                default:
                    console.log("Categoria não reconhecida: " + produto.CATEGORIAS);
            }

            botaoAdicionar.click(function() {
                let precoNumerico = parseFloat(produto.PRECOS.replace("R$", "").replace(",", "."));
                adicionarItem(produto.COMIDAS, precoNumerico);
            });
        });
    })
    .fail(function(jqxhr, textStatus, error) {
        console.log("Request Failed: " + textStatus + ", " + error);
    });

    // Adiciona um evento de clique ao botão de download
    $("#download-comprovante").click(function() {
        gerarComprovanteXML(true);
    });
});
