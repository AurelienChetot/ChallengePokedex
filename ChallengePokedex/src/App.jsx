import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickNext = () => {
    setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
  };

  const handleClickPrev = () => {
    setPokemonIndex(
      (prevIndex) => (prevIndex - 1 + pokemonList.length) % pokemonList.length
    );
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        onClickPrev={handleClickPrev}
        onClickNext={handleClickNext}
        showPrev={pokemonIndex > 0}
        showNext={pokemonIndex < pokemonList.length - 1}
      />
    </div>
  );
}

export default App;
