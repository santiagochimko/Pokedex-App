import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

export const colorsByType = {
  normal: { borderColor: "#AAA67F", backgroundColor: "#AAA67F", color: "#AAA67F" },
  fighting: { borderColor: "#C12239", backgroundColor: "#C12239", color: "#C12239" },
  flying: { borderColor: "#A891EC", backgroundColor: "#A891EC", color: "#A891EC" },
  poison: { borderColor: "#A43E9E", backgroundColor: "#A43E9E", color: "#A43E9E" },
  ground: { borderColor: "#DEC16B", backgroundColor: "#DEC16B", color: "#DEC16B" },
  rock: { borderColor: "#B69E31", backgroundColor: "#B69E31", color: "#B69E31" },
  bug: { borderColor: "#A7B723", backgroundColor: "#A7B723", color: "#A7B723" },
  ghost: { borderColor: "#70559B", backgroundColor: "#70559B", color: "#70559B" },
  steel: { borderColor: "#B7B9D0", backgroundColor: "#B7B9D0", color: "#B7B9D0" },
  fire: { borderColor: "#F57D31", backgroundColor: "#F57D31", color: "#F57D31" },
  water: { borderColor: "#6493EB", backgroundColor: "#6493EB", color: "#6493EB" },
  grass: { borderColor: "#74CB48", backgroundColor: "#74CB48", color: "#74CB48" },
  electric: { borderColor: "#F9CF30", backgroundColor: "#F9CF30", color: "#F9CF30" },
  psychic: { borderColor: "#F85888", backgroundColor: "#FA92B2", color: "#F85888" },
  ice: { borderColor: "#9AD6DF", backgroundColor: "#9AD6DF", color: "#9AD6DF" },
  dragon: { borderColor: "#7037FF", backgroundColor: "#7037FF", color: "#7037FF" },
  dark: { borderColor: "#75574C", backgroundColor: "#75574C", color: "#75574C" },
  fairy: { borderColor: "#E69EAC", backgroundColor: "#E69EAC", color: "#E69EAC" },
  unknown: { borderColor: "#68A090", backgroundColor: "#68A090", color: "#68A090" },
  shadow: { borderColor: "#444444", backgroundColor: "#444444", color: "#444444" },
};

function Cards({ filterValue, sortBy }) {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
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
            type: poke.types[0].type.name, // Se asume que solo hay un tipo por Pokémon
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
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "id") {
      return a.id - b.id;
    } else {
      return 0;
    }
  });

  return (
    <div className="cardsContainer" style={{ borderColor: "#000000" }}>
      {sortedPokemones.map((pokemon) => {
        const { borderColor, backgroundColor, color } =
          colorsByType[pokemon.type] || {};

        return (
          <Link
            key={pokemon.id}
            to={`/pokemons/${pokemon.id}`}
            className="pokemonCards"
            style={{ borderColor }}
          >
            <h2 style={{ color }}>#{pokemon.id}</h2>
            <img src={pokemon.img} alt={pokemon.name} />
            <h1 style={{ backgroundColor }}>{pokemon.name}</h1>
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
