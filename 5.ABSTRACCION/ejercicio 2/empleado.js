// Clase abstracta Empleado
class Empleado {
    calcularSalario() {
        throw new Error("Este método debe ser implementado");
    }
}

// Clase concreta para empleados a tiempo completo
class EmpleadoTiempoCompleto extends Empleado {
    constructor(salarioMensual) {
        super();
        this.salarioMensual = salarioMensual;
    }

    calcularSalario() {
        return this.salarioMensual;
    }
}

// Clase concreta para empleados por horas
class EmpleadoPorHoras extends Empleado {
    constructor(horasTrabajadas, tarifaPorHora) {
        super();
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    calcularSalario() {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}

// Uso de las clases
const empleadoTiempoCompleto = new EmpleadoTiempoCompleto(3000);
console.log(`Salario del empleado a tiempo completo: ${empleadoTiempoCompleto.calcularSalario()}`);

const empleadoPorHoras = new EmpleadoPorHoras(120, 15);
console.log(`Salario del empleado por horas: ${empleadoPorHoras.calcularSalario()}`);

// Mostrar resultados en el HTML
document.getElementById('salarioCompleto').innerText = `Salario del empleado a tiempo completo: ${empleadoTiempoCompleto.calcularSalario()} USD`;
document.getElementById('salarioHoras').innerText = `Salario del empleado por horas: ${empleadoPorHoras.calcularSalario()} USD`;