import React, { useEffect, useState } from 'react'
import styles from '../../styles/styles.module.css'

const baseURL = "https://jsonplaceholder.typicode.com/users"

export const User = ({userId}) => {
    const [user, setUser] = useState ({name:"", email:""});
    const [loading, setLoading] = useState (false);


    const getUserData = async () => {
        setLoading(true);
        
        const url = `${baseURL}${userId}`
        console.log("url", url)
        const user = await fetch(url)
        const userToJson = await user.json();
        console.log("userToJson", userToJson)
        
        
        setLoading(false);
    }

    useEffect(() => {
        getUserData()
    }, []
    )

    return (
        <div>
            <h3>user</h3>
            <p>{userId}</p>

            {loading ?
                <p>Cargando datos...</p>
                : <ul>
                    <li>user</li>
                    {/* {user.map((item) => <li key={item.id}>{item.name}</li>)} */}
                </ul>
            }
        </div>
    )
    }
