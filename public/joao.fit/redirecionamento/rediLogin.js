function redirecionarParaHome() {
  window.location.href = "../../index.html"; 
}
function redirecionarParaIMC() {
  window.location.href = "../pages/imc.html"; 
}
function redirecionarParaRegister() {
  window.location.href = "../pages/register.html"; 
}
document.getElementById("homeBtn").addEventListener("click", redirecionarParaHome);
document.getElementById("imcBtn").addEventListener("click", redirecionarParaIMC);
document.getElementById("signupBtn").addEventListener("click", redirecionarParaRegister);

