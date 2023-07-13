import React, { useEffect, useState } from "react";
import "./ExpandedCard.css";

const ExpandedCard = ({ pokemones, pokemon, onClose, onPrev, onNext }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const getPokemonDetails = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setPokemonDetails(data);
    };

    getPokemonDetails();
  }, [pokemon]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  const { id, name, height, weight, types } = pokemonDetails;

  return (
    <div className="expandedCardContainer">
      <div className="expandedCard">
        <div className="expandedCardHeader">
          <h2>{name}</h2>
          <button className="closeButton" onClick={onClose}>
            X
          </button>
        </div>
        <img src={pokemon.img} alt={pokemon.name} />
        <p>ID: {id}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Types: {types.map((type) => type.type.name).join(", ")}</p>
        <div className="navigationButtons">
          <button className="navButton" onClick={onPrev}>
            &lt;
          </button>
          <button className="navButton" onClick={onNext}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedCard;
