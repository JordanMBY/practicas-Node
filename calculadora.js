function sumar(){
    let n1=parseFloat(document.getElementById("num1").value);
    let n2=parseFloat(document.getElementById("num2").value);
    if(n1>0 && n2>0){
        let suma=n1+n2;
        document.getElementById("resultado").innerHTML="La suma es: "+suma;
    }

}