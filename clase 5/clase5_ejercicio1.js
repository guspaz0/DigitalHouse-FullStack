
function alquilerVehiculo(tipo_vehiculo, dias_alquiler, silla_bebe) {
    let precio_vehiculo;
    switch (tipo_vehiculo) {
        case "compacto":
            precio_vehiculo = 14000
            break
        case "mediano":
            precio_vehiculo = 1700
            break
        case "camioneta":
            precio_vehiculo = 28000
        default:
            break
    }

    silla_bebe? precio_vehiculo = precio_vehiculo + 1200  : null;

    return `“Estimado cliente: en base al tipo de vehículo ${tipo_vehiculo} alquilado, considerando los 3 días
    utilizados, el monto total a pagar es de ${precio_vehiculo*dias_alquiler}`;
}

console.log(alquilerVehiculo("compacto", 2))