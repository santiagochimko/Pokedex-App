import React, { useEffect, useState } from "react";
import ExpandedCard from "./ExpandedCard";
import "./Cards.css";

const Cards = () => {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      const listaPokemones = await response.json();
      const { results } = listaPokemones;

      const newPokemones = await Promise.all(
        results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const poke = await response.json();

          return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default,
            url: pokemon.url,
          };
        })
      );

      setPokemones(newPokemones);
    };

    getPokemones();
  }, []);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleClose = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="cardsContainer">
      {pokemones.map((pokemon) => {
        return (
          <div
            className="pokemonCards"
            key={pokemon.id}
            onClick={() => handleCardClick(pokemon)}
          >
            <span>#{pokemon.id}</span>
            <img src={pokemon.img} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        );
      })}
      {selectedPokemon && (
        <ExpandedCard pokemon={selectedPokemon} onClose={handleClose} />
      )}
    </div>
  );
};

export default Cards;
