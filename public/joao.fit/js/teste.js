document.addEventListener("DOMContentLoaded", function() {
    const botaoLogin = document.getElementById("aBtn");
    const resultadoDiv = document.getElementById("message");

    botaoLogin.addEventListener('click', function(event) {
        event.preventDefault();

        const url = 'https://api.joao.fit/login';

        let _data = {
            email: document.getElementById("emailBtn").value,
            password: document.getElementById("passwordBtn").value
        };

        fetch(url, {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": "Basic " + btoa("joao:1234")  
              }

        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ');
            }
            return response.json();
        })
        .then(json => {
            if (json.message === 'Login autorizado') {
                resultadoDiv.innerText = 'Login Autorizado';
                
                resultadoDiv.classList.add('resultadoVisivel'); 
                setTimeout(() => {
                    window.location.href = '../pages/menu.html'; 
                }, 2000);
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
