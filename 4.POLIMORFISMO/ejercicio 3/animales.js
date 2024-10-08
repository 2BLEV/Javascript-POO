// Clase Padre Animal
class Animal {
  constructor(nombre) {
      this.nombre = nombre;
  }

  sonido() {
      throw new Error("Este método debe ser sobrescrito por las clases hijas");
  }
}

// Clase Perro que hereda de Animal
class Perro extends Animal {
  constructor(nombre, raza) {
      super(nombre); // Llama al constructor de la clase padre
      this.raza = raza;
  }

  sonido() {
      output.innerHTML = ""; // Limpia el contenedor de salida
      output.innerHTML += `El perro ${this.nombre}, de raza ${this.raza}, hace: ¡Guau!<br><br>`;
  }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
  constructor(nombre, color) {
      super(nombre); // Llama al constructor de la clase padre
      this.color = color;
  }

  sonido() {
      output.innerHTML = ""; // Limpia el contenedor de salida
      output.innerHTML += `El gato ${this.nombre}, de color ${this.color}, hace: ¡Miau!<br><br>`;
  }
}

// Clase Pájaro que hereda de Animal
class Pajaro extends Animal {
  constructor(nombre, especie) {
      super(nombre); // Llama al constructor de la clase padre
      this.especie = especie;
  }

  sonido() {
      output.innerHTML = ""; // Limpia el contenedor de salida
      output.innerHTML += `El pájaro ${this.nombre}, de especie ${this.especie}, hace: ¡Pío!<br><br>`;
  }
}

// Función que muestra el sonido de cualquier tipo de animal
function hacerSonido(animal) {
  animal.sonido();
}

// Instancias de cada clase
const objetoPerro = new Perro("Rex", "Labrador");
const objetoGato = new Gato("Mimi", "Blanco");
const objetoPajaro = new Pajaro("Tweety", "Canario");

// Llamado al método sonido() para cada objeto
hacerSonido(objetoPerro);
hacerSonido(objetoGato);
hacerSonido(objetoPajaro);
