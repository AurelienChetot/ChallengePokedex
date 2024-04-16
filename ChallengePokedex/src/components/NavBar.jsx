import React from "react";

function NavBar({ onClickPrev, onClickNext, showPrev, showNext }) {
  return (
    <div>
      {showPrev && <button onClick={onClickPrev}>Précédent</button>}
      {showNext && <button onClick={onClickNext}>Suivant</button>}
    </div>
  );
}

export default NavBar;
