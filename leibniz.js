function calcularPiLeibniz(numTerminos) {
    var piAproximado = 0; // Inicializa la suma
    var denominador = 1; // Inicia el denominador en 1
    var signo = 1; // Inicia el signo en positivo
    // Itera según el número de términos deseado
    for (var i = 0; i < numTerminos; i++) {
        // Suma o resta el término actual
        piAproximado += signo * (4 / denominador);
        // Prepara para la siguiente iteración
        denominador += 2; // El denominador siempre es impar (1, 3, 5, ...)
        signo *= -1; // Alterna el signo (+, -, +, -, ...)
    }
    return piAproximado;
}
// Función para usar desde el HTML
function sacarpi() {
    var input = document.getElementById('numero');
    var resultado = document.getElementById('resultado');
    var terminos = Number(input.value);

    if (!Number.isInteger(terminos) || terminos <= 0) {
        resultado.textContent = 'Ingrese un entero positivo';
        return;
    }

    resultado.textContent = 'Calculando...';

    // Dejar que la UI se actualice antes de calcular (útil para N grandes)
    setTimeout(function () {
        var start = performance.now();
        var piCalculado = calcularPiLeibniz(terminos);
        var elapsed = performance.now() - start;
        var error = Math.abs(piCalculado - Math.PI);
        resultado.textContent = "π ≈ " + piCalculado + " (error: " + error + ")";
    }, 10);
}
