const containerMotoristas = document.getElementById('listaMotoristas');

fetch('http://localhost:3000/motoristas')
  .then(res => res.json())
  .then(data => {
    data.forEach(m => {
      const div = document.createElement('div');
      div.classList.add('list-item');
      div.textContent = `${m.nome} - ${m.cpf} - ${m.status}`;
      containerMotoristas.appendChild(div);
    });
  })
  .catch(err => console.error('Erro ao carregar motoristas:', err));