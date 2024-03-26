import React from 'react';

function PokemonCard() {
    return (
        <figure>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
        <figcaption>Bulbasaur</figcaption>
        {/* Contenu de la carte Pokémon */}
        </figure>
    );
}

export default PokemonCard;