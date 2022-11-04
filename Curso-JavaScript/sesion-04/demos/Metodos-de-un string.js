//Metodos mas utilizados con una cadena de strings.
var nombre = "Jhon Betancourth";
var str = `Hola soy ${nombre} y voy a saber cuantos caracteres tiene mi codigo`

console.log(str.length)//.length es una propiedad que nos indica cual es la longitud de nuestra str;
//Como obtener parte de cadenas de caracteres slice(), substring() 

//slice():

const slice_str = str.slice(0, 10);//debemos coloca desde donde queremos que nos empiece a mostrar los caracteres en este caso
//desde (0, 10) y me mostrara "Hola soy J";
console.log(slice_str)

//substring:

const substring_str = str.substring(0, 10);
console.log(substring_str)

//Nota: slice() y substring() son una propiedad de las string.

/*Reemplazar una parte de mi cadena */

//en este caso solo nos remplaza la primera instacia.
var cadena = "Hola soy Jhon Betancourth, y me gutas mi nombre de Jhon Betancourth"
console.log(cadena.replace("Jhon", "Daniel"));


//cambiar las instacias de manera global lo hcemos de la seguiente manera.

console.log(cadena.replace(/Jhon/g/*aca nos damos cuenta que en esta parte del codigo afecta todo el codigo de manera global*/, "Daniel"));

