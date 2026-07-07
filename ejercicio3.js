const prompt = require("prompt-sync")();
let opcion;
do {
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");
    opcion = prompt("Seleccione una opción: ");
    if (opcion == "1") {
        console.log("Mostrando saldo...");
    }
    if (opcion == "2") {
        console.log("Enviando dinero...");
    }
    if (opcion == "3") {
        console.log("Recargando...");
    }
} while (opcion != "4");

console.log("Vuelva Pronto");