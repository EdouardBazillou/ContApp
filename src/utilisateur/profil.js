import { Link } from "react-router-dom";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";

function Profil() {
  //FETCH GET USER + FETCH PUT USER
  //Variable rappel
  const [user, setUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  //Fonction FETCH GET USER
  const userConnexion = async (e) => {
    e.preventDefault();
    let options = {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("@userToken"),
      },

      body: JSON.stringify({
        lastname: user.lastname,
        firstname: user.firstname,
        email: user.email,
        password: user.password,
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
          localStorage.setItem("@userToken", response.token);
        } else {
          return alert(response.message);
        }
      });
  };

  //Fonction FETCH PUT USER

  //Return de fin
  return (
    <div>
      <header>
        <Menu />
      </header>
      <p>Vous devez vous connecter pour visualiser votre profil.</p>
      <div className="formBody"></div>
      <Footer />
    </div>
  );
}
export default Profil;
