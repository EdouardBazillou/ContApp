import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Login() {
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
    setUser(e.target.value)({
      ...user,
      [key]: e.target.value,
    });
  };

  console.log(user);

  //submit form//

  const addUser = async () => {
    const options = {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },

      Body: {
        name: user.name,
        firstName: user.firstName,
        pseudo: user.pseudo,
        mail: user.mail,
        phone: user.phone,
        motdepasse: user.motdepasse,
      },
    };

    let response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/register`,

      options
    );

    let data = await response.json();
    console.log("data", data);

    setUser(data);

    console.log("je marche");
  };

  return (
    <div>
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
        <button onClick={addUser}>S'inscire</button>
      </form>

      <nav>
        <Link to="/compte">Mon Compte</Link>
        <Link to="/filActu">Mon Fil Actu</Link>
      </nav>
    </div>
  );
}
export default Login;
