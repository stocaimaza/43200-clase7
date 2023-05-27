import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
//Vamos a importar estas dos funciones de la librería Firebase. 
//initializeApp = esta función la utilizo para INICIAR LA CONEXIÓN CON FIREBASE. 
//getFirestore = se utiliza para obtener una instancia de Firestore.

//Estamos trabajando con un objeto con toda nuestra información de la cuenta. Acá se incluye la key personal de acceso a la BD. 

const firebaseConfig = {
  apiKey: "AIzaSyAhI997KMWW53YJU55nlrbVmWUZn7t3-co",
  authDomain: "supermercado-marolio.firebaseapp.com",
  projectId: "supermercado-marolio",
  storageBucket: "supermercado-marolio.appspot.com",
  messagingSenderId: "259909973686",
  appId: "1:259909973686:web:416b419155f84188b59817"
};

//Inicializamos Firebase y se pasa la configuración como argumento. Esto devuelve una instancia de Firebase. 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//Exportamos esta referencia para que este disponible en toda nuestra aplicación. 