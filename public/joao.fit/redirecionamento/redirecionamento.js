function redirecionarParaMenu() {
    window.location.href = "pages/menu.html"; 
}

function redirecionarParaIMC() {
    window.location.href = "pages/imc.html"; 
}

function redirecionarParaLogin() {
    window.location.href = "../pages/login.html"; 
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menuBtn").addEventListener("click", redirecionarParaMenu);
    document.getElementById("imcBtn").addEventListener("click", redirecionarParaIMC);
    document.getElementById("loginBtn").addEventListener("click", redirecionarParaLogin);
});
