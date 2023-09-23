function aterrizarAvion(altura,velocidad) {
    let checkVelocidad = false
    let checkAltura = false 

    if (velocidad <= 278 && velocidad >= 268) checkVelocidad = true;
    if (altura <= 300 && altura >= 150) checkAltura = true;

    if (checkAltura && checkVelocidad) {
        console.log('el avion esta listo para aterrizar')
    } else {
        console.log('el avion NO esta listo para aterrizar')
    }
}

aterrizarAvion(150,270)