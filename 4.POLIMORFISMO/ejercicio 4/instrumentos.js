// Clase Padre Instrumento
class Instrumento {
  constructor(nombre) {
      this.nombre = nombre;
  }

  tocar() {
      throw new Error("Este método debe ser sobrescrito por las clases hijas");
  }
}

// Clase Guitarra que hereda de Instrumento
class Guitarra extends Instrumento {
  constructor(nombre, cuerdas, tipo) {
      super(nombre); // Llama al constructor de la clase padre
      this.cuerdas = cuerdas;
      this.tipo = tipo;
  }

  tocar() {
      output.innerHTML = ""; // Limpia el contenedor de salida
      output.innerHTML += `La guitarra ${this.nombre} tiene ${this.cuerdas} cuerdas y es de tipo ${this.tipo}. Se toca rasgando o punteando las cuerdas.<br><br>`;
  }
}

// Clase Piano que hereda de Instrumento
class Piano extends Instrumento {
  constructor(nombre, teclas, tipo) {
      super(nombre); // Llama al constructor de la clase padre
      this.teclas = teclas;
      this.tipo = tipo;
  }

  tocar() {
      output.innerHTML = ""; // Limpia el contenedor de salida
      output.innerHTML += `El piano ${this.nombre} tiene ${this.teclas} teclas y es de tipo ${this.tipo}. Se toca presionando las teclas.<br><br>`;
  }
}

// Clase Trompeta que hereda de Instrumento
class Trompeta extends Instrumento {
  constructor(nombre, material) {
      super(nombre); // Llama al constructor de la clase padre
      this.material = material;
  }

  tocar() {
      output.innerHTML = ""; // Limpia el contenedor de salida
      output.innerHTML += `La trompeta ${this.nombre} está hecha de ${this.material}. Se toca soplando y utilizando los pistones.<br><br>`;
  }
}

// Función que muestra la información técnica de cualquier instrumento
function tocarInstrumento(instrumento) {
  instrumento.tocar();
}

// Instancias de cada clase
const objetoGuitarra = new Guitarra("Fender Stratocaster", 6, "Eléctrica");
const objetoPiano = new Piano("Yamaha C3", 88, "De cola");
const objetoTrompeta = new Trompeta("Bach Stradivarius", "Latón");

// Llamado al método tocar() para cada objeto
tocarInstrumento(objetoGuitarra);
tocarInstrumento(objetoPiano);
tocarInstrumento(objetoTrompeta);
