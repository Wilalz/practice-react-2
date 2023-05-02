import React from 'react'
import { Card } from './Card'
import styles from '../../../styles/styles.module.css'

export const List = ({list}) => {
    return (

        <div className={styles.containerFlex}>
            {list.map((item) => <Card 
                key={item.id}
                title={item.title}
                body={item.body}
                userId={item.userId}
                />
            )}
        </div>
    )
}
