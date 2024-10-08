// Clase Padre Profesional
class Profesional {
  constructor(nombre, especialidad) {
      this.nombre = nombre;
      this.especialidad = especialidad;
  }

  trabajar() {
      throw new Error("Este método debe ser sobrescrito por las clases hijas");
  }
}

// Clase Médico que hereda de Profesional
class Medico extends Profesional {
  constructor(nombre, especialidad, hospital) {
      super(nombre, especialidad); // Llama al constructor de la clase padre
      this.hospital = hospital;
  }

  trabajar() {
      output.innerHTML = ""; // Limpia el contenedor de salida
      output.innerHTML += `El médico ${this.nombre}, especializado en ${this.especialidad}, trabaja en el hospital ${this.hospital} atendiendo a los pacientes.<br><br>`;
  }
}

// Clase Ingeniero que hereda de Profesional
class Ingeniero extends Profesional {
  constructor(nombre, especialidad, empresa) {
      super(nombre, especialidad); // Llama al constructor de la clase padre
      this.empresa = empresa;
  }

  trabajar() {
      output.innerHTML = ""; // Limpia el contenedor de salida
      output.innerHTML += `El ingeniero ${this.nombre}, especializado en ${this.especialidad}, trabaja en la empresa ${this.empresa} diseñando y desarrollando proyectos.<br><br>`;
  }
}

// Clase Docente que hereda de Profesional
class Docente extends Profesional {
  constructor(nombre, especialidad, instituto) {
      super(nombre, especialidad); // Llama al constructor de la clase padre
      this.instituto = instituto;
  }

  trabajar() {
      output.innerHTML = ""; // Limpia el contenedor de salida
      output.innerHTML += `El docente ${this.nombre}, especializado en ${this.especialidad}, trabaja en el instituto ${this.instituto} enseñando a los estudiantes.<br><br>`;
  }
}

// Función que muestra la información técnica de cualquier profesional
function trabajarProfesional(profesional) {
  profesional.trabajar();
}

// Instancias de cada clase
const objetoMedico = new Medico("Dr. Juan Pérez", "Cardiología", "Hospital Central");
const objetoIngeniero = new Ingeniero("Ing. María García", "Ingeniería Civil", "Constructora ABC");
const objetoDocente = new Docente("Prof. Carlos Fernández", "Matemáticas", "Escuela Nacional");

// Llamado al método trabajar() para cada objeto
trabajarProfesional(objetoMedico);
trabajarProfesional(objetoIngeniero);
trabajarProfesional(objetoDocente);
