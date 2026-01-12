// serie de leibniz para calcular pi en typescript

function calcularPiTerminos(n: number): number {
    let pi = 0;
    for (let i = 0; i < n; i++) {
        // Alterna signo: +, -, +, - ...
        pi += (i % 2 === 0 ? 1 : -1) / (2 * i + 1);
    }
    return pi * 4;
}

function sacarpi(): void {
    const input = document.getElementById('numero') as HTMLInputElement | null;
    const resultado = document.getElementById('resultado') as HTMLElement | null;
    if (!input || !resultado) return;

    const n = input.valueAsNumber;
    if (!Number.isFinite(n) || n < 1) {
        resultado.textContent = 'Por favor ingrese un número de términos válido (>= 1).';
        return;
    }

    const pi = calcularPiTerminos(Math.floor(n));
    resultado.textContent = pi.toString();
}

// Hacerla accesible desde el HTML (onclick)
;(window as any).sacarpi = sacarpi;
