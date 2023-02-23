import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav>
        <div className="navBar">
          <div className="contAppHome">
            <Link to="/" className="links">
              ContApp
            </Link>
          </div>
          <div className="ongletConnection">
            <Link to="/Login" className="links">
              Me connecter
            </Link>
          </div>
          <div className="ongletProfil">
            <Link to="/profil" className="links">
              Mon profil
            </Link>
          </div>
          <div className="ongletActu">
            <Link to="/filActu" className="links">
              Mon fil d'actu
            </Link>
          </div>
          <div className="ongletPublier">
            <Link to="/Poster" className="links">
              Publier
            </Link>
          </div>
        </div>
        <div className="border"></div>
      </nav>
    </div>
  );
}
export default Menu;
