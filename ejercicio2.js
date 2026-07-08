const prompt = require("prompt-sync")();
let pinCorrecto = "1234";
let intento = prompt("Escribe tu PIN: ");
while (intento !== pinCorrecto) {
    intento = prompt("PIN Incorrecto intenta nuevamente: ");
}
console.log("Bienvenido.");