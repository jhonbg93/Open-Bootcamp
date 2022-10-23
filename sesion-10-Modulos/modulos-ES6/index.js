//para exportar modulos con es6 lo primere que debemos hacer es modificar el package.json
//colocando "type" y colocamos en vez de commonJS colocamos module.
// luego colocamos en cada una de las funciones el export al inicio de cada funcion.
import { suma } from "./modulos/matematicas.js";
const sum = suma(5, 10);
console.log(sum);