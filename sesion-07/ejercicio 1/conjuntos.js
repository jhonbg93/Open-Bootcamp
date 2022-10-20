//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//- Un nuevo Set con los nombres de tu familia
const familia = ["Daniel Betancourth", "Jhon Betancourth", "Eduardo Betancourth", "Martha Gomez", "Jhon Betancourth"]
console.log(familia);
const setFamilia = new Set(familia);
console.log(setFamilia);
//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamilia.add("Jhon Betancourth"); //Metodo para añadir un elemento.
console.log(setFamilia);
//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamilia.add("Javascript");// Metodo para agregar añadir un elemento a un set
console.log(setFamilia);