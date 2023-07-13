import React, { useEffect, useState } from "react";
import './Cards.css'

function Cards({filterValue, sortBy}) {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        const getPokemones = async () => {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
            );
            const listaPokemones = await response.json();
            const { results } = listaPokemones;

            const newPokemones = await Promise.all(results.map(async (pokemon) => {
                const response = await fetch(pokemon.url);
                const poke = await response.json();

                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other.dream_world.front_default
                };
            }));

            setPokemones(newPokemones);
        };

        getPokemones();
    }, []);

    const filteredPokemones = pokemones.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    const sortedPokemones = filteredPokemones.slice().sort((a, b) => {
        if (sortBy === "name"){
            return a.name.localeCompare(b.name);
        } else if (sortBy === "id") {
            return a.id - b.id;
        } else {
            return 0;
        }
    })

    return (
        <div className="cardsContainer">
            {sortedPokemones.map((pokemon => {
                return (
                    <div key={pokemon.id} className="pokemonCards">
                        <span>#{pokemon.id}</span>
                        <img src={pokemon.img} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                    </div>
                );
            }))}
        </div>
    );
}

export default Cards;
