import { auth } from 'autent.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('message').textContent = 'Login bem-sucedido!';
            // Aqui você pode redirecionar o usuário para outra página ou realizar outras ações
        })
        .catch((error) => {
            document.getElementById('message').textContent = error.message;
        });
});

document.getElementById('signupBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('message').textContent = 'Usuário registrado com sucesso!';
            // Aqui você pode redirecionar o usuário para outra página ou realizar outras ações
        })
        .catch((error) => {
            document.getElementById('message').textContent = error.message;
        });
});
