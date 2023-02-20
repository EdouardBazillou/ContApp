import { Link } from "react-router-dom";
function compte() {
  return (
    <div>
      <h1>Compte</h1>
      <nav>
        <Link to="/">Se Connecter</Link>
        <Link to="/filActu">Mon Fil Actu</Link>
      </nav>
    </div>
  );
}
export default compte;
