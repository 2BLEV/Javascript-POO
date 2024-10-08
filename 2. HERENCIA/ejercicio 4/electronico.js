// Super Clase
class Electronico {
  // constructor
  constructor(marca, modelo, procesador) {
      this.marca = marca;
      this.modelo = modelo;
      this.procesador = procesador;
      this.memoria = parseInt(prompt("¿Qué cantidad de memoria RAM tiene la laptop?")); // prompt para pedir la memoria RAM
  }

  // método público
  registrar() {
      document.write("<hr>");
      document.write("<div class='alert alert-primary' role='alert'>ELECTRÓNICO REGISTRADO</div>");
      document.write("<hr>");
      document.write("Marca: ", this.marca, "<br>");
      document.write("Modelo: ", this.modelo, "<br>");
      document.write("Procesador: ", this.procesador, "<br>");
      document.write("Memoria RAM: ", this.memoria, " GB<br>");
  }
}

// Subclase Laptop
class Laptop extends Electronico {
  // constructor
  constructor(marca, modelo, procesador) {
      super(marca, modelo, procesador); // Hereda de Electronico
      this.disco_duro = prompt("¿Qué tipo de disco duro tiene su laptop?"); // prompt para pedir el tipo de disco duro
      this.bateria = prompt("¿Cuánto tiempo demora la batería en horas?"); // prompt para pedir la duración de la batería
  }

  // método privado
  encender() {
      document.write("Disco Duro: ", this.disco_duro, "<br>");
      document.write("Duración de la batería: ", this.bateria, " horas<br>"); // imprime la duración de la batería
      document.write("<hr>");
      document.write("<div class='alert alert-success' role='alert'>LAPTOP ENCENDIDA</div>");
  }
}

// Instanciando la subclase Laptop
let objeto_laptop = new Laptop('HP', '2024', 'INTEL'); // objeto_laptop
objeto_laptop.registrar(); // registrando la laptop
objeto_laptop.encender(); // encendiendo la laptop
