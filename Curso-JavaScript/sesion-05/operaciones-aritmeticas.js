// principales operaciones arimetmeticas
let a = 3.54;
let b = 4.8;
//suma
console.log(a + b);

//resta
console.log(a - b);

//multiplicacion
console.log(a * b);

//Division
console.log(a / b);

// Representacion de los numeros en cadenas de texto
console.log(typeof a);
let aString = a.toString();
console.log(typeof aString);

// Redondeo de nuemeros decimales

let c = 3.3
let d = c * 3;
console.log(d.toFixed(2));  //con el toFixed() podemos ajustar la cantidad de decimales que queremos tener en la operacion toFixed(2) = 9.90
//Hay que tener cuidado ya que al utilizar este metodo nos convertira el valo en un string

let observarString =  d.toFixed(2);
console.log(typeof observarString);3

//.toPercission()

console.log(a.toPrecision(2));// nos devuelve el numero de cifrfas significativas. hay que tener cuidado ppor que al igual que el toFixed nos devuelve un string.


