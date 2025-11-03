// Array de ônibus
let onibus = [];

// Adiciona ônibus
function addOnibus(id, placa, motoristaId) {
    let bus = { id, placa, motoristaId };
        onibus.push(bus);
            console.log("Ônibus adicionado:", bus);
            }

            // Lista todos os ônibus
            function listarOnibus() {
                console.table(onibus);
                }

                // Exemplo
                addOnibus(1, "ABC-1234", 1);
                addOnibus(2, "XYZ-5678", 2);
                listarOnibus();