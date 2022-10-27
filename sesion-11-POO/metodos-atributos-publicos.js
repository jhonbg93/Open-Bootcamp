class Persona {
  //# private es una manera de proteger mi objeto
  //Solo de puede acceder desde dentro de la clase
  #nombre; // esto hace que mis atributos sean privados y no puedan ser modificados
  #edad;
 
  // protected=> _
  //Solo de puede acceder desde dentro de la clase y desde clases descendientes
  _isDeveloper;
  constructor(nombre, edad, isDeveloper) {
    this.#nombre = nombre;
    this.#edad = edad;
    this._isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años.`);
  }

  #obtenNombre() {
    //function getter
    return this.#nombre;
  }

  #obtenEdad() {
    return this.#edad;
  }
  getEdad(){
    return this.#edad;
  }

  getNombre(){
    return this.#nombre;
  }

  setEdad(nuevaEdad){
    this.#edad = nuevaEdad
  }
}

const new_person = new Persona("Jhon Betancourth", 28);

console.log(new_person);

new_person.saludo();

//de esta manera podemos acceder a las caracteristicas de cada objeto.

console.log(new_person.edad);
console.log(new_person.nombre);
new_person.saludo();

new_person.nombre = "Adios";
console.log(new_person);

console.log(new_person.isDeveloper);

//Getter -> Metodos que nos permiten obtener atributos/metodos privados o protegidos.
const edad = new_person.getEdad();
console.log(edad);

const nombre = new_person.getNombre();
console.log(nombre);

//Setter -> Metodods que nos permiten cambiar el valor de alguno de los atributos privados o protegidos.
//Quiero cambiar la edad de la persona

new_person.setEdad(35)
console.log(new_person.setEdad())