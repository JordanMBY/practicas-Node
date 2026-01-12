// calculadora2.js

function multiplicarHasta(n) {
    if (n < 1) return null;
    // Usamos BigInt para evitar overflow en factoriales moderados
    let prod = 1n;
    for (let i = 1; i <= n; i++) {
        prod *= BigInt(i);
    }
    return prod.toString();
}

function esPrimo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function primosHasta(n) {
    const primos = [];
    for (let i = 2; i <= n; i++) {
        if (esPrimo(i)) primos.push(i);
    }
    return primos;
}

function multiplicacionesPasoAPaso(n, limit = 200) {
    // Genera un array con cadenas que representan cada paso de la multiplicación
    const pasos = [];
    let prod = 1n;
    for (let i = 1; i <= n; i++) {
        prod *= BigInt(i);
        if (i <= limit) {
            const izquierda = Array.from({ length: i }, (_, k) => k + 1).join('·');
            pasos.push(izquierda + ' = ' + prod.toString());
        }
    }
    return { pasos, final: prod.toString(), truncated: n > limit };
}

function runCalculadora2() {
    const input = document.getElementById('numero2');
    const multSpan = document.getElementById('multiplicacionRes');
    const multipList = document.getElementById('multiplicacionesList');
    const primosSpan = document.getElementById('primosRes');
    const mensajes = document.getElementById('mensajes');

    if (!input || !multSpan || !primosSpan || !mensajes) return;

    mensajes.textContent = '';
    multSpan.textContent = '';
    primosSpan.textContent = '';

    const n = Number(input.value);
    if (!Number.isFinite(n) || n < 1) {
        mensajes.textContent = 'Ingrese un número entero mayor o igual a 1.';
        return;
    }

    const nInt = Math.floor(n);

    const stepLimit = 200; // límite para mostrar todos los pasos
    if (nInt > 500) {
        mensajes.textContent = 'n demasiado grande para calcular la multiplicación completa (límite: 500). Mostrando resultado final y los primeros pasos.';
    }

    // Generar pasos y resultado final
    const pasosResult = multiplicacionesPasoAPaso(nInt, stepLimit);

    if (multipList) {
        multipList.innerHTML = '';
        if (pasosResult.pasos.length === 0) {
            multipList.innerHTML = '<li>No hay pasos para mostrar.</li>';
        } else {
            const fragment = document.createDocumentFragment();
            pasosResult.pasos.forEach(p => {
                const li = document.createElement('li');
                li.textContent = p;
                fragment.appendChild(li);
            });
            multipList.appendChild(fragment);
            if (pasosResult.truncated) {
                const li = document.createElement('li');
                li.textContent = '... (lista truncada) Resultado final: ' + pasosResult.final;
                multipList.appendChild(li);
            }
        }
    }

    if (nInt <= 500) {
        const mult = multiplicarHasta(nInt);
        multSpan.textContent = mult;
    } else {
        multSpan.textContent = pasosResult.final;
    }

    // Para la búsqueda de primos también limitamos por rendimiento
    if (nInt > 100000) {
        mensajes.textContent += (mensajes.textContent ? ' ' : '') + 'n demasiado grande para búsqueda de primos (límite: 100000).';
    } else {
        const primos = primosHasta(nInt);
        primosSpan.textContent = primos.join(', ') || 'No hay primos en este rango.';
    }
}

// Exportar al scope global para botones onclick
window.runCalculadora2 = runCalculadora2;
