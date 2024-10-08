// Clase Libro con atributos privados
class Libro {
    // método constructor
    constructor(titulo, autor, isbn, editorial) {
        this._titulo = titulo; // privado (convención en JS usando _)
        this._autor = autor; // privado
        this._isbn = isbn; // privado
        this.editorial = editorial; // público
    
    }

    // método getter para titulo
    obtenertitulo() {
        return this._titulo;
    }

    // método getter para autor
    obtenerautor() {
        return this._autor;
    }

    // método getter para isbn
    obtenerisbn() {
        return this._isbn;
    }

    // método setter para titulo
    establecertitulo(nuevotitulo) {
        this._titulo = nuevotitulo;
    }

    // método setter para autor
    establecerautor(nuevoautor) {
        this._autor = nuevoautor;
    }

     // método setter para titulo
     establecerisbn(nuevo_isbn) {
        this._isbn = nuevo_isbn;
    }


    // método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`\ntitulo: ${this._titulo}<br>`);
        document.write(`autor: ${this._autor}<br>`);
        document.write(`Nº isbn: ${this._isbn}<br>`);
        document.write(`editorial: ${this.editorial}<br>`);
    }
}

// objeto
const persona = new Libro("Cien años de soledad", "Gabriel Garcia Marquez", 9788497592208, "Sudamericana");

// imprimir atributos públicos y privados
persona.mostrarDetalles();

document.write("<hr>");

// modificar atributos encapsulados usando setters y obtenerlos con getters
persona.establecertitulo("Mientras llueve"); // setter
document.write(`titulo: ${persona.obtenertitulo()}<br>`); // getter
persona.establecerautor("Fernando Soto AparicioPerez"); // setter
document.write(`autor: ${persona.obtenerautor()}<br>`); // getter
persona.establecerisbn(9789583002823); // setter
document.write(`Nº isbn: ${persona.obtenerisbn()}<br>`); // getter
document.write(`editorail: ${persona.editorial}<br>`); // público
