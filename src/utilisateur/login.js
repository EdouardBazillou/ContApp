import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/filActu">Mon Fil Actu</Link>
        </nav>
      </header>
      <div className="containerLogin">
        <form className="loginForm">
          <div className="dataLoginEmail">
            <input
              type="text"
              className="loginEmailInput"
              placeholder="email"
              name="email"
            />
          </div>
          <div className="dataPasswordEmail">
            <input
              type="password"
              className="loginPasswordInput"
              placeholder="mot de passe"
              name="password"
            />
          </div>
          <div className="submitLogin">
            <button className="buttonLoginSubmit" placeholder="Se connecter">
              <span className="buttonLoginText">Valider</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
