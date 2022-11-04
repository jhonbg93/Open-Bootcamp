//como unir dos listas .concat(lista)

const list1 = [1, 2 ,3];
const list2 = [4, 5 ,6];

console.log(list1.concat(list2));

const list3 = list1.concat(list2)
console.log(list3);

//como unir dos listas con el factor de propagacion.
console.log(...list3);//para estos ejemplos podemos ver que nos devuelve las listas
console.log(...list1);//sin las comas ni los parentesis, nos devuelce los valores de la lista por separado.

const list4 = [...list1, ...list2]; //aca podemos concatenar con los 3 puntos (...) con el factor de propagacion
console.log(list4);


//sin el factor de propagacion ¿Que puede pasar?

const list5 = [list1, list2]; //aca podemos concatenar con los 3 puntos (...) con el factor de propagacion
console.log(list5);//Nos retorna una lista dentro de otra lista.