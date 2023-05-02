import React from 'react'
import styles from '../../../styles/styles.module.css'

export const Card = ({title, body, userId}) => {
    return (
        <div className={styles.cardFlex}>
            <h3>{title}</h3>
            <p className={styles.content}>{body}</p>
            <div className={styles.footer}>
                <button>Ir</button>
                <span>&#9829;</span>
            </div>
        </div>
    )
}
