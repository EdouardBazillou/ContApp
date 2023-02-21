import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Actu() {
  return (
    <div>
      <h2>Fil Actu</h2>
      <nav>
        <Link to="/compte">Mon Compte</Link>
        <Link to="/">Me Connecter</Link>
      </nav>
    </div>
  );
}
export default Actu;
