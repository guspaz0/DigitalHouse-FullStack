function traductor(string) {
    switch (string.toLowerCase()) {
        case 'gato':
            return 'cat'
        case 'perro':
            return 'dog'
        case 'puerta':
            return 'door'
        case 'mesa':
            return 'table'
        default:
            return 'la palabra no se encuentra en el diccionario'
    }
};

console.log(traductor('perro'))