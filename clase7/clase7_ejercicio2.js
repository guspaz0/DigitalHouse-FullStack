function multiplicar (){
    let i = 1;
    while(i<=10){
        console.log('Tabla de multiplicar del ' + i);
        let j = 1;
        while (j<=10){
            let producto = i * j;
            console.log( i + '' + '*' + j + '' + '=' + producto);
            j++
        }
    i++
}
}

multiplicar();