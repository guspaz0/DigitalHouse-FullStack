let array = ['hola', 'mundo', 'digital', 'house', 'full stack', 2023]

console.log(array[4])

let deleteFirstElement = array.shift()

array.push(deleteFirstElement)

console.log(array[array.length-1])

array = [...array, 'developer', 'JavaScript']

console.log(array.length)

array.includes(2023)?
    console.log('Producto Encontrado')
    : console.log('El producto Buscado no existe');

array = array.join(' ')

console.log(array)

console.log(array.length)

array = array.replace('mundo', 'hola')

array = array.split(' ')

console.log(array)