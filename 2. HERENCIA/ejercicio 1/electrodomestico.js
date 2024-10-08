// Super Clase
class Electrodomestico {
  // constructor
  constructor(marca, color, capacidad) {
      this.marca = marca;
      this.color = color;
      this.capacidad = capacidad;
      this.consumo_electrico = parseInt(prompt("Consumo eléctrico en KWh:")); // prompt para pedir input
  }

  // método público
  registrar() {
      document.write("<hr>");
      document.write("<div class='alert alert-primary' role='alert'>ELECTRODOMÉSTICO REGISTRADO</div>");
      document.write("<hr>");
      document.write("Marca: ", this.marca, "<br>");
      document.write("Color: ", this.color, "<br>");
      document.write("Capacidad: ", this.capacidad, "<br>");
      document.write("Consumo eléctrico: ", this.consumo_electrico, " KWh<br>");
  }
}

// Subclase Refrigerador
class Refrigerador extends Electrodomestico {
  // constructor
  constructor(marca, color, capacidad) {
      super(marca, color, capacidad); // Hereda de Electrodomestico
      this.tipo = prompt("El tipo de nevera es:"); // prompt para pedir el tipo de nevera
      this.temperatura = parseInt(prompt("La temperatura inicial en grados centígrados es:")); // prompt para pedir temperatura
  }

  // método privado
  ajustar() {
      document.write("Tipo: ", this.tipo, "<br>"); // imprime el tipo de nevera

      if (this.temperatura > 0) {
          document.write("<hr>");
          document.write(`<div class='alert alert-warning' role='alert'>El refrigerador ${this.marca} de color ${this.color}, con capacidad de ${this.capacidad} tiene una temperatura alta. Se ajustó a 0°C !!</div>`);
      } else {
          document.write("<hr>");
          document.write(`<div class='alert alert-success' role='alert'>El refrigerador ${this.marca} de color ${this.color}, con capacidad de ${this.capacidad} tiene una temperatura controlada.</div>`);
      }
  }
}

// Instanciando la subclase Refrigerador
let objeto_refrigerador = new Refrigerador('HACEB', 'GRIS', '150 L'); // objeto_refrigerador
objeto_refrigerador.registrar(); // registrando el electrodoméstico
objeto_refrigerador.ajustar(); // ajustando la temperatura
