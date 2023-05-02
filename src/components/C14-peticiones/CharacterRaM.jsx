import React, { useState, useEffect } from 'react'
import styles from '../../styles/styles.module.css'

let apiRickAndMorty = "https://rickandmortyapi.com/api/character/?page=1";


export const CharacterRaM = () => {
// 1. definir los estados
    const [lista, setLista]=useState([]);
    const [loading, setLoading]=useState(false);

// 2. Definir la funcion que va a optener la data de la API
    // defino que la funcion es asincronica con async
    const getData = async () => {
        // establezco el loading en true para que se muestre segun mi logica el return
        setLoading(true)

        // El fetch por defecto hace un GET a la url
        //      Puedo hacerlo por medio de promesas (.then y .catch)
        //      o con el async y el await
        // Otra opcion es usar "axios"
        // La promesa que me va a dar el "fetch" que la espere con el "await", y cuando la optenga se la asigna a la variable "respuesta"
        const respuesta = await fetch(apiRickAndMorty);

        // formatear la respuesta a tipo json para poderlo iterar
        const respuestaToJson = await respuesta.json()

        // recuerde imprimir la data para ver como llega, que atributos y que datos tiene para que lo pueda usar luego
        // console.log("respuestaToJson: ", respuestaToJson)

        // El atributo results que recibimos de la API se lo asigna al estado "lista"
        setLista(respuestaToJson.results);

        //reestablesco el loading en false para que se vuelva a ocultar segun mi logica del return
        // en este caso está encapsulado en un setTimeout para generar 1000 milisegundos (1 segundo) de espera para ejecutar el setLoadging(false)
        setTimeout(() => setLoading(false), 1000);
        
    }

// 3. Uso el useEffect para llamar la funcion getData()
//      En este caso tiene el array de dependencias vacio, así que solo se ejecuta 1 sola vez, luego del montaje del componente.
    useEffect(() => {
        getData();    
    
    }, [])
    






// 4. Definir la estructura html que va a devolver el componente
    return (
        <div>
            <h3>Listado</h3>
            {/* hace una validacion, si loading es "true" entonces muestra un mensaje de cargando datos */}
            {/* como luego el loading se va a tranformar en "false", entonces, genera una lista */}
            {/* finalmente hace un map para recorrrer el estado "lista" que ya tiene la data cargada, y genera un li con la informacion del nombre, recordar definir el atributo key a cada elemento*/}
            {loading ?
                <p>Cargando datos...</p>
                : <ul className={styles.listas_simples}>
                    {lista.map((item) => <li key={item.id}>{item.name}</li>)}    
                </ul>
            }


        </div>
    )
}
