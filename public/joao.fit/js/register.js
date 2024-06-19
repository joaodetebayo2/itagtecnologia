document.addEventListener('DOMContentLoaded', function () {
    const signupBtn = document.getElementById('signupBtn');
    signupBtn.addEventListener('click', register);
});

async function register() {
    const email = document.getElementById('emailBtn').value;
    const password = document.getElementById('passwordBtn').value;
    const confirmPassword = document.getElementById('confirmpassBtn').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, confirme sua senha corretamente.");
        return;
    }

    try {
        // Recuperar os usuários do Replit Object Storage
        const response = await fetch(`https://kv.replit.com/v0/replit-objstore-09db0986-ac65-499a-9162-e908eeb63634/users`);
        const users = await response.json();

        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert("Este email já está registrado.");
        } else {
            users.push({ email, password });
            // Salvar os usuários atualizados no Replit Object Storage
            await fetch(`https://kv.replit.com/v0/replit-objstore-09db0986-ac65-499a-9162-e908eeb63634/users`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(users)
            });
            alert("Registro realizado com sucesso.");
        }
    } catch (error) {
        console.error('Erro:', error);
        alert("Erro ao registrar.");
    }
}
