// Defino la clase
class moto {
    // Método constructor
    constructor(marca, modelo, cilindrada, color, velocidad_maxima) {
      // Defino los atributos de instancia de la clase
      this.marca = marca;
      this.modelo = modelo;
      this.cilindrada = cilindrada;
      this.color = color;
      this.velocidad_maxima = velocidad_maxima;
    }
  
    // Método para mostrar detalles del objeto en el HTML
    mostrarDetalles(idElemento) {
      const elemento = document.getElementById(idElemento);
      elemento.innerHTML = `
        <p><strong>Marca:</strong> ${this.marca}</p>
        <p><strong>Modelo:</strong> ${this.modelo}</p>
        <p><strong>Cilidrada:</strong> ${this.cilindrada}</p>
        <p><strong>Color:</strong> ${this.color}</p>
        <p><strong>Velocidad maxima:</strong> ${this.velocidad_maxima}</p>
        <hr>
      `;
    }
  
    // Método para encender el moto
    encender() {
      // Defino el atributo que pide energía solo para el método encender
      let energia = parseInt(prompt("Digite el valor de la carga: "));
      // Evaluamos si tiene carga el moto
      if (energia > 0) {
        alert("El moto " + this.modelo + " se puede encender\n" + "|||||||||||||| " + energia + "% de carga");
      } else {
        alert("El moto " + this.modelo + " no se puede encender");
      }
    }
  }
  
  // Creamos los objetos a partir de instanciar la clase moto
  let moto1 = new moto("Yamaha", "R6", "600cc", "Negra", "250");
  let moto2 = new moto("Ducati", "Panigale", "1100cc", "Roja", "299");
  let moto3 = new moto("Kawasaki", "Ninja", "1000cc", "Verde", "290");
  
  // Mostramos los detalles de cada objeto en el HTML
  moto1.mostrarDetalles("moto1");
  moto2.mostrarDetalles("moto2");
  moto3.mostrarDetalles("moto3");
  