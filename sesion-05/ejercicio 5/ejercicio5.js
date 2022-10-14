// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
const altura = 178;

// - Una variable que contenga tu altura en metros (número de coma flotante)
const alturaM = 1.78;

// -variable que contenga tu peso en kilogramos (número de coma flotante)
const pesoKg = 82.5;

// - Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(Math.ceil(alturaM))
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(Math.floor(pesoKg))
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log(sonIguales)