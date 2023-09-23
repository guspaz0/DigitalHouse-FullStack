let array = [
    ['html5', 4000], ['css3', 5000], ['javascript', 10000], ['react',
    7000], ['nodejs', 15000]
]

function totalCursos(cursos,eleccion) {
    let precio = 0;
    for (let i = 0; i < cursos.length; i++) {
        for (let j = 0; j < eleccion.length; j++){
            if(cursos[i][0] === eleccion[j]) {
                precio += cursos[i][1]
            }
        }
    }
    return precio
}


function asd(nombre,apellido,cursos,eleccion){
    let mensaje = 'Estimado '+nombre+ ' '+apellido+', en función de los cursos seleccionados: \n';
    for (let i = 0; i < eleccion.length; i++) {
        mensaje += i+1+'.- '+eleccion[i]+'\n'
    }
    mensaje += 'El monto total a pagar es de: $'+totalCursos(cursos,eleccion)+'\nBienvenido a la gran aventura Digital House.'
    return mensaje
}

console.log(asd('Jaimito','Perez',array,['html5','react']))

