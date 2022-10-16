//Como trabajar con listas.
let var1 = 45
let array = [1, "hola", false, {id: 5}, null, undefined, var1];
console.log(array);

//Acceder a un array a traves de su posicion 

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

//Metodos para ingresar nuevos valores.
//.push() .unshift() mutan el valor del array;

//.push() inserta un valor al inicio del array; 

array.push("final");
console.log(array)

//.unshift() inserta un valor al inicio del array 

array.unshift(0)
console.log(array);

//metodos para eliminar valores.

//.pop()
array.pop()
console.log(array);

//.shift()
array.shift()
console.log(array);

//metodo para eliminar, modificar o añadir valores a nuestro array;
//.splice(x, y, z)
const array2 = [1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
//              0   1   2   3   4   5   6   7   8    9
array2.splice(2, 0)
console.log(array2);

//añadir valores con .splice();

array2.splice(2, 0, "Hola Mundo");
console.log(array2);

//Modificar valores
array2.splice(2, 1, 5);
console.log(array2);