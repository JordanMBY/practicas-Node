function sumarts() {
    var n1 = document.getElementById("num1").valueAsNumber;
    var n2 = document.getElementById("num2").valueAsNumber;
    if (n1 > 0 && n2 > 0) {
        var suma_1 = n1 + n2;
        document.getElementById("resultado").innerHTML = "La suma es: " + suma_1;
    }
}
//practica generar de la sintaxis de typescript
var suma = 0;
var n1 = [1, 2, 3, 4, 5];
//let lista[]:string|boolean|number|string[]=['hola',true,45,['a','b','c']];
var n2 = 10;
n1.forEach(function (e) {
    suma = e + n2;
    console.log("numero 1: " + e + " + numero 2 : " + n2 + " la suma es: " + suma);
});
