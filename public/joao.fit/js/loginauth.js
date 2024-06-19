
import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.getElementById('signupBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Usuário cadastrado:', userCredential.user);
            document.getElementById('message').textContent = 'Usuário cadastrado com sucesso!';
        })
        .catch((error) => {
            console.error('Erro ao cadastrar:', error);
            document.getElementById('message').textContent = 'Erro ao cadastrar: ' + error.message;
        });
});

document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Usuário logado:', userCredential.user);
            document.getElementById('message').textContent = 'Usuário logado com sucesso!';
        })
        .catch((error) => {
            console.error('Erro ao logar:', error);
            document.getElementById('message').textContent = 'Erro ao logar: ' + error.message;
        });
});
