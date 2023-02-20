import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <h1> Bienvenu sur ContAPP ! </h1>
      <h2>Veuillez Vous Connectez</h2>
      <nav>
        <Link to="/compte">Mon Compte</Link>
        <Link to="/filActu">Mon Fil Actu</Link>
      </nav>
    </div>
  );
}
export default Login;
