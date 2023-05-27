import './Productos.css';
import { useState, useEffect } from 'react';
//Importamos los  hooks que vamos a utilizar. 

//Importamos las funciones de Firebase que necesitas para mostrar los productos. 

import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore";
//getDocs me permite obtener los documentos de una colección. 
//collection me permite obtener una colección. 
//query la uso cuando quiero generar una consulta. 
//where la uso para agregar filtros a mis consultas. 

import { db } from "../../services/config";


const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //const misProductos = query(collection(db, "inventario"));

        //Si quisiera filtrar puedo usar where:
        const misProductos = query(collection(db, "inventario"),where("precio", "<", 3000));

        getDocs(misProductos)
            .then((respuesta) => {
                setProductos(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                //Creo un nuevo array que contenga los datos del producto y además el id. 
            })
    }, [productos])
    //Obtengo los datos cuando se monta el componente. 

    //MODIFICACIÓN: Quiero descontar stock cada vez que hago click en "Comprar". 

    const descontarStock = async (producto) => {
        const productoRef = doc(db, "inventario", producto.id);
        const nuevoStock = producto.stock - 1;

        await updateDoc(productoRef, {stock: nuevoStock});

    }

    return (
        <>
            <h2>Productos</h2>
            <div className='productos-container'>
                {
                    productos.map((producto) => (
                        <div className='producto-card' key={producto.id}>
                            <h2> {producto.nombre} </h2>
                            <p> Precio: $ {producto.precio} </p>
                            <p> Stock: {producto.stock} </p>
                            <button onClick={()=> descontarStock(producto)}> Comprar </button>
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Productos