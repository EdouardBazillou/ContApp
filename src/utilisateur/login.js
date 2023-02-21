import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/filActu">Mon Fil Actu</Link>
        </nav>
      </header>
      <h1>Je Me Connecte</h1>
    </div>
  );
}
export default Login;
