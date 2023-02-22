import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";

function Actu() {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <h2>Fil Actu</h2>
      <Footer />
    </div>
  );
}
export default Actu;
