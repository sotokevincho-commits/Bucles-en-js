const usuarios = [
    {nombre: "Kevin",movimientos: [100000,80000,20000]},
    {nombre: "Valentina",movimientos: [500000,0,150000]},
    {nombre: "Daniiela",movimientos: [2000000,0]},
];

for(let i=0;i<usuarios.length;i++){
    let usuarioActual = usuarios[i];
    let totalUsuario = 0;
    for(let i=0;i<usuarioActual.movimientos.length;i++){
        totalUsuario += usuarioActual.movimientos[i];
    }
    console.log("Usuario:",usuarioActual.nombre);
    console.log("Total:",totalUsuario);
}