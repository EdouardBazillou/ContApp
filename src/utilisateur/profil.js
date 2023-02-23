import { Link } from "react-router-dom";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";

function Profil() {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <p>Vous devez vous connecter pour visualiser votre profil.</p>
      <Footer />
    </div>
  );
}
export default Profil;
