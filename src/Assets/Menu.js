import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  //Fonction Log out
  const logOut = () => {
    if (localStorage) {
      localStorage.removeItem("@userToken");
      navigate("/");
      alert("Vous êtes maintenant déconnecté(e).");
    }
    console.log("je marche");
  };

  //Return de fin
  return (
    <div className="menuContent">
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
              Fil d'actus
            </Link>
          </div>
          <div className="ongletPublier">
            <Link to="/Poster" className="links">
              Publier
            </Link>
          </div>
          <div className="ongletGetOff">
            <button className="buttonLogOut" onClick={logOut}>
              OFF
            </button>
          </div>
        </div>
        <div className="border"></div>
      </nav>
    </div>
  );
}
export default Menu;
