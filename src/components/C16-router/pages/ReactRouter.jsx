import React from 'react'
import styles from "../../../styles/styles.module.css"
import { Title } from '../../Title'


export const ReactRouter = () => {
    return (
        <div className={styles.container}>
            <Title>React router</Title>
            <p>visita &#32;
                <a 
                    href="https://reactrouter.com/en/main/start/tutorial"
                    target='_blank' 
                    rel="noopener noreferrer"
                    >
                    React Router Tutorial
                    
                </a>

            </p>


        </div>
    )
}
