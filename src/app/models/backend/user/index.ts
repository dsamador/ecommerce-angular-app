/* Es mas complejo
por ejemplo en el caso del role necesitamos una estructura
que pueda almacenar un objeto de tipo role ,
para ello creamos una carpeta dentro de user */

import { Employee, Recruiter } from "./roles";
import firebase from "firebase/app";

export interface User {
  uid: string;
  name: string;
  photoURL: string;
  email: string;
  country: string;
  about?: string;
  roleId: string;
  role: Employee | Recruiter;
  created: firebase.firestore.FieldValue;
  updated?: firebase.firestore.FieldValue;
}
