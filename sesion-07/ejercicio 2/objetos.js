//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const obj = {
    nombre: "Jhon",
    apellido: "Betancourth",
    edad: 28,
    altura: 178,
    eresDesarrollador: true
};
console.log(obj);
//- Una variable que obtenga tu edad a partir del objeto anterior
const edad = obj.edad;
console.log(edad);
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datos =[
    {
        nombre: "Jhon",
        apellido: "Betancourth",
        edad: 28,
        altura: 178,
        eresDesarrollador: true
    },
    {
        nombre: "Daniel",
        apellido: "Betancourth",
        edad: 23,
        altura: 175,
        eresDesarrollador: true
    }
];
console.log(datos);
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const ordenados = datos.sort((a,b)=> a.edad - b.edad);
console.log(ordenados)