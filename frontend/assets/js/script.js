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
        messageError('Sucesso', 'Veículo cadastrado com sucesso!');
      } else {
        messageError('Erro Interno', 'Erro interno do servidor. <br> Veículo não cadastrado!');
      }

    } catch (error) {
      messageError('Erro Interno', 'Erro interno do servidor. <br> Veículo não cadastrado!');
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
      } else {
        messageError('Erro Interno', 'Erro interno do servidor. <br> Não foi possível atualizar a lista!');
      }

    } catch (error) {
      messageError('Erro Interno', 'Erro interno do servidor. <br> Não foi possível atualizar a lista!');
    }
  });
});
