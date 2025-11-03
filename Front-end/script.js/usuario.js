// Array de usuários
let usuarios = [];

// Adiciona usuário
function addUsuario(id, nome, email) {
    let usuario = { id, nome, email };
        usuarios.push(usuario);
            console.log("Usuário adicionado:", usuario);
            }

            // Lista todos os usuários
            function listarUsuarios() {
                console.table(usuarios);
                }

                // Exemplo
                addUsuario(1, "Hector", "hector@example.com");
                addUsuario(2, "Maria", "maria@example.com");
                listarUsuarios();