// Clase Personas con atributos privados
class Personas {
    // método constructor
    constructor(nombres, apellidos, identidad, fechanacimiento, sexo) {
        this._nombres = nombres; // privado (convención en JS usando _)
        this._apellidos = apellidos; // privado
        this._identidad = identidad; // privado
        this.fechanacimiento = fechanacimiento; // público
        this.sexo = sexo; // público
    }

    // método getter para nombres
    obtenerNombres() {
        return this._nombres;
    }

    // método getter para apellidos
    obtenerApellidos() {
        return this._apellidos;
    }

    // método getter para identidad
    obtenerIdentidad() {
        return this._identidad;
    }

    // método setter para nombres
    establecerNombres(nuevoNombres) {
        this._nombres = nuevoNombres;
    }

    // método setter para apellidos
    establecerApellidos(nuevoApellidos) {
        this._apellidos = nuevoApellidos;
    }

    // método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`\nNombres: ${this._nombres}<br>`);
        document.write(`Apellidos: ${this._apellidos}<br>`);
        document.write(`Nº Identidad: ${this._identidad}<br>`);
        document.write(`Fecha nacimiento: ${this.fechanacimiento}<br>`);
        document.write(`Sexo: ${this.sexo}<br>`);
    }
}

// objeto
const persona = new Personas("Jorge", "Rojas", 1102345678, "14/09/2000", "M");

// imprimir atributos públicos y privados
persona.mostrarDetalles();

document.write("<hr>");

// modificar atributos encapsulados usando setters y obtenerlos con getters
persona.establecerNombres("Carlos"); // setter
document.write(`Nombres: ${persona.obtenerNombres()}<br>`); // getter
persona.establecerApellidos("Perez"); // setter
document.write(`Apellidos: ${persona.obtenerApellidos()}<br>`); // getter
document.write(`Nº Identidad: ${persona.obtenerIdentidad()}<br>`); // getter
document.write(`Fecha nacimiento: ${persona.fechanacimiento}<br>`); // público
document.write(`Sexo: ${persona.sexo}<br>`); // público
