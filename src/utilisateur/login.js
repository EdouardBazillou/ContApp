import { useState, useEffect } from "react";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";
import ls from "local-storage";

function Login() {
  const [user, setUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

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
          localStorage.setItem("@userToken", response.token);
        } else {
          return alert(response.message);
        }
      });

    // if (response.success == true) {
    //   localStorage.setItem("userToken", response.token);
    // } else {
    //   return alert(response.message);
    // }

    // let data = await response.json();

    // console.log("data", data);
  };

  //UseEffect
  useEffect(() => {}, [user]);

  //Return de fin
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
