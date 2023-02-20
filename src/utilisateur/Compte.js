import { Link } from "react-router-dom";
function compte() {
  return (
    <div>
      <h2>Compte</h2>
      <nav>
        <Link to="/">Se Connecter</Link>
        <Link to="/filActu">Mon Fil Actu</Link>
      </nav>
    </div>
  );
}
export default compte;
