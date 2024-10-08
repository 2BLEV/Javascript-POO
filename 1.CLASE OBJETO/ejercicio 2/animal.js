// Defino la clase
class animal {
    // Método constructor
    constructor(especie, edad, color, tamaño, habitat) {
      // Defino los atributos de instancia de la clase
      this.especie = especie;
      this.edad = edad;
      this.color = color;
      this.tamaño = tamaño;
      this.habitat = habitat;
    }
  
    // Método para mostrar detalles del objeto en el HTML
    mostrarDetalles(idElemento) {
      const elemento = document.getElementById(idElemento);
      elemento.innerHTML = `
        <p><strong>Especie:</strong> ${this.especie}</p>
        <p><strong>Edad:</strong> ${this.edad}</p>
        <p><strong>Color:</strong> ${this.color}</p>
        <p><strong>Camara:</strong> ${this.tamaño}</p>
        <p><strong>Bateria:</strong> ${this.habitat}</p>
        <hr>
      `;
    }
  
    // Método para encender el animal
    encender() {
      // Defino el atributo que pide energía solo para el método encender
      let energia = parseInt(prompt("Digite el valor de la carga: "));
      // Evaluamos si tiene carga el animal
      if (energia > 0) {
        alert("El animal " + this.modelo + " esta dormido\n" + "|||||||||||||| " + energia + "% de carga");
      } else {
        alert("El animal " + this.modelo + " esta despierto");
      }
    }
  }
  
  // Creamos los objetos a partir de instanciar la clase animal
  let animal1 = new animal("Perro", "5", "Marrón", "Mediano", "Doméstico");
  let animal2 = new animal("Gato", "3", "Negro", "Pequeño", "Doméstico");
  let animal3 = new animal("Elefante", "10", "Gris", "Grande", "Sabana");
  
  // Mostramos los detalles de cada objeto en el HTML
  animal1.mostrarDetalles("animal1");
  animal2.mostrarDetalles("animal2");
  animal3.mostrarDetalles("animal3");
  