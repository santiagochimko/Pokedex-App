import { useState } from 'react'
import './Header.css'

const Header = () => {

    return (
    <header>
        <nav>
            <div className='headNav'>
                <img src="./src/Images/Pokeball.png" width="50px" height="50px" alt="pokeball" />
                <h1>Pokedex</h1>
                <button>ordenar</button>
            </div>
            <input type="text" />
        </nav>
    </header>
    )
}

export default Header