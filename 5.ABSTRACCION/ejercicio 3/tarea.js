// Clase abstracta TareaEmpleado
class TareaEmpleado {
  realizarTarea() {
      throw new Error("Este método debe ser implementado");
  }
}

// Clase concreta Ingeniero
class Ingeniero extends TareaEmpleado {
  realizarTarea() {
      return "El ingeniero está diseñando un puente.";
  }
}

// Clase concreta Doctor
class Doctor extends TareaEmpleado {
  realizarTarea() {
      return "El doctor está diagnosticando a un paciente.";
  }
}

// Uso de las clases
const ingeniero = new Ingeniero();
console.log(ingeniero.realizarTarea());

const doctor = new Doctor();
console.log(doctor.realizarTarea());

// Mostrar resultados en el HTML
document.getElementById('tareaIngeniero').innerText = `Tarea del ingeniero: ${ingeniero.realizarTarea()}`;
document.getElementById('tareaDoctor').innerText = `Tarea del doctor: ${doctor.realizarTarea()}`;