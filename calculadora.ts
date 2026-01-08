//practica generar de la sintaxis de typescript
let suma:number=0;
let n1:string|number|number[]=[1,2,3,4,5];
//let lista[]:string|boolean|number|string[]=['hola',true,45,['a','b','c']];

let n2:number=10;

n1.forEach(e => {
 suma = e + n2;
   console.log("numero 1: "+e +" + numero 2 : "+n2+" la suma es: "+suma);
});
