import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styles from '../../../styles/styles.module.css'
import { Title } from '../../Title'


// import los componentes
import { List } from './List';
import { SearchBox } from './SearchBox';
import { CrearPost } from './CrearPost';

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const ENDPOINT_POST = "posts/";

// Ejemplo
// Se recomienda manejar un .env "environment" donde se guarden las variables de entorno: BASE_URL, API_TOKEN, SECRET, GITHUB_ID
const API_TOKEN = "456456456456456456456456";


export const Crud = () => {
    const [posts, setPosts] = useState([]);        // data traida de la api posts
    const [loading, setLoading] = useState(false);  // mensaje de "cargando datos"
    const [search, setSearch] = useState("");       // dato del input de "buscar"
    const [showForm, setShowForm] = useState(false);   // mostrar u ocultar el form
    const [showCreate, setShowCreate] = useState(false);   // mostrar u ocultar el form
    const [WasCreated, setWasCreated] = useState(false)

// manejadores de eventos
    const handlerSearch = (e) => {
        setSearch(e.target.value);
    }

    const handlerPosts = (e) => {
        setShowCreate(false);
        setShowForm(true);
    }

    const handlerCreate = (e) => {
        setShowForm(false);
        setShowCreate(true);
    }

    const handlerOnSubmit = async (formData) => {
        createPost(formData)
    }


// ****************   metodos para obtener (get) los datos de la API ***********************
//      En este caso estamos utilizando una libreria externa llamada "axios" en vez del tradicional "fetch" de JavaScript
//      Llamar a todos los posts de la API (en la practica se utiliza para cargar alguna informacion al montar el componente, por ejemplo, productos favoritos)
const getPosts = async () => {
    try {
            setLoading(true);
            const { data } = await axios.get(`${BASE_URL}${ENDPOINT_POST}`)
            //console.log("data", data)
            setPosts(data)
        } catch (error) {
            console.log("error", error);
        } finally {
            setTimeout(setLoading(false), 3000);
        }
    }

//      Llamar al post que tenga el "id" que entra por parametro
    const getPostsById = async (id) => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${BASE_URL}${ENDPOINT_POST}${id}`)
            //console.log("data", data)
            // lo pongo dentro de un array, porque en la definicion del post establecimos que recibia un array
            setPosts([data])

        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    }

// ****************  metodos para enviar (post) los datos a la API *************************
    const createPost = async (formData) => {
        try {
            //console.log(formData)
            const response = await axios.post(
                `${BASE_URL}${ENDPOINT_POST}`,
                // body
                formData
                )
                console.log("post creado:", response)

            } catch (error) {
                console.log("error", error);
            }
        }



// **************** metodos para eliminar (delete) los datos a la API **********************
    const deletePost = async (id) => {
        try {
            console.log(id)
            const response = await axios.delete(`${BASE_URL}${ENDPOINT_POST}${id}`)
            console.log("post eliminado:",id, response)
            getPosts();

            } catch (error) {
                console.log("error", error);
            }
        }




// Hooks useEffect
//      llama a getPosts para que cargue todos los posts al montarse el componente
    useEffect(()=>{
        getPosts();
    },[])

    //      llama a getPostById cuando se modifica el estado "search" (input de busqueda)
    useEffect(()=>{
        if(search) {
            getPostsById(search);
        } else {
            getPosts();
        }
    },[search])


// estructura del html
    return (
        <div className={styles.container}>
            <Title>3. CRUD a una API</Title>
            <div>
                <button
                    onClick={() => handlerPosts()}>
                    Lista de posts
                </button>
                <button
                    onClick={() => handlerCreate()}>
                    Crear post
                </button>

                {showForm &&
                    <div>
                        <h3>Listado de posts</h3>
                        <SearchBox
                        onChange={handlerSearch}
                        value={search}
                        />
                        <button onClick={deletePost}>Delete el post</button>
                        {loading ?
                            <p>Loading...</p>
                            : <List list={posts}/>
                        }
                    </div>
                }
                {showCreate && <CrearPost
                    handlerOnSubmit={handlerOnSubmit}
                    setWasCreated={setWasCreated}
                />}
                {WasCreated && <div>
                        <p>El post fue creado con exito</p>
                    </div>
                }

                <p className={styles.error_msg}>**** En el Lista de posts: Hacer funcionar el boton de eliminar post *** </p>
                <p className={styles.error_msg}>**** En el crear post: Eliminar el mensaje de post creado y se limpiar el formulario *** </p>

            </div>

        </div>
    )
}
