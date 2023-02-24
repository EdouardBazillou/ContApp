import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";

function Profil() {
  //Navigate
  const navigate = useNavigate();
  //Variable REGISTER
  const [user, setUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    age: "",
    occupation: "",
  });

  //CATCH & SET
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleInputChange = (e) => {
    setUser({ [e.target.name]: e.target.value });
    setUser({ ...user, [e.target.name]: e.target.value });
  };

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
    //Envoyer les infos
    setUser(data);
    //Console Log
    console.log(data);
  };
  //UseEffect Fetch GET
  useEffect(() => {
    userData();
  }, []);

  //FETCH PUT USER
  const userAlterData = async () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("@userToken"),
      },
      body: JSON.stringify({
        lastname: user.lastname,
        firstname: user.firstname,
        email: user.email,
        age: user.age,
        occupation: user.occupation,
      }),
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
          //Reprendre
          userData();
          //Set des updates
          setAge(age);
          setOccupation(occupation);
          alert("Modifications prises en compte !");
          navigate("/filActu");
        } else {
          return alert(response.message);
        }
      });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  //Return de fin
  return (
    <div>
      <header>
        <Menu />
      </header>

      <div className="profilContainer">
        <div className="titleProfil">
          <p>Je renseigne mon profil</p>
          <p>Je peux modifier mon profil en renseignant les lignes</p>
        </div>
        <div className="formBody">
          <input
            type="text"
            className="input"
            value={user.lastname}
            onChange={handleInputChange}
            name="lastname"
          />

          <input
            type="text"
            className="input"
            value={user.firstname}
            onChange={handleInputChange}
            name="firstname"
          />

          <input
            type="text"
            className="input"
            value={user.email}
            onChange={handleInputChange}
            name="email"
          />
          <input
            type="number"
            className="input"
            placeholder="Votre âge"
            value={user.age}
            onChange={handleInputChange}
            name="age"
          />
          <span>{age}</span>
          <input
            type="text"
            className="input"
            placeholder="Mon job"
            value={user.occupation}
            onChange={handleInputChange}
            name="occupation"
          />
          <span>{occupation}</span>
        </div>
        <div className="profilUpdate">
          <button className="buttonProfilValidate">
            <span className="buttonProfilText" onClick={userAlterData}>
              OK
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Profil;
