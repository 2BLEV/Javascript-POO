// Defino la clase
class carro {
    // Método constructor
    constructor(marca, modelo, color, motor, capacidad_baul) {
      // Defino los atributos de instancia de la clase
      this.marca = marca
      this.modelo = modelo
      this.color = color
      this.motor = motor
      this.capacidad_baul = capacidad_baul
    }
  
    // Método para mostrar detalles del objeto en el HTML
    mostrarDetalles(idElemento) {
      const elemento = document.getElementById(idElemento);
      elemento.innerHTML = `
        <p><strong>Marca:</strong> ${this.marca}</p>
        <p><strong>Modelo:</strong> ${this.modelo}</p>
        <p><strong>Color:</strong> ${this.color}</p>
        <p><strong>Motor:</strong> ${this.motor}</p>
        <p><strong>Capacidad del baul:</strong> ${this.capacidad_baul}</p>
        <hr>
      `;
    }
  
    // Método para encender el carro
    encender() {
      // Defino el atributo que pide energía solo para el método encender
      let energia = parseInt(prompt("Digite el valor de la carga: "));
      // Evaluamos si tiene carga el carro
      if (energia > 0) {
        alert("El carro " + this.modelo + " se puede encender\n" + "|||||||||||||| " + energia + "% de carga");
      } else {
        alert("El carro " + this.modelo + " no se puede encender");
      }
    }
  }
  
  // Creamos los objetos a partir de instanciar la clase carro
  let carro1 = new carro("Toyota", "Corolla", "Blanco", "2.0L", "470");
  let carro2 = new carro("Ford", "Mustang", "Rojo", "5.0L", "380");
  let carro3 = new carro("Honda", "Civic", "Negro", "1.5L", "420");
  
  // Mostramos los detalles de cada objeto en el HTML
  carro1.mostrarDetalles("carro1");
  carro2.mostrarDetalles("carro2");
  carro3.mostrarDetalles("carro3");
  