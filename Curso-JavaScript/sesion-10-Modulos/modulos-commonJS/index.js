//formas de importar y exportar modulos.
//1.CommonJS - require
//2.Import ES6 - import 

//1. Debemos importar desdes el modulos matematicas
// const moduloMatematicas = require("./modulos/matematicas");
// console.log(moduloMatematicas);

//de esta manera podemos utilizar las funciones que necesitamos por consola

// const suma = moduloMatematicas.suma(10, 5);
// console.log(suma);

// const resta = moduloMatematicas.resta(10, 5);
// console.log(resta);

// const fact = moduloMatematicas.factorial(5);
// console.log(fact);

// const mult = moduloMatematicas.multiplicar(10, 10);
// console.log(mult);

//Podemos importar de otra manera modulos de con ES6

const {suma, resta} = require("./matematicas");
console.log(suma(5, 5));
console.log(resta(10, 5));