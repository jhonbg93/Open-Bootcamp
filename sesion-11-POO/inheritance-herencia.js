//Inheritance-Herencia
class Persona {
  constructor(nombre, edad, isDeveloper = true) {
    //Este es el constructor que vamos a reutilizar el en constructor de desarrollador
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }

  saludo() {
    console.log(
      `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años. ¿Eres desarrollador? ${this.isDeveloper}`
    );
  }
}

class Desarrollador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad); //aca vamos llamar el constructor del objeto padre ..... mirar el contructor de arrba ▲ (alt+30)▲
    this.lenguaje = lenguaje;
  }
  saludo() {
    //override
    super.saludo();
    console.log(`y soy desarrollador de ${this.lenguaje}`);
  }
}

const newDev = new Desarrollador("Jhon", 28, "JavaScritp");
console.log(newDev);

newDev.saludo(); // asi debememso llamar la funcion para nos aparezca con el console.log dentro de la funcion
//saludo del objeto padre.

//Polimorfismo => Se puede hacer de varias formas

console.log;
