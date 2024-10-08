// Defino la clase
class empleado {
    // Método constructor
    constructor(nombre, edad, puesto, salario, antiguedad) {
      // Defino los atributos de instancia de la clase
      this.nombre = nombre
      this.edad = edad
      this.puesto = puesto
      this.salario = salario
      this.antiguedad = antiguedad
    }
  
    // Método para mostrar detalles del objeto en el HTML
    mostrarDetalles(idElemento) {
      const elemento = document.getElementById(idElemento);
      elemento.innerHTML = `
        <p><strong>Nombre:</strong> ${this.nombre}</p>
        <p><strong>Edad:</strong> ${this.edad}</p>
        <p><strong>Puesto:</strong> ${this.puesto}</p>
        <p><strong>Salario:</strong> ${this.salario}</p>
        <p><strong>Antiguedad:</strong> ${this.antiguedad}</p>
        <hr>
      `;
    }
  
    // Método para encender el empleado
    encender() {
      // Defino el atributo que pide energía solo para el método encender
      let energia = parseInt(prompt("Digite el valor de la carga: "));
      // Evaluamos si tiene carga el empleado
      if (energia > 0) {
        alert("El empleado " + this.modelo + " se puede encender\n" + "|||||||||||||| " + energia + "% de carga");
      } else {
        alert("El empleado " + this.modelo + " no se puede encender");
      }
    }
  }
  
  // Creamos los objetos a partir de instanciar la clase empleado
  let empleado1 = new empleado("Juan", "30", "Desarrollador", "3000", "3")
  let empleado2 = new empleado("Ana", "25", "Diseñadora", "2800", "2")
  let empleado3 = new empleado("Luis", "40", "Gerente", "5000", "10")
  
  // Mostramos los detalles de cada objeto en el HTML
  empleado1.mostrarDetalles("empleado1");
  empleado2.mostrarDetalles("empleado2");
  empleado3.mostrarDetalles("empleado3");
  