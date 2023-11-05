import { messageError, updateTable } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('vehicle-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/veiculos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locadora: document.getElementById('locadora').value.toUpperCase(),
          modelo: document.getElementById('modelo').value.toUpperCase(),
          marca: document.getElementById('marca').value.toUpperCase(),
          ano: document.getElementById('ano').value,
          motor: document.getElementById('motor').value.toUpperCase(),
          portas: document.getElementById('portas').value,
          cambio: document.getElementById('cambio').value.toUpperCase(),
          ar_condicionado: document.querySelector('input[name="ar_condicionado"]:checked').value
        }),
      });

      if (response.status === 201) {

        const titulo = 'Sucesso';
        const mensagem = 'Veículo cadastrado com sucesso!'

        messageError(titulo, mensagem);
      }
    } catch (error) {
      const titulo = 'Erro Interno';
      const mensagem = 'Erro interno do servidor. <br> Veículo não cadastrado!'

      messageError(titulo, mensagem);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const updateListButton = document.getElementById('update-list-button');

  updateListButton.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/veiculos', {
        method: 'GET',
      });

      if (response.status === 200) {
        const data = await response.json();
        updateTable(data);
      }
    } catch (error) {
      const titulo = 'Erro Interno';
      const mensagem = 'Erro interno do servidor. <br> Não foi possível atualizar a lista!'

      messageError(titulo, mensagem);
    }
  });
});