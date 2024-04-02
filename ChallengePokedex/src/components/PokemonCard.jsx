import React from "react";
import PropTypes from "prop-types";

// const pokemonList = [
//   {
//     name: "Bulbasaur",
//     imgSrc:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//   },
//   {
//     name: "mew",
//   },
// ];

function PokemonCard({ pokemon }) {
  // console.log(props);
  // const pokemon = pokemonList[0];
  // const pokemon = { name: "mew" };

  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
