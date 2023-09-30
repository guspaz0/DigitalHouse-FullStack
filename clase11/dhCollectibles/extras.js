let array = [1,2,3,4,5,6,7,8,9,10];

let [a,b,c,d,e,f,g,h,i,j] = array

let array2 = [a,c,e]
let array3 = [b,d,f,g,h,i,j]

let mascota = {
    nombre:'mora',
    tipoDeMascota: 'perro',
    color: 'negro - blanco - marron',
    raza: 'Beagle',
}

let {nombre, tipoDeMascota, color, raza} = mascota

console.log(`Hola les presento a mis mascota su nombre es: ${nombre}, es un hermoso ${tipoDeMascota}, de color: ${color} y su raza es: ${raza}`)