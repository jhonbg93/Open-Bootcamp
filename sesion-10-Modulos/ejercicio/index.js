import * as operaciones from "./modulos/controller.js";
import  Chalk from "chalk";

const sum = operaciones.suma(5, 5);
console.log(Chalk.red(sum));

const mult = operaciones.multiplicar(5, 5);
console.log(Chalk.green(mult));