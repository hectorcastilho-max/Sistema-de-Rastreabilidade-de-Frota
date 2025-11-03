// Array de linhas
let linhas = [];

// Adiciona linha
function addLinha(id, nome) {
    let linha = { id, nome };
        linhas.push(linha);
            console.log("Linha adicionada:", linha);
            }

            // Lista todas as linhas
            function listarLinhas() {
                console.table(linhas);
                }

                // Exemplo
                addLinha(1, "Linha 1");
                addLinha(2, "Linha 2");
                listarLinhas();