import React, { useState } from 'react'
import styles from '../../styles/styles.module.css'
import { Title } from '../Title'
import { User } from './User'

export const UserCard = () => {
    const [id, setId] = useState (1);

    const handlerClick = () => {
        console.log("id", id);
        setId(id+1);

    }


    return (
        <div className={styles.container}>
            <Title>2. User API</Title>
            <button onClick={() => handlerClick()}>Cambiar Id</button>
            <User userId={id}></User>
        </div>
    )
}
