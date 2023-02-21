import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Register() {
  const [userList, setUserlist] = useState([]);

  const [user, setUser] = useState({
    name: "",
    firstName: "",
    pseudo: "",
    mail: "",
    phone: "",
    motdepasse: "",
  });

  const handleInput = (key) => (e) => {
    setUser({
      ...user,
      [key]: e.target.value,
    });
  };

  console.log(user);

  //submit form//

  const addUser = async () => {
    console.log("test");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: user.name,
        firstName: user.firstName,
        pseudo: user.pseudo,
        mail: user.mail,
        phone: user.phone,
        motdepasse: user.motdepasse,
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
        </nav>
      </header>
      <h1> Bienvenu sur ContAPP ! </h1>

      <h2>Veuillez Créer Votre compte</h2>

      <form id="form">
        <input
          type="text"
          className="inputName"
          placeholder="Votre nom"
          name="name"
          onChange={handleInput}
        />
        <input
          type="text"
          className="inputFirstName"
          placeholder="Votre Prénom"
          name="firstName"
          onChange={handleInput}
        />
        <input
          type="text"
          className="pseudo"
          placeholder="Votre Pseudo"
          name="pseudo"
          onChange={handleInput}
        />
        <input
          type="text"
          className="inputMail"
          placeholder="Votre Mail"
          name="mail"
          onChange={handleInput}
        />
        <input
          type="text"
          className="inputPhone"
          placeholder="Votre Téléphone"
          name="phone"
          onChange={handleInput}
        />
        <input
          type="text"
          className="motdepasse"
          placeholder="Votre Mot De Passe"
          name="motdepasse"
          onChange={handleInput}
        />
      </form>
      <button onClick={addUser}>S'inscire</button>
    </div>
  );
}
export default Register;
