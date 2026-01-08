//multiplicara todos los elementos de un array
let n1 :number[]= [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let multiplicacion:number=1;

n1.forEach(e => {
    multiplicacion = multiplicacion * e;
    console.log("Elemento actual: "+e+" Multiplicacion acumulada: "+multiplicacion);
});

//Encontrar numeros primos en un array
function esPrimo(n1: number): boolean {
    if (n1 <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n1); i++) {
        if (n1 % i === 0) {
            return false; 
        }
    }
    return true;
}

let numerosPrimos: number[] = [];
n1.forEach(numero => {
    if (esPrimo(numero)) {
        numerosPrimos.push(numero);
    }
});

console.log("Números primos encontrados:", numerosPrimos);