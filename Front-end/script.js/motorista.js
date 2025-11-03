// Array de motoristas
let motoristas = [];

// Adiciona motorista
function addMotorista(id, nome, cpf) {
    let motorista = { id, nome, cpf };
        motoristas.push(motorista);
            console.log("Motorista adicionado:", motorista);
            }

            // Lista todos os motoristas
            function listarMotoristas() {
                console.table(motoristas);
                }

                // Exemplo
                addMotorista(1, "Carlos", "123.456.789-00");
                addMotorista(2, "Fernanda", "987.654.321-00");
                listarMotoristas();