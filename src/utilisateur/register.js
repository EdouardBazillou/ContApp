import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Assets/Footer";
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

  //submit form//

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

    // localStorage.setItem("user", user);

    console.log("je marche");

    alert("Vous Êtes Bien Inscrit !   Bienvenu Sur Notre Réseau ! ");
  };

  // console.log(localStorage);

  useEffect(() => {
    console.log("user", user);
  }, []);

  return (
    <div>
      <header>
        <nav>
          <div className="navBar">
            <div className="contAppHome">
              <p>ContApp</p>
            </div>
            <div className="ongletConnection">
              <Link to="/Login">Me Connecter</Link>
            </div>
            <div className="ongletActu">
              <Link to="/filActu">Mon Fil Actu</Link>
            </div>
            <div className="ongletPublier">
              <Link to="/Poster">Publier</Link>
            </div>
          </div>
          <div className="border"></div>
        </nav>
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
            placeholder="Mon Prénom"
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
            type="text"
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
