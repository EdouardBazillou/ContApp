import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Register() {
  const [userList, setUserlist] = useState([]);

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

    setUser(data);

    console.log("je marche");

    alert("Vous Êtes Bien Inscrit !   Bienvenu Sur Notre Réseau ! ");
  };

  useEffect(() => {
    console.log("user", user);
  }, []);

  return (
    <div>
      <header>
        <nav>
          <Link to="/Login">Me Connecter</Link>
          <Link to="/filActu">Mon Fil Actu</Link>
          <Link to="/Poster">Publier</Link>
        </nav>
      </header>
      <h1> Bienvenu sur ContAPP ! </h1>

      <h2>Veuillez Créer Votre compte</h2>

      <form id="form">
        <input
          type="text"
          className="inputName"
          placeholder="Votre nom"
          name="lastname"
          onChange={handleInput}
        />
        <input
          type="text"
          className="inputFirstName"
          placeholder="Votre Prénom"
          name="firstname"
          onChange={handleInput}
        />
        <input
          type="text"
          className="inputMail"
          placeholder="Votre Mail"
          name="email"
          onChange={handleInput}
        />
        <input
          type="text"
          className="motdepasse"
          placeholder="Votre Mot De Passe"
          name="password"
          onChange={handleInput}
        />
      </form>
      <button onClick={addUser}>S'inscire</button>
    </div>
  );
}
export default Register;
