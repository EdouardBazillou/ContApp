import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Assets/Footer";
import Menu from "../Assets/Menu";
import ls from "local-storage";

function Register() {
  // const [userList, setUserlist] = useState([]);

  const [user, setUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setUser({ [e.target.name]: e.target.value });
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(user);

  //submit form

  const addUser = async () => {
    console.log("test", user);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        lastname: user.lastname,
        firstname: user.firstname,
        email: user.email,
        password: user.password,
      }),
    };

    console.log(options);
    let response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/register`,
      options
    );

    let data = await response.json();
    console.log("data", data);

    console.log("je marche");
    if (data.success === true) {
      alert("Vous êtes bien inscrit ! Bienvenue sur notre réseau ! :) ");
    } else {
      alert("erreur " + data.message);
    }
  };

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <div>
      <header>
        <Menu />
      </header>
      <div className="formBody">
        <h3>Je crée mon compteApp</h3>
        <form id="form">
          <input
            type="text"
            className="input"
            placeholder="Mon nom"
            name="lastname"
            onChange={handleInput}
          />
          <input
            type="text"
            className="input"
            placeholder="Mon prénom"
            name="firstname"
            onChange={handleInput}
          />
          <input
            type="text"
            className="input"
            placeholder="Mon mail"
            name="email"
            onChange={handleInput}
          />
          <input
            type="password"
            className="input"
            placeholder="Mon mot de passe"
            name="password"
            onChange={handleInput}
          />
        </form>
        <button className="submitFormButton" onClick={addUser}>
          GO!
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Register;
