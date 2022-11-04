//Crea un archivo llamado fechas.js que contenga las siguientes líneas

//- La fecha de hoy
const fechaHoy = new Date();
console.log(fechaHoy);
//- La fecha de tu nacimiento
const fechaNac = new Date(1993, 11, 11);
console.log(fechaNac)
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparacion = fechaHoy > fechaNac
console.log(comparacion)
//- Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNac.getDate()
console.log(diaNacimiento)
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNac.getMonth() + 1
console.log(mesNacimiento)
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNacimiento = fechaNac.getFullYear()
console.log(anyoNacimiento)