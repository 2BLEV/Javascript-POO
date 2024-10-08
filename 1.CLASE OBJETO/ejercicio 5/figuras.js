// Defino la clase
class Figura {
    // Método constructor
    constructor(tipo, color, area, salario, lados) {
      // Defino los atributos de instancia de la clase
      this.tipo = tipo;
      this.color = color;
      this.area = area;
      this.salario = salario;
      this.lados = lados;
    }
  
    // Método para mostrar detalles del objeto en el HTML
    mostrarDetalles(idElemento) {
      const elemento = document.getElementById(idElemento);
      elemento.innerHTML = `
        <p><strong>Tipo:</strong> ${this.tipo}</p>
        <p><strong>Color:</strong> ${this.color}</p>
        <p><strong>Area:</strong> ${this.area}</p>
        <p><strong>Salario:</strong> ${this.salario}</p>
        <p><strong>Lados:</strong> ${this.lados}</p>
        <hr>
      `;
    }
  
    // Método para encender el figura
    encender() {
      // Defino el atributo que pide energía solo para el método encender
      let energia = parseInt(prompt("Digite el valor de la carga: "));
      // Evaluamos si tiene carga el figura
      if (energia > 0) {
        alert("El figura " + this.modelo + " se puede encender\n" + "|||||||||||||| " + energia + "% de carga");
      } else {
        alert("El figura " + this.modelo + " no se puede encender");
      }
    }
  }
  
  // Creamos los objetos a partir de instanciar la clase figura
  let figura1 = new Figura("Cuadrado", "Azul", "25", "20", "4");
  let figura2 = new Figura("Triángulo", "Rojo", "15", "18", "3");
  let figura3 = new Figura("Círculo", "Verde", "78.5", "31.4", "0");
  
  // Mostramos los detalles de cada objeto en el HTML
  figura1.mostrarDetalles("figura1");
  figura2.mostrarDetalles("figura2");
  figura3.mostrarDetalles("figura3");
  