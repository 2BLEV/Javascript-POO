// Super Clase
class Reloj {
  // constructor
  constructor(marca, tipo, material) {
      this.marca = marca;
      this.tipo = tipo;
      this.material = material;
      this.precio = parseInt(prompt("¿Cuál es el precio del reloj?")); // prompt para pedir el precio del reloj
  }

  // método público
  registrar() {
      document.write("<hr>");
      document.write("<div class='alert alert-primary' role='alert'>RELOJ REGISTRADO</div>");
      document.write("<hr>");
      document.write("Marca: ", this.marca, "<br>");
      document.write("Tipo: ", this.tipo, "<br>");
      document.write("Material: ", this.material, "<br>");
      document.write("Precio: $", this.precio, "<br>");
  }
}

// Subclase RelojInteligente
class RelojInteligente extends Reloj {
  // constructor
  constructor(marca, tipo, material) {
      super(marca, tipo, material); // Hereda de Reloj
      this.pantalla = prompt("¿Qué tipo de pantalla tiene su Reloj Inteligente?"); // prompt para pedir el tipo de pantalla
      this.sistema_operativo = prompt("¿Qué tipo de sistema operativo tiene?"); // prompt para pedir el sistema operativo
  }

  // método privado
  encender() {
      document.write("Tipo de Pantalla: ", this.pantalla, "<br>");
      document.write("Sistema Operativo: ", this.sistema_operativo, "<br>");
      document.write("<hr>");
      document.write("<div class='alert alert-success' role='alert'>RELOJ INTELIGENTE ENCENDIDO</div>");
  }
}

// Instanciando la subclase RelojInteligente
let objeto_reloj_inteligente = new RelojInteligente('Samsung', 'Deportivo', 'Plástico'); // objeto_reloj_inteligente
objeto_reloj_inteligente.registrar(); // registrando el reloj
objeto_reloj_inteligente.encender(); // encendiendo el reloj inteligente

