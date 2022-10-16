//Iterar los valores de una lista.
const array = ["Hola", 2, 5, 90, false, undefined];

//Forma antigua y la menos eficiente

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Forma mas eficiente con ES6
let suma = 0;
let arrayNum = [1, 2, 3];
arrayNum.forEach((valor) => {
  suma += valor;
  console.log(valor);
});
console.log(suma);

let newArray = [5, 20, 30, 55, 90];
let newSuma = 0;
newArray.forEach((valor) => {
  newSuma += valor;
  console.log(valor);
});
console.log(newSuma);

//Busqueda de un valor dentro de una lista
//Quiero encontrar el valor de 90
const variable = newArray.find((valor) => {
  if (valor === 90) {
    return true;
  }
});
console.log(variable)