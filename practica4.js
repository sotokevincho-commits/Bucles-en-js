let rifa = [14, -5, 32, 71, 90, 2, 234, 4, 7];
let posicionSuerte = -1;
for (let i = 0; i < rifa.length; i++) {
    if (rifa[i] <= 0) {
        continue;
    }
        if (rifa[i] === 7) {
        posicionSuerte = i;
        break;
    }
}
console.log("El número de la suerte se encontró en la posición:", posicionSuerte);