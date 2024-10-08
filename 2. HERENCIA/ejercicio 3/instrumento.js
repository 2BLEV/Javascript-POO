// Super Clase
class Instrumento {
  // constructor
  constructor(tipo, marca, material) {
      this.tipo = tipo;
      this.marca = marca;
      this.material = material;
  }

  // método público
  registrar() {
      document.write("<hr>");
      document.write("<div class='alert alert-primary' role='alert'>INSTRUMENTO REGISTRADO</div>");
      document.write("<hr>");
      document.write("Tipo: ", this.tipo, "<br>");
      document.write("Marca: ", this.marca, "<br>");
      document.write("Material: ", this.material, "<br>");
  }
}

// Subclase Guitarra
class Guitarra extends Instrumento {
  // constructor
  constructor(tipo, marca, material) {
      super(tipo, marca, material); // Hereda de Instrumento
      this.cuerdas = prompt("Número de cuerdas:"); // prompt para pedir el número de cuerdas
      this.acordes = prompt("¿Qué acordes básicos conoces?: ").split(","); // prompt para pedir los acordes y dividirlos en una lista
  }

  // método privado
  tocar() {
      document.write("Número de cuerdas: ", this.cuerdas, "<br>");
      document.write("<hr>");
      document.write("Acordes básicos: ", this.acordes.join(", "), "<br>"); // imprime los acordes
  }
}

// Instanciando la subclase Guitarra
let objeto_guitarra = new Guitarra('Guitarra', 'Española', 'Madera'); // objeto_guitarra
objeto_guitarra.registrar(); // registrando el instrumento
objeto_guitarra.tocar(); // tocando la guitarra

