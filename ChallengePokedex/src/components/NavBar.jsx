import React from "react";

function NavBar({ pokemonList, onClickPokemon }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => onClickPokemon(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
