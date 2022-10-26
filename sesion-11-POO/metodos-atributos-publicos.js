class Persona {
    //# private es una manera de proteger mi objeto
    //Solo de puede acceder desde dentro de la clase
    #nombre// esto hace que mis atributos sean privados y no puedan ser modificados
    #edad
    // portected=> _
    //Solo de puede acceder desde dentro de la clase y desde clases descendientes 
    _isDeveloper
    constructor(nombre, edad, isDeveloper) {
        this.#nombre = nombre;
        this.#edad = edad;
        this._isDeveloper = isDeveloper
    };
    saludo() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años.`)
    }

    obtenNombre(){
        return this.#nombre
    }
    obtenEdad(){
        return this.#nombre
    } 
}

const new_person = new Persona("Jhon Betancourth", 28);

console.log(new_person);

new_person.saludo();

//de esta manera podemos acceder a las caracteristicas de cada objeto.

console.log(new_person.edad);
console.log(new_person.nombre);
new_person.saludo()

new_person.nombre = "Adios"; 
console.log(new_person)
 
console.log(new_person.isDeveloper)

//Getter->Metodos que nos permiten obtener atributos/metodos privados o protegidos
//Setter->Metodods que nos permiten cambiar el valor de alguno de los atributos privados o protegidos