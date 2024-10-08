// Defino la clase
class Celular {
    // Método constructor
    constructor(marca, modelo, almacenamiento, ram, camara) {
      // Defino los atributos de instancia de la clase
      this.marca = marca;
      this.modelo = modelo;
      this.almacenamiento = almacenamiento;
      this.ram = ram;
      this.camara = camara;
    }
  
    // Método para mostrar detalles del objeto en el HTML
    mostrarDetalles(idElemento) {
      const elemento = document.getElementById(idElemento);
      elemento.innerHTML = `
        <p><strong>Marca:</strong> ${this.marca}</p>
        <p><strong>Modelo:</strong> ${this.modelo}</p>
        <p><strong>Almacenamiento:</strong> ${this.almacenamiento}</p>
        <p><strong>RAM:</strong> ${this.ram}</p>
        <p><strong>Cámara Frontal:</strong> ${this.camara}</p>
        <hr>
      `;
    }
  
    // Método para encender el celular
    encender() {
      // Defino el atributo que pide energía solo para el método encender
      let energia = parseInt(prompt("Digite el valor de la carga: "));
      // Evaluamos si tiene carga el celular
      if (energia > 0) {
        alert("El celular " + this.modelo + " se puede encender\n" + "|||||||||||||| " + energia + "% de carga");
      } else {
        alert("El celular " + this.modelo + " no se puede encender");
      }
    }
  }
  
  // Creamos los objetos a partir de instanciar la clase Celular
  let celular1 = new Celular("Xiaomi", "Redmi note 11", "256 GB", "6 GB", "108px");
  let celular2 = new Celular("Apple", "Iphone 8 plus", "256 GB", "3 GB", "12px");
  let celular3 = new Celular("Apple", "Iphone X", "64 GB", "3 GB", "12px");
  
  // Mostramos los detalles de cada objeto en el HTML
  celular1.mostrarDetalles("celular1");
  celular2.mostrarDetalles("celular2");
  celular3.mostrarDetalles("celular3");
  