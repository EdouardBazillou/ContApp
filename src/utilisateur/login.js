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
        <div className="screen">
          <div className="screenContent">
            <form className="loginForm">
              <div className="dataLoginEmail">
                <input
                  type="text"
                  class="loginEmailInput"
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
              <div>
                <button
                  className="buttonLoginSubmit"
                  placeholder="Se connecter"
                >
                  <span className="buttonLoginText">Se connecter</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
