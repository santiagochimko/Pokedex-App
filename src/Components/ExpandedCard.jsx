import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ExpandedCard.css";
import arrowLeftImage from "../Images/arrow-left.svg";
import arrowRightImage from "../Images/arrow-right.svg";

const ExpandedCard = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const navigate = useNavigate();

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

  const { name, height, weight, types, sprites, stats, abilities } = pokemonDetails;

  const handlePreviousCard = () => {
    const previousId = parseInt(id, 10) - 1;
    navigate(`/pokemons/${previousId}`);
  };

  const handleNextCard = () => {
    const nextId = parseInt(id, 10) + 1;
    navigate(`/pokemons/${nextId}`);
  };
  console.log(abilities[0].ability.name)

  return (
    <div className="expandedCardContainer">
      <div className="expandedCard">
        <div className="expandedCardHeader">
          <div>
          <Link to="/">
            <button className="closeButton"><img src={arrowLeftImage} alt="close modal" /></button>
          </Link>
          <h2>{name}</h2>
          </div>
          <p>#{id}</p>
        </div>
        <div className="imagePosition">
        {id !== "1" && (
          <button className="navButton" onClick={handlePreviousCard}>
            <img src={arrowLeftImage} alt="Previous" />
          </button>
        )}
        <img src={sprites.other.dream_world.front_default} alt={name} className="pokemonPhoto" />
        <button className="navButton" onClick={handleNextCard}>
          <img src={arrowRightImage} alt="Next" />
        </button>
        </div>
        <p>{types.map((type) => type.type.name).join(" - ")}</p>
        <div className="specs">
          <p>Weight: {weight}</p>
          <p>Height: {height}</p>
          <div>
            <p>Moves:</p>
            {abilities.map((ability) => 
            <p>{ability.ability.name}</p>
            )}
          </div>
        </div>
        <p>Stats:</p>
        <div className="stats">
          <ul className="statsLi">
            {stats.map((stat) => (
              <li key={stat.stat.name} className="liStats">
                <span>
                  {stat.stat.name}: {stat.base_stat}
                </span>
                <div key={stat.base_stat} className="statBarFull">
                  <div
                    className="statBar"
                    style={{ width: `${stat.base_stat}%`, maxWidth:"100%"}}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedCard;
