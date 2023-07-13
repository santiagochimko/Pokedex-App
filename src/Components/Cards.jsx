import { useEffect, useState } from "react";
import './Cards.css'

function Cards() {

    const [pokemones, setPokemones] = useState([]);
    useEffect(() => {
        const getPokemones = async () => {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
            );
            const listaPokemones = await response.json();
            const { results } = listaPokemones;

            const newPokemones = results.map(async (pokemon) => {

                const response = await fetch((pokemon).url)
                const poke = await response.json()

                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other.dream_world.front_default
                }
            })
            setPokemones(await Promise.all(newPokemones))
        };

        getPokemones();
    }, []);


    return (
        <div className="cardsContainer">
            {pokemones.map(pokemon => {
                return (
                    <div className="pokemonCards">
                        <img src={pokemon.img} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                        <span>{pokemon.id}</span>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Cards