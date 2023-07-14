import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom"
import ExpandedCard from "./ExpandedCard";
import "./Cards.css";

function Cards({filterValue, sortBy}) {
  const [pokemones, setPokemones] = useState([]);

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setCurrentIndex(pokemones.findIndex((p) => p.id === pokemon.id));
  };

  const handleClose = () => {
    setSelectedPokemon(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pokemones.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pokemones.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="cardsContainer">
      {sortedPokemones.map((pokemon) => {
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
        <ExpandedCard
          pokemones={pokemones}
          pokemon={pokemones[currentIndex]}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Cards;