import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";

function Profil() {
  //CATCH & SET
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  //MODIFY
  const [addType, setAddType] = useState(""); // nouveau texte
  const [current, setCurrent] = useState({}); // objet vide
  const [edit, setEdit] = useState(false); // edition est désactivé par défaut

  //Valeur INPUT
  function handleChange(alteration) {
    setEdit(!edit);
  }

  function handleEditInputChange(e) {
    setCurrent({ ...current, text: e.target.value });
    console.log(current);
  }

  //FETCH GET USER
  async function userData() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("@userToken"),
      },
    };
    const response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/user`,
      options
    );

    const data = await response.json();
    setFirstName(data.firstname);
    setLastName(data.lastname);
    setEmail(data.email);
    setAge(data.age);
    setOccupation(data.occupation);

    console.log(data);
  }

  useEffect(() => {
    userData();
  }, []);

  //Return de fin
  return (
    <div>
      <header>
        <Menu />
      </header>
      <div>
        <p>Consulter votre profil</p>
      </div>
      <div className="formBody">
        <input
          type="text"
          className="input"
          placeholder="Mon nom"
          name="lastname"
        />
        {lastName}
        <input
          type="text"
          className="input"
          placeholder="Mon prénom"
          name="firstname"
        />
        {firstName}
        <input
          type="text"
          className="input"
          placeholder="Mon mail"
          name="email"
        />
        {email}
        <input
          type="password"
          className="input"
          placeholder="Mon mot de passe"
          name="password"
        />
        <input
          type="password"
          className="input"
          placeholder="Mon mot de passe"
          name="password"
        />
        {age}
        <input
          type="password"
          className="input"
          placeholder="Mon mot de passe"
          name="password"
        />
        {occupation}
      </div>
      <button className="buttonProfilModif" placeholder="Modifier">
        <span className="buttonLoginText" onClick={handleChange}>
          Modifier
        </span>
      </button>
      <Footer />
    </div>
  );
}
export default Profil;
