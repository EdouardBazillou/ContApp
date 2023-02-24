import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";

function Profil() {
  //Variable REGISTER
  const [user, setUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });
  //CATCH & SET
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  //MODIFY
  const [addType, setAddType] = useState("");
  const [current, setCurrent] = useState({});
  // Valeur false par défaut
  const [edit, setEdit] = useState(false);

  //Valeur INPUT
  const handleChange = (alter) => {
    setEdit(!edit);
    console.log("je click");
  };

  //Bouton MODIFIER
  function handleInputChange(e) {
    setCurrent({ ...current, text: e.target.value });
    console.log(current);
  }

  //FETCH GET USER
  const userData = async () => {
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
    setPassword(data.password);
    setAge(data.age);
    setOccupation(data.occupation);
    //Console Log
    console.log(data);
  };
  useEffect(() => {
    userData();
  }, [user]);

  //FETCH PUT USER
  const userAlterData = async () => {
    const options = {
      method: "PUT",
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
    //Console Log
    console.log(data);
  };
  useEffect(() => {
    userAlterData();
  }, [user]);

  //Return de fin
  return (
    <div>
      <header>
        <Menu />
      </header>
      {edit == false ? (
        <div className="profilContainer">
          <div className="titleProfil">
            <p>Mon profil</p>
          </div>
          <div className="formBody">
            <input
              type="text"
              className="input"
              placeholder={lastName}
              name="lastname"
            />

            <input
              type="text"
              className="input"
              placeholder={firstName}
              name="firstname"
            />

            <input
              type="text"
              className="input"
              placeholder={email}
              name="email"
            />
            <input
              type="text"
              className="input"
              placeholder="Mon âge"
              name="age"
            />
            <span>{age}</span>
            <input
              type="text"
              className="input"
              placeholder="Mon job"
              name="occupation"
            />
            <span>{occupation}</span>
          </div>
          <div className="profilUpdate">
            <button className="buttonProfilModif" placeholder="Modifier">
              <span
                className="buttonProfilText"
                onChange={handleChange}
                onClick={userAlterData}
              >
                Modifier
              </span>
            </button>
            <button className="buttonProfilValidate" placeholder="Valider">
              <span className="buttonProfilText">OK</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          className="buttonProfilModif"
          placeholder="Modifier"
          onClick={handleChange}
        ></button>
      )}
      <Footer />
    </div>
  );
}
export default Profil;
