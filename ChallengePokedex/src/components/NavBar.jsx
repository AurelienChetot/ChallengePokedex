import PropTypes from "prop-types";

function NavBar({ pokemonList, onClickPokemon }) {
  const handleClick = (index) => {
    const selectedPokemon = pokemonList[index];
    onClickPokemon(index);
    if (selectedPokemon.name.toLowerCase() === "pikachu") {
      alert("Pika Pika!!!!");
    }
  };
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string, // Ajoute d'autres PropTypes si nécessaire
    })
  ).isRequired,
  onClickPokemon: PropTypes.func.isRequired,
};

export default NavBar;
