

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listCompras = ["Arroz", "Huevos", "Leche", "Queso", "Pan", "Arina", "Azucar"];
//- Modifica la lista de la compra y añádele "Aceite de Girasol"
listCompras.push("Aceite de Girasol");
console.log(listCompras);
//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listCompras.pop("Aceite de Girasol");
console.log(listCompras);
//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listPeliculas = [
    {titulo: "Los mopets", director:"Jose Alejandro", fecha: new Date(2011, 12, 11)},
    {titulo: "Iron Man", director:"stanly", fecha: new Date(1993, 12, 20)},
    {titulo: "Ant Man", director:"stanly", fecha: new Date(2025, 12, 17)}
];
console.log(listPeliculas);
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelisPost = listPeliculas.filter(listPeliculas => listPeliculas.fecha < new Date(2010, 0, 1));
console.log(pelisPost);
//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listDirector = listPeliculas.map(listPeliculas => listPeliculas.director);
console.log(listDirector);
//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listTitulos = listPeliculas.map(listPeliculas => listPeliculas.titulo);
console.log(listTitulos); 
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const direc_tit = listDirector.concat(listTitulos);
console.log(direc_tit)
//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
console.log(...listDirector, ...listTitulos);