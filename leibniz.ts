function calcularPiLeibniz(numTerminos: number): number {
  let piAproximado = 0; // Inicializa la suma
  let denominador = 1; // Inicia el denominador en 1
  let signo = 1; // Inicia el signo en positivo

  // Itera según el número de términos deseado
  for (let i = 0; i < numTerminos; i++) {
    // Suma o resta el término actual
    piAproximado += signo * (4 / denominador);
    
    // Prepara para la siguiente iteración
    denominador += 2; // El denominador siempre es impar (1, 3, 5, ...)
    signo *= -1;      // Alterna el signo (+, -, +, -, ...)
  }

  return piAproximado;
}

// Ejemplo de uso:
const terminos = 10000; // Puedes ajustar esto para mayor o menor precisión
const piCalculado = calcularPiLeibniz(terminos);

console.log(`Aproximación de Pi con ${terminos} términos: ${piCalculado}`);
console.log(`Valor de Math.PI: ${Math.PI}`);
