import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from '../../../styles/styles.module.css'

// otra manera de manejar el enrutamiento 
import { useNavigate } from 'react-router-dom'


export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    
    const navigate = useNavigate();
    return (
        <div id='error-page'>
            {/* Opcion 1 ****** hacerlo con una ruta normal */}
            {/* <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link to="/home">Back to home</Link>
                    </li>
                </ul>
            </nav> */}

            {/* Opcion 2 ****** hacerlo con el hook useNavigate */}
            <button onClick={()=> navigate('/home')}>Back to home</button>
            <h1>Oops! te equivocaste de url</h1>
            <p>Sorry, an unexpected error has occurred</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
