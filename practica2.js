const prompt = require("prompt-sync")();
let contraseñacorrecta = "colombia2026";
let verificacion = prompt("Escribe tu contraseña: ");
while(contraseñacorrecta !== verificacion){
    console.log("Contraseña incorrecta");
    
verificacion = prompt("Intente nuevamente: ");
}
console.log("Contraseña verificada");
console.log("Bienvenido");
