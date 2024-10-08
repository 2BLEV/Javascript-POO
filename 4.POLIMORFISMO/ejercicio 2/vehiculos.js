// Clase Padre Vehiculo
class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }

    descripcion() {
        throw new Error("Este método debe ser sobrescrito por las clases hijas");
    }
}

// Clase Carro que hereda de Vehiculo
class Carro extends Vehiculo {
    constructor(marca, modelo, placa) {
        super(marca); // Llama al constructor de la clase padre
        this.modelo = modelo;
        this.placa = placa;
    }

    descripcion() {
        output.innerHTML = ""; // Limpia el contenedor de salida
        output.innerHTML += "Soy un carro<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Placa: ${this.placa}<br><br>`;
    }
}

// Clase Moto que hereda de Vehiculo
class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca); // Llama al constructor de la clase padre
        this.modelo = modelo;
        this.cilindrada = cilindrada;
    }

    descripcion() {
        output.innerHTML = ""; // Limpia el contenedor de salida
        output.innerHTML += "Soy una moto<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Cilindrada: ${this.cilindrada} cc<br><br>`;
    }
}

// Clase Bicicleta que hereda de Vehiculo
class Bicicleta extends Vehiculo {
    constructor(marca, tipo) {
        super(marca); // Llama al constructor de la clase padre
        this.tipo = tipo;
    }

    descripcion() {
        output.innerHTML = ""; // Limpia el contenedor de salida
        output.innerHTML += "bicicleta<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Tipo: ${this.tipo} (montaña, carretera, etc.)<br><br>`;
    }
}

// Función que muestra la descripción de cualquier tipo de vehículo
function mostrarDescripcion(vehiculo) {
    vehiculo.descripcion();
}

// Instancias de cada clase
const objetoCarro = new Carro("Toyota", "Corolla", "ABC123");
const objetoMoto = new Moto("Honda", "CBR600RR", 600);
const objetoBicicleta = new Bicicleta("Trek", "Montaña");

// Llamado al método descripcion() para cada objeto
mostrarDescripcion(objetoCarro);
mostrarDescripcion(objetoMoto);
mostrarDescripcion(objetoBicicleta);


  