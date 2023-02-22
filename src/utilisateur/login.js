import { Link } from "react-router-dom";
import { useState } from "react";
import ls from "local-storage";

function Login() {
  const [user, setUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const login = async () => {
    const options = {
      method: "Post",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    };

    const response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/login`,
      options
    );

    let data = await response.json();

    if (response.success == true) {
      localStorage.setItem("userToken", response.token);
    } else {
      return alert(response.message);
    }

    console.log("data", data);
  };

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
        </form>
        <div className="submitLogin">
          <button
            className="buttonLoginSubmit"
            placeholder="Se connecter"
            onClick={login}
          >
            <span className="buttonLoginText">Valider</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
