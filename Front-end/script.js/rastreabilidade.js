// Array de rastreabilidade
let rastreabilidade = [];

// Adiciona registro de rastreabilidade
function addRastreabilidade(id, onibusId, motoristaId, rotaId, timestamp) {
    let registro = { id, onibusId, motoristaId, rotaId, timestamp };
        rastreabilidade.push(registro);
            console.log("Registro de rastreabilidade adicionado:", registro);
            }

            // Lista todos os registros
            function listarRastreabilidade() {
                console.table(rastreabilidade);
                }

                // Exemplo
                addRastreabilidade(1, 1, 1, 1, new Date().toLocaleString());
                addRastreabilidade(2, 2, 2, 2, new Date().toLocaleString());
                listarRastreabilidade();