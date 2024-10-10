class FormaGeometrica {
    calcularArea() {
        throw new Error("Este método debe ser implementado");
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

// Uso de las clases
const cuadrado = new Cuadrado(5);
console.log(`Área del cuadrado: ${cuadrado.calcularArea()}`);

const circulo = new Circulo(3);
console.log(`Área del círculo: ${circulo.calcularArea()}`);

// Mostrar los resultados en el HTML
document.getElementById('resultadoCuadrado').innerText = `Área del Cuadrado: ${cuadrado.calcularArea()} cm²`;
document.getElementById('resultadoCirculo').innerText = `Área del Círculo: ${circulo.calcularArea().toFixed(2)} cm²`;