document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado');

    const botaoCalcularIMC = document.getElementById('calcularIMC');
    const limparIMC = document.getElementById('limparIMC');

    if (botaoCalcularIMC) {
        console.log('Botão encontrado:', botaoCalcularIMC);
    } else {
        console.error('Botão não encontrado');
        return;
    }

    botaoCalcularIMC.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Botão clicado');

        const alturaInput = document.getElementById('altura');
        const pesoInput = document.getElementById('peso');
        const altura = parseFloat(alturaInput.value);
        const peso = parseFloat(pesoInput.value);
        const resultadoDiv = document.getElementById('resultado');

        console.log(`Valores: altura=${altura}, peso=${peso}`);

        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            resultadoDiv.textContent = 'Por favor, insira valores válidos para altura e peso.';
            console.log('Valores inválidos');
            return;
        }

        const imc = peso / (altura * altura);
        console.log(`IMC calculado: ${imc}`);

        let classificacao;
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }
limparIMC.addEventListener('click', function () {
        alturaInput.value = '';
        pesoInput.value = '';
        resultadoDiv.textContent = '';
        resultadoDiv.classList.remove('resultadoVisivel');
    });
        
        resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)} (Classificação: ${classificacao})`;
        resultadoDiv.classList.add('resultadoVisivel');

    });
});
