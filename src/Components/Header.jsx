
import React, { useState } from 'react'
import './Header.css'

const Header = ({ handleFilterChange, handleSortChange}) => {

const[filterValue, setFilterValue] = useState("");

const handleInputChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    handleFilterChange(value);
}

const handleSortClick = () => {
    handleSortChange();
}

    return (
    <header>
        <nav>
            <div className='headNav'>
                <img src="./src/Images/Pokeball.png" width="50px" height="50px" alt="pokeball" />
                <h1>Pokedex</h1>
                <button onClick={handleSortClick}>ordenar</button>
            </div>
            <input
             type="text" 
             value={filterValue}
             onChange={handleInputChange}
             placeholder='Search'/>
        </nav>
    </header>
    )
}

export default Header