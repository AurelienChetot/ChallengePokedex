import React from "react";

function NavBar({ onClickPrev, onClickNext, showPrev, showNext }) {
  return (
    <div>
      {/* Rendu conditionnel pour n'afficher le bouton "précédent" que si showPrev est vrai */}
      {showPrev && <button onClick={onClickPrev}>Précédent</button>}
      {/* Rendu conditionnel pour n'afficher le bouton "suivant" que si showNext est vrai */}
      {showNext && <button onClick={onClickNext}>Suivant</button>}
    </div>
  );
}

export default NavBar;
