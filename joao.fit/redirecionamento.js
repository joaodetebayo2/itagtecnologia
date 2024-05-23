
function redirecionarParaMenu() {
    window.location.href = "/pages/menu.html"; 
}


function redirecionarParaIMC() {
    window.location.href = "../pages/imc.html"; 
}

function redirecionarParaInfo() {
    window.location.href = "/pages/info.html"; 
}

document.getElementById("menuBtn").addEventListener("click", redirecionarParaMenu);
document.getElementById("imcBtn").addEventListener("click", redirecionarParaIMC);
document.getElementById("infoBtn").addEventListener("click", redirecionarParaInfo);
