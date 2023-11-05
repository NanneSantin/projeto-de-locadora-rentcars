export function updateTable(data) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    data.forEach(vehicle => {
        const row = createTableRow(vehicle);
        tbody.appendChild(row);
    });
}

function createTableRow(vehicle) {
    const row = document.createElement('tr');

    const fields = ['locadora', 'modelo', 'marca', 'ano', 'portas', 'cambio', 'ar_condicionado'];

    fields.forEach(field => {
        const cell = document.createElement('td');
        if (field === 'ar_condicionado') {
            cell.textContent = vehicle.ar_condicionado ? 'Sim' : 'Não';
        } else {
            cell.textContent = vehicle[field];
        }

        row.appendChild(cell);
    });

    const actionsCell = document.createElement('td');
    const detalharButton = createButton('Detalhar', () => detailVehicle(vehicle));
    const deletarButton = createButton('Deletar', () => removeVehicle(vehicle.id));

    actionsCell.appendChild(detalharButton);
    actionsCell.appendChild(deletarButton);
    row.appendChild(actionsCell);

    row.setAttribute('vehicle-id', vehicle.id);
    return row;
}

function createButton(label, clickHandler) {
    const button = document.createElement('button');
    button.textContent = label;
    button.classList.add('botao-tabela');
    button.addEventListener('click', clickHandler);
    return button;
}

async function removeVehicle(vehicleId) {
    try {
        const response = await fetch(`http://localhost:3000/veiculos/${vehicleId}`, { method: 'DELETE' });

        if (response.status === 204) {
            messageError('Sucesso', 'Veículo removido com sucesso!');
        } else {
            messageError('Erro Interno', 'Erro interno do servidor. <br> Não foi possível detalhar este veículo!');
        }
    } catch (error) {
        messageError('Erro Interno', 'Erro interno do servidor. <br> Não foi possível detalhar este veículo!');
    }
}

function detailVehicle(data) {
    const popup = window.open('', 'Popup', 'width=500,height=450');

    fetch('./assets/html/detailTemplate.html').then(response => response.text()).then(html => {
        const htmlComValores = html
            .replace('{{id}}', data.id)
            .replace('{{locadora}}', data.locadora)
            .replace('{{modelo}}', data.modelo)
            .replace('{{locadora}}', data.locadora)
            .replace('{{modelo}}', data.modelo)
            .replace('{{marca}}', data.marca)
            .replace('{{motor}}', data.motor)
            .replace('{{ar}}', (data.ar_condicionado ? 'SIM' : 'NÃO'))
            .replace('{{cambio}}', data.cambio)
            .replace('{{portas}}', data.portas)
            .replace('{{ano}}', data.ano);

        popup.document.write(htmlComValores);
    })
}

export function messageError(titulo, mensagem) {
    const popup = window.open('', 'Popup', 'width=400,height=200');
    fetch('./assets/html/popupTemplate.html')
        .then(response => response.text())
        .then(html => {
            const htmlComValores = html.replace('{{titulo}}', titulo).replace('{{mensagem}}', mensagem);
            popup.document.write(htmlComValores);
        });
}
