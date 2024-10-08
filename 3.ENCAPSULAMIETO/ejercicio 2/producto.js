// Clase Productos con atributos privados
class Productos {
    // método constructor
    constructor(nombres, precios, cantidad, categoria) {
        this._nombres = nombres; // privado (convención en JS usando _)
        this._precios = precios; // privado
        this.cantidad = cantidad; // privado
        this.categoria = categoria; // público
    }

    // método getter para nombres
    obtenerNombres() {
        return this._nombres;
    }

    // método getter para precios
    obtenerprecios() {
        return this._precios;
    }


    // método setter para nombres
    establecerNombres(nuevoNombres) {
        this._nombres = nuevoNombres;
    }

    // método setter para precios
    establecerprecios(nuevoprecios) {
        this._precios = nuevoprecios;
    }

    // método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`\nNombres: ${this._nombres}<br>`);
        document.write(`precios: ${this._precios}<br>`);
        document.write(`Nº cantidad: ${this.cantidad}<br>`);
        document.write(`Fecha nacimiento: ${this.categoria}<br>`);
        
    }
}

// objeto
const producto = new Productos("Jorge", 20000,5, "alimentos");

// imprimir atributos públicos y privados
producto.mostrarDetalles();

document.write("<hr>");

// modificar atributos encapsulados usando setters y obtenerlos con getters
producto.establecerNombres("Carlos"); // setter
document.write(`Nombre: ${producto.obtenerNombres()}<br>`); // getter
producto.establecerprecios(30000); // setter
document.write(`precio: ${producto.obtenerprecios()}<br>`); // getter
document.write(`cantidad: ${producto.cantidad}<br>`); // getter
document.write(`categoria: ${producto.categoria}<br>`); // público

