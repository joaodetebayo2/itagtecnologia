function redirecionarParaHome() {
    window.location.href = "../../index.html"; 
}
function redirecionarParaLogin() {
    window.location.href = "../pages/login.html"; 
}
document.getElementById("homeBtn").addEventListener("click", redirecionarParaHome);
document.getElementById("loginBtn").addEventListener("click", redirecionarParaLogin);

