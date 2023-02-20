import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Login() {
  const [user, setUser] = useState("");
  const [userList, setUserlist] = useState([]);

  const handleInput = (e) => {
    setUser({
      [e.target.name]: e.target.value,
      [e.target.firstName]: e.target.value,
      [e.target.pseudo]: e.target.value,
      [e.target.mail]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.motdepasse]: e.target.value,
    });
  };

  const addUser = (e) => {
    e.preventDefault();
    setUserlist([...userList, user]);
    console.log("new liste", userList);
  };

  useEffect(() => {
    // console.log("user", user);
  }, [user]);

  useEffect(() => {
    // console.log("userList", userList);
  }, [userList]);

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
        <button type="submit" onClic={addUser}>
          S'inscire
        </button>
      </form>
      <nav>
        <Link to="/compte">Mon Compte</Link>
        <Link to="/filActu">Mon Fil Actu</Link>
      </nav>
    </div>
  );
}
export default Login;
