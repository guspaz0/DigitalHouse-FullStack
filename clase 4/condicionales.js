
//DESAFIO 
/*Hacer un programa que resuelva segun la nota recibida si : 
a. Estamos entre los mejores promedios 
b. Promocionamos 
c. Regularizamos 
d. Aplazamos

Que de acuerdo al caso imprima un mensaje por consola un mensaje diferente. 

Podemos usar cualquiera de las estructuras condicionales vistas en la clase 
*/

//Una solucion posible desarrollada en clase

//Una solucion a la que le faltan los mejores promedios

//Se te ocurren otras ?

let mejorPromedio = "Felicidades, estas entre los mejores";
let promocionado ="Felicidades promocionaste!";
let regularizado = "Felicidades regularizaste, pero debes rendir un final";
let desaprobado = "Lo siento debes recursar";
let error = 'nota no valida';

let nota = 10; 


switch (nota) {
    case 1:
    case 2:
    case 3:
        console.log(desaprobado);
        break;
    case 4:
    case 5:
    case 6:
    console.log(regularizado);
        break;
    case 7:
    case 8:
    console.log(promocionado);
    case 9:
    case 10:
        console.log(mejorPromedio);
        break;
    default:
        console.log("Hey, esa nota no es válida!");
    break;
}

// nota = 9
// if(nota>= 7 && nota <= 10){
//     console.log(promocionado);
//     if (nota >=9) {
//         console.log(mejorPromedio);
//     }
// }else if (nota >= 5){ 
//     console.log(regularizado);
// }
// else if (nota >= 1 && nota <=4) {
//     console.log(desaprobado);
// }
// else {
//     error
// }



// (nota >= 9 && nota <=10)? console.log(mejorPromedio) : null;
// (nota >= 7 && nota <=8)? console.log(promocionado) : null;
// (nota >= 5 && nota <=6)? console.log(regularizado) : null;
// (nota <= 4 && nota >=1)? console.log(desaprobado) : null;

console.log("Continua mi programa...");