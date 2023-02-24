import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";

function Actu() {
  //Fetch GET POST

  const getPost = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/posts`,
      options
    );
    let data = await response.json();
    console.log("data", data);
    setNewPost(data.posts, data.title);

    console.log("je marche");
  };

  return (
    <div>
      <header>
        <Menu />
      </header>
      <h2>Fil Actu</h2>
      <Footer />
    </div>
  );
}
export default Actu;
