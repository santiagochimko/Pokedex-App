// import React, { useEffect, useState } from "react";
// import "./ExpandedCard.css";

// const ExpandedCard = ({ pokemones, pokemon, onClose, onPrev, onNext }) => {
//   const [pokemonDetails, setPokemonDetails] = useState(null);

//   useEffect(() => {
//     const getPokemonDetails = async () => {
//       const response = await fetch(pokemon.url);
//       const data = await response.json();
//       setPokemonDetails(data);
//     };

//     getPokemonDetails();
//   }, [pokemon]);

//   if (!pokemonDetails) {
//     return <div>Loading...</div>;
//   }

//   const { id, name, height, weight, types } = pokemonDetails;

//   return (
//     <div className="expandedCardContainer">
//       <div className="expandedCard">
//         <div className="expandedCardHeader">
//           <h2>{name}</h2>
//           <button className="closeButton" onClick={onClose}>
//             X
//           </button>
//         </div>
//         <img src={pokemon.img} alt={pokemon.name} />
//         <p>ID: {id}</p>
//         <p>Height: {height}</p>
//         <p>Weight: {weight}</p>
//         <p>Types: {types.map((type) => type.type.name).join(", ")}</p>
//         <div className="navigationButtons">
//           <button className="navButton" onClick={onPrev}>
//             &lt;
//           </button>
//           <button className="navButton" onClick={onNext}>
//             &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpandedCard;

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
      console.log(data);
    };

    getPokemonDetails();
  }, [id]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  const { name, height, weight, types, sprites } = pokemonDetails;

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
      </div>
    </div>
  );
};

export default ExpandedCard;
