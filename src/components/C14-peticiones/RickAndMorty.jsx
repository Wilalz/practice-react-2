import React from 'react'
import styles from '../../styles/styles.module.css'
import { CharacterRaM } from './CharacterRaM'
import { Title } from '../Title'

export const RickAndMorty = () => {
    return (
        <div className={styles.container}
            id={styles.card_rick}>
            <Title>1. Rick and Morty API</Title>
            <CharacterRaM />
        </div>
    )
}
