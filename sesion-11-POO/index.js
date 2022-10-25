const persona = {
    nombre: "Jhon",
    edad: 28,
    isDeveloper: true,
    saludo: function (){
        console.log("Hola")
    }
}

const otra_persona = {
    nombre: "Daniel",
    edad: 23,
    isDeveloper: true,
    saludo: function (){
        console.log("Hola")
    }
}
console.log(persona);
persona.saludo()
//de esta manera si quisiera crear otra persona tendriamos que hacerla de manera manual siempre y no seria
//optimo ya que tendriamos que entrar a cada uno de los objetos para modificar un atributo o propiedad.



///////////

//otra manera de crear un nuevo objeto puede ser de la siguiente manera

//factory function
const crearPersona = (nombre, edad, isDeveloper) =>{
    return {
        nombre, //nombre:nombre,            //Nota: si nos pasan el nombre por propiedad lo podemos obviar
        edad,   //edad:edad,
        isDeveloper,//isDeveloper:isDeveloper
        saludo: function(){
            console.log("Hola");
        }
    }
}

const new_person = crearPersona("Jhon", 28, true);
console.log(new_person);