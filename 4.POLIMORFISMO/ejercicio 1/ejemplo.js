// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Aprendiz
class Aprendiz {
    constructor(nombres, apellidos, cedula, sexo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.sexo = sexo;
        this.formacion = prompt("Programa de formación: ");
        this.regional = prompt("Regional: ");
    }

    mostrarInfo() {
        output.innerHTML = "";
        output.innerHTML += `Hola, soy un aprendiz SENA<br>`;
        output.innerHTML += `${this.nombres} ${this.apellidos}<br>`;
        output.innerHTML += `CC: ${this.cedula}<br>`;
        output.innerHTML += `Sexo: ${this.sexo}<br>`;
        output.innerHTML += `Estudiante del programa: ${this.formacion} de la Regional ${this.regional}<br><br>`;
    }
}

// Clase Instructor
class Instructor {
    constructor(nombres, apellidos, cedula, area) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.area = area;
    }

    mostrarInfo() {
        output.innerHTML = "";
        output.innerHTML += `Hola, soy un instructor del SENA<br>`;
        output.innerHTML += `${this.nombres} ${this.apellidos}<br>`;
        output.innerHTML += `CC: ${this.cedula}<br>`;
        output.innerHTML += `Área de instrucción: ${this.area}<br><br>`;
    }
}

// Clase Coordinador
class Coordinador {
    constructor(nombres, apellidos, cedula, departamento) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.departamento = departamento;
    }

    mostrarInfo() {
        output.innerHTML = "";
        output.innerHTML += `Hola, soy un coordinador del SENA<br>`;
        output.innerHTML += `${this.nombres} ${this.apellidos}<br>`;
        output.innerHTML += `CC: ${this.cedula}<br>`;
        output.innerHTML += `Departamento: ${this.departamento}<br><br>`;
    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(persona) {
    persona.mostrarInfo();
}

// Instancias de la clase
const objetoAprendiz = new Aprendiz("Samuel Elias", "Vega Barrios", 123112846, "Masculino");
const objetoInstructor = new Instructor("Laura", "Rodríguez", 98705421, "Programación");
const objetoCoordinador = new Coordinador("Carlos", "Martínez", 123456789, "Recursos Humanos");

// Llamada al método mostrarInfo para cada objeto
mostrarInformacion(objetoAprendiz);
mostrarInformacion(objetoInstructor);
mostrarInformacion(objetoCoordinador);
