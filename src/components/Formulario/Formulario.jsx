import { useState } from "react";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    //Creamos los 3 estados para trabajar con los valores del formulario. 

    //Creamos una función manejadora del formulario. 

    const manejadorFormulario = (event) => {
        event.preventDefault();

        addDoc(collection(db, "usuarios"), {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        })

        //addDoc es una función que me permite agregar un documento nuevo en mi colección.

        setNombre("");
        setApellido("");
        setTelefono("");
    }

  return (
    <form onSubmit={ manejadorFormulario }>
        <h2>Formulario de Contacto </h2>

        <label htmlFor=""> Nombre </label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label htmlFor=""> Apellido </label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

        <label htmlFor=""> Celular </label>
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

        <button type="submit"> Enviar </button>
    </form>
  )
}

export default Formulario