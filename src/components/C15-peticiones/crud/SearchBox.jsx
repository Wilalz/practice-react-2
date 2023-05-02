import React from 'react'

export const SearchBox = ({onChange, value}) => {
    return (
        <div>
            <input 
                type="search" 
                name="searchBox"
                placeholder='Buscar por Id del post'
                onChange={onChange}
                value={value}
            />
        </div>
    )
}
