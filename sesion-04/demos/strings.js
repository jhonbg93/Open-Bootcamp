//String - Cadenas de textos
/*se pueden definir con cadenas simples o cadenas simples, cualquiera de las dos son buenas practicas*/
var text = "soy un texto"
console.log(text);

/*para escapar de las comillas y tener textos con comillas dentro lo podemos hacer de la siuiente manera*/

var str_comillas = "Hola soy 'Jhon Betancourth'."
console.log(str_comillas);

//otra manera de escapar de las comillas dentro de un mismo texto.

var str_comillas = "Hola soy \"Jhon Betancourth\"."//comando para sacar barras invertidas alt+92.
console.log(str_comillas);

/*otra manera de introducir texrto de manera dinamica es utilizando las baclticks-- para sacar las backticks alt+96*/
// se pueden usar como plantillas de HTML
var nombre = "Jairo Alarcon"
console.log(`Hola minombre es ${nombre} y estoy colocando texto de manera dinamica`);

/*Introduccion de variables a HTML*/

//podemos concatnar matrices dentro de un html.

