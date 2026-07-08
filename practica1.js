const prompt = require("prompt-sync")();
let carrito = [];
let totalcompra = 0;
let productoscostosos = 0;
for (let i = 0; i < 5; i++) {
    let precio = Number(prompt(`Ingrese el precio del producto ${i + 1}: `));
    
    carrito.push(precio);
}
totalcompra = 0;
productoscostosos = 0;
for (let i = 0; i < carrito.length; i++){
    totalcompra = totalcompra + carrito[i];
    if (carrito[i] >= 20000){
        productoscostosos++;
    }
}
console.log("El total de su compra es: ", totalcompra);
console.log("Lleva", productoscostosos, "productos costosos");
