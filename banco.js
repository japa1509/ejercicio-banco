// vamos a crear una algoritmo sencillo de un banco que permita consignar, retirar y salir del algoritmo.

function ejecutar(){
    let saldo = 1000;
    while(true){
        let opcion = prompt("Que desea hacer ?\n1. Consignar\n2. Retirar\n3. Salir");

        if(opcion === "3"){
            alert("Hasta luego.");
            break;
        }

    if(opcion === "1"){
        let valor =parseInt(prompt("Digite el valor que desea consignar:"));
        saldo += valor;
        alert("Accion realizada correctamente. Saldo: " + saldo);
        } else if(opcion === "2"){
        let valor =parseInt(prompt("Que valor desea retirar:"))
        if(valor > saldo ){
            alert("Usted no posee esa cantidad. Saldo: " + saldo)
        } else{
            saldo -= valor;
            alert ("Accion realiizado correctamente. Saldo: " + saldo)
        }
        } else{
            alert("Opcion invalida.");
        }
    }
}
ejecutar();
