const movimientos = [{ tipo: "transferencia", valor: 5000 },
     { tipo: "comercio", valor: 50000 }, 
     { tipo: "comercio", valor: 10000 }];
let posicionEncontrada = -1;
for (let i = 0; i < movimientos.length; i++) {
    let mov = movimientos[i];
    if (mov.valor == 0) {
        continue;
    }
    if (mov.tipo == "comercio") {
        posicionEncontrada = i;
        break;
    }
}
console.log("Posición encontrada:", posicionEncontrada);