import React, { useState } from 'react';
import './Header.css';

const Header = ({ handleSortChange, handleInputChange }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleInputOnChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    handleInputChange(value);
  };

  const handleSortClick = () => {
    handleSortChange();
  };

  return (
    <header>
      <nav>
        <div className='headNav'>
        
            <img
              src="./src/Images/Pokeball.png"
              width="50px"
              height="50px"
              alt="pokeball"
            />
          
          <h1>
            Pokedex
          </h1>
          <button onClick={handleSortClick}>ordenar</button>
        </div>
        <input
          type="text"
          value={filterValue}
          onChange={handleInputOnChange}
          placeholder='Search'
        />
      </nav>
    </header>
  );
};

export default Header;

