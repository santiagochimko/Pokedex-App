import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ExpandedCard.css";

const ExpandedCard = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const getPokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonDetails(data);
    };

    getPokemonDetails();
  }, [id]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  const { name, height, weight, types, sprites, stats } = pokemonDetails;



  return (
    <div className="expandedCardContainer">
      <div className="expandedCard">
        <div className="expandedCardHeader">
          <h2>{name}</h2>
          <Link to="/">
            <button className="closeButton">X</button>
          </Link>
        </div>
        <img src={sprites.other.dream_world.front_default} alt={name} />
        <p>ID: {id}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Types: {types.map((type) => type.type.name).join(", ")}</p>
        <p>Stats:</p>
        <div className="stats">
          <ul className="statsLi">
            {stats.map((stat) => (
              <li key={stat.stat.name} className="liStats">
                <span>
                  {stat.stat.name}: {stat.base_stat}
                </span>
                <div key={stat.base_stat} className="statBarFull">
                  <div className="statBar" style={{ width: `${stat.base_stat}%` }}>
                  </div>
                </div>
              </li>
              
            ))}
          </ul>
          <div>

          </div>

        </div>
      </div>
    </div >
  );
};

export default ExpandedCard;
