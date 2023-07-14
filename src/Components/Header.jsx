import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ handleSortChange, handleInputChange }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleInputOnChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    // Llamar a la función de filtrado de App
    handleInputChange(value);
  };

  const handleSortClick = () => {
    handleSortChange();
  };

  return (
    <header>
      <nav>
        <div className='headNav'>
        <Link to='/'>
            <img
              src="./src/Images/Pokeball.png"
              width="50px"
              height="50px"
              alt="pokeball"
            />
          </Link>
          <h1>
            <Link to='/'>Pokedex</Link>
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

