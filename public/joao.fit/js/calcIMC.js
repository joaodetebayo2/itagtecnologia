document.addEventListener('DOMContentLoaded', function() {
    const botaoLogin = document.getElementById('aBtn');
    const resultadoDiv = document.getElementById('message');

    botaoLogin.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Botão clicado');

        const url = 'https://api.joao.fit/login';

        let _data = {
            email: document.getElementById('emailBtn').value,
            password: document.getElementById('passwordBtn').value
        };

        console.log('Dados a serem enviados:', _data);

        // Mostrar mensagem de processamento
        resultadoDiv.innerText = 'Processando...';

        fetch(url, {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(response => {
            console.log('Resposta recebida:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(json => {
            console.log('Resposta JSON:', json);
            if (json.message === 'Login autorizado') {
                resultadoDiv.innerText = 'Login autorizado';
                // Redirecionar após 5 segundos
                setTimeout(() => {
                    window.location.href = '../pages/menu.html'; // Redireciona para a página de sucesso
                }, 5000);
            } else {
                resultadoDiv.innerText = 'Login falhou: ' + json.error;
            }
        })
        .catch(err => {
            console.error('Erro durante a solicitação:', err);
            resultadoDiv.innerText = 'Erro durante a solicitação: ' + err.message;
        });
    });
});
