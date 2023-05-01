import React, { useEffect, useState } from 'react'
import styles from '../../styles/styles.module.css'

const baseURL = "https://jsonplaceholder.typicode.com/users/"

export const User = ({userId}) => {
    const [user, setUser] = useState ({name:"", email:""});
    const [loading, setLoading] = useState (false);


    const getUserData = async () => {
        setLoading(true);
        
        const url = `${baseURL}${userId}`
        //console.log("url", url)
        const user = await fetch(url)
        const userToJson = await user.json();
        // console.log("userToJson", userToJson)
        setUser(userToJson)
        
        setLoading(false);
    }

    useEffect(() => {
        getUserData()
    }, [userId]
    )

    return (
        <div>

            {loading ?
                <p>Cargando datos...</p>
                : user && <p><strong>User {user.id}: </strong><span>{user.name}</span></p>
            }
        </div>
    )
    }
