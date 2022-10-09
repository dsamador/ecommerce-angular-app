/* Cuando hacemos referencia a un arreglo de datos
colocamos la palabra en plural */

export interface Employee {
  specialization: Specialization;
  skills: Skill[];
  qualification: Qualification;
  expectedSalary: number;
  experiences: Experience[];
}

interface Specialization {
  id: string;
  name: string;
}
interface Skill {
  id: string;
  name: string;
}
interface Qualification {
  id: string;
  name: string;
}
interface Experience {
  companyName: string;
  period: Period;
}
interface Period {/* Fecha es de tipo number porque viene
en milisegundos en JS */
  from: number;
  to: number;
}
