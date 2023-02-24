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
    age: "",
    occupation: "",
  });

  //CATCH & SET
  // const [lastName, setLastName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
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
        } else {
          return alert(response.message);
        }
      });
    // const response = await fetch(
    //   `https://social-network-api.osc-fr1.scalingo.io/contapp/user`,
    //   options
    // );
    // const data = await response.json();
    // //Reprendre
    // userData();
    // if (data.success === true) {
    //   //Envoyer les modif dans USER METHODE
    //   setUser(data);
    //   alert("Modifications prises en compte !");
    // } else {
    //   alert("Error : " + data.message);
    // }
    // //Console Log
    // console.log(data);
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
          <p>Mon profil</p>
          <p>Vous pouvez modifier votre profil en renseignant les lignes.</p>
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
            type="text"
            className="input"
            value={user.age}
            onChange={handleInputChange}
            name="age"
          />
          <span>{age}</span>
          <input
            type="text"
            className="input"
            value={user.occupation}
            onChange={handleInputChange}
            name="occupation"
          />
          <span>{occupation}</span>
        </div>
        <div className="profilUpdate">
          <button className="buttonProfilValidate">
            <span
              className="buttonProfilText"
              // onChange={handleInputChange}
              onClick={userAlterData}
            >
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
