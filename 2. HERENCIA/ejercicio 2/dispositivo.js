// Super Clase
class Dispositivo {
  // constructor
  constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.capacidad_bateria = parseInt(prompt("Capacidad de la batería en mAh:")); // prompt para pedir la capacidad de la batería
  }

  // método público
  registrar() {
      document.write("<hr>");
      document.write("<div class='alert alert-primary' role='alert'>DISPOSITIVO REGISTRADO</div>");
      document.write("<hr>");
      document.write("Marca: ", this.marca, "<br>");
      document.write("Modelo: ", this.modelo, "<br>");
      document.write("Año: ", this.año, "<br>");
      document.write("Capacidad de la batería: ", this.capacidad_bateria, " mAh<br>");
  }
}

// Subclase Smartphone
class Smartphone extends Dispositivo {
  // constructor
  constructor(marca, modelo, año) {
      super(marca, modelo, año); // Hereda de Dispositivo
      this.sistema_operativo = prompt("El sistema operativo de su smartphone es:"); // prompt para pedir sistema operativo
      this.conectividad = prompt("El tipo de conectividad que maneja su smartphone es:"); // prompt para pedir conectividad
      this.bateria = prompt("La carga del celular es:"); // prompt para pedir la carga del celular
  }

  // método privado
  encender() {
      document.write("Sistema operativo: ", this.sistema_operativo, "<br>");
      document.write("Conectividad: ", this.conectividad, "<br>"); // imprime la conectividad

      if (this.capacidad_bateria == 0) {
          document.write("<hr>");
          document.write(`<div class='alert alert-danger' role='alert'>El smartphone ${this.marca} modelo ${this.modelo}, del año ${this.año}. La carga de su celular es ${this.bateria}. El dispositivo está apagado!!</div>`);
      } else {
          document.write("<hr>");
          document.write(`<div class='alert alert-success' role='alert'>El smartphone ${this.marca} modelo ${this.modelo}, del año ${this.año}. La carga de su celular es ${this.bateria}. Su dispositivo está encendido!!</div>`);
      }
  }
}

// Instanciando la subclase Smartphone
let objeto_smartphone = new Smartphone('iPhone', '16', '2024'); // objeto_smartphone
objeto_smartphone.registrar(); // registrando el dispositivo
objeto_smartphone.encender(); // encendiendo el dispositivo


  