function sumarts():void {
    let n1 = (document.getElementById("num1") as HTMLInputElement).valueAsNumber;
    let n2 = (document.getElementById("num2") as HTMLInputElement).valueAsNumber;
    if(n1>0 && n2>0){
        let suma=n1+n2;
        (document.getElementById("resultado") as HTMLParagraphElement).innerHTML ="La suma es: "+suma;
    }
}




//practica generar de la sintaxis de typescript
let suma:number=0;
let n1:string|number|number[]=[1,2,3,4,5];
//let lista[]:string|boolean|number|string[]=['hola',true,45,['a','b','c']];

let n2:number=10;

n1.forEach(e => {
 suma = e + n2;
   console.log("numero 1: "+e +" + numero 2 : "+n2+" la suma es: "+suma);
});
