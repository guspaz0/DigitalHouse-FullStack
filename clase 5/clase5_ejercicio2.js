

function pedirHamburguesa(tipo, jamon,queso,salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let total = 0
    tipo == 'carne a la parrilla'? total += 1800: null;
    tipo == 'pollo'? total += 1500: null;
    tipo == 'vegetariano'? total += 1200: null;
    jamon? total += 30: null;
    queso? total += 25: null;
    salsaDeTomate? total += 5: null;
    mayonesa? total += 5 : null;
    mostaza? total += 5 : null;
    tomate? total += 15 : null;
    lechuga? total +=  10: null;
    cebolla? total += 10: null;
    return total;
}

function totalPedido(nombre, apellido, tipo, a,b,c,d,e,f,g,h) {
    let total = pedirHamburguesa(tipo,a,b,c,d,e,f,g,h);
    return `Estimado ${nombre} ${apellido}, el monto total a pagar es de: ${total}`;

}


console.log(totalPedido("facundo", "quiroga", "carne a la parrilla", true, true, true, true))