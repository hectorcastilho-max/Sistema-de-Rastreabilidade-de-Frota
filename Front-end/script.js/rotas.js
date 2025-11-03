// Array de rotas
let rotas = [];

// Adiciona rota
function addRota(id, linhaId, origem, destino) {
    let rota = { id, linhaId, origem, destino };
    rotas.push(rota);
    console.log("Rota adicionada:", rota);
}

// Lista todas as rotas
function listarRotas() {
    console.table(rotas);
}

// Exemplo
addRota(1, 1, "Barueri", "Osasco");
addRota(2, 2, "São Paulo", "Santana");
listarRotas();