import React, { useState } from 'react'

export const CrearPost = ({handlerOnSubmit, setWasCreated}) => {

    const [form, setForm] = useState({});
    

    const handlerChange = (e) => {
        //console.log("e.target", e.target)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        handlerOnSubmit(form)
        setWasCreated(true);
        
    }

    // console.log("form", form)

    return (
        <div>
            <h3>Crear un post</h3>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="title"></label>
                <input 
                    type="text" 
                    placeholder='Define un titulo'
                    id='title'
                    name='title'
                    value={form.title || ''}
                    onChange={handlerChange}
                    />
                <br />
                <label htmlFor="body"></label>
                <input 
                    type="text" 
                    placeholder='Define un cuerpo'
                    id='body'
                    name='body'
                    value={form.body || ''}
                    onChange={handlerChange}
                />
                <input type="submit"/>

                
            </form>
        </div>
    )
}
