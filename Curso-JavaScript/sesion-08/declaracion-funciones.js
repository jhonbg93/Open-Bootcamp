//Que son las funciones, como se declaran 
const nomb = "Daniel Estaban Betancourth Gomez"

function saludar(nombre){
    console.log(`Hola ${nombre}`)
};

saludar(nomb);

///// otra manera de utilizar objetos con una funcion;

let persona = {nombre:"Jhon", apellido:"Betancourth"};

function despedir(objeto){
    console.log(`Adios ${objeto.nombre} ${objeto.apellido} `)
}

despedir(persona);

let mascota = {prop:"Jhon",apellido:"Betancourth", pet:"Max" }

function infoPet(objeto){
    console.log(`${objeto.prop} ${objeto.apellido} es el dueño de ${objeto.pet}`);
};

infoPet(mascota)

///////
function imprimeNumero(numero = 7){//parametros opcionales, es un parametro por defecto.
    console.log(numero);
};

imprimeNumero();//la funcion mostrara el valor que le pasemos cuando la invoquemos.


