function obterDadosJSON() {
    return fetch('http://localhost:9093/ItagRFIDMonitor/RetornaTag')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados. Código de status: ' + response.status);
            }
            return response.json();
        });
}

function exibirValores() {
    obterDadosJSON()
        .then(data => {
            const listaValores = document.getElementById('listaValores');
            listaValores.innerHTML = ''; // Limpar a lista antes de adicionar os novos valores

            // Iterar sobre os valores no JSON e adicioná-los à lista
            data.valores.forEach(valor => {
                const itemLista = document.createElement('li');
                itemLista.textContent = valor;
                listaValores.appendChild(itemLista);
            });
        })
        .catch(error => console.error('Erro ao obter os dados JSON:', error));
}

window.onload = exibirValores;
