import { useState, useEffect } from "react";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";
import { useNavigate } from "react-router-dom";
import ls from "local-storage";

function Login() {
  const [user, setUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //Reprendre valeur des inputs
  const handleInput = (e) => {
    setUser({ [e.target.name]: e.target.value });
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Fonction FETCH
  const login = async (e) => {
    e.preventDefault();
    let options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    };
    //Changement de syntaxe pour le fetch :
    await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/login`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("response", response);
        if (response.success == true) {
          alert("Hello there! Vous êtes bien connecté(e) à votre profil !");
          localStorage.setItem("@userToken", response.token);
          navigate("/profil");
          {
            userConnexion();
          }
        } else {
          return alert(response.message);
        }
      });
  };

  //UseEffect
  useEffect(() => {}, [user]);

  const userConnexion = async (e) => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("@userToken"),
      },
    };
    //Changement de syntaxe pour le fetch :
    await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/user`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("response", response);
        if (response.success == true) {
        }
      });
  };

  return (
    <div>
      <header>
        <Menu />
      </header>
      <div className="containerLogin">
        <form className="loginForm">
          <div className="dataLoginEmail">
            <input
              type="text"
              className="loginEmailInput"
              placeholder="email"
              name="email"
              onChange={handleInput}
            />
          </div>
          <div className="dataPasswordEmail">
            <input
              type="password"
              className="loginPasswordInput"
              placeholder="mot de passe"
              name="password"
              onChange={handleInput}
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
      <Footer />
    </div>
  );
}
export default Login;
