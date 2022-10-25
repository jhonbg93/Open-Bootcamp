class Persona {
  nombre;
  edad;
  isDeveloper;
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
}
const nuevaPersona = new Persona("Jhon", 28, true); // esto es una instacia de Persona
console.log(nuevaPersona);
nuevaPersona.saludo();
