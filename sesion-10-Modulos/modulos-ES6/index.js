//para exportar modulos con es6 lo primere que debemos hacer es modificar el package.json
//colocando "type" y colocamos en vez de commonJS colocamos module.
// luego colocamos en cada una de las funciones el export al inicio de cada funcion.
// import { suma } from "./modulos/matematicas.js";

// si quiero importar todas las funciones del fichero podemos hacerlo de la siguiente manera
import * as operaciones from "./modulos/matematicas.js";
// de esta manera podemos exportar por dafault
import getAutor from "./modulos/literatura.js";

const sum = operaciones.suma(1, 6);
console.log(sum);

const rest = operaciones.resta(5, 10);
console.log(rest);

const mult = operaciones.multiplicar(5, 10);
console.log(mult);

console.log(getAutor());