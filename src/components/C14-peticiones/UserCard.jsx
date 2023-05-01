import React, { useState } from 'react'
import styles from '../../styles/styles.module.css'
import { Title } from '../Title'
import { User } from './User'

export const UserCard = () => {
    const [id, setId] = useState (1);

    const handlerClickPrev = () => {
        console.log("id", id);
        setId(id-1);
    }

    const handlerClickNext = () => {
        console.log("id", id);
        setId(id+1);
    }


    return (
        <div className={styles.container}>
            <Title>2. User API</Title>
            <button onClick={() => handlerClickPrev()}>Previous</button>
            <button onClick={() => handlerClickNext()}>Next</button>
            <User userId={id}></User>

            <p className={styles.error_msg}>*** Solucionar para que solo se pueda seleccionar desde el 1 hasta el 10 *** </p>
        </div>
    )
}
