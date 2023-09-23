let peliculas = ['Turno de día', '30 noches con mi ex',
    'Bestia', 'El monte', 'Top gun maverick',
    'Elvis','Thor: amor y trueno']

let filterLast = peliculas.pop()

function Mayuscula(peli) {
    return peli.toUpperCase()
}

peliculas.unshift(Mayuscula(filterLast))

let proximas = 'Counter-Strike NOP Vértigo Nick Avatar';

proximas = proximas.split(' ')

console.log(proximas)

proximas.shift()

console.log(proximas)


function concatenar(array,array2) {
    return array.concat(array2)
}

console.log(concatenar(peliculas,proximas))