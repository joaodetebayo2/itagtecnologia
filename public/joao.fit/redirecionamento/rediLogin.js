function redirecionarParaHome() {
  window.location.href = "../../index.html"; 
}
function redirecionarParaIMC() {
  window.location.href = "../pages/imc.html"; 
}
document.getElementById("homeBtn").addEventListener("click", redirecionarParaHome);
document.getElementById("imcBtn").addEventListener("click", redirecionarParaIMC);

