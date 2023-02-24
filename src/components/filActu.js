import { Link, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";

function Actu() {
  //Fetch GET POST

  const [post, setPost] = useState([]);

  const getPost = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/posts?page=0&limit=10`,
      options
    );
    let data = await response.json();
    console.log("data", data);

    console.log("je marche");
    setPost(data.posts);
  };

  const renderActu = () => {
    if (post.length >= 0) {
      return post.map((item, index) => {
        return (
          <form key={index} className="postContainer">
            <div>
              <h1 className="title">{item.title}</h1>
              <p>{item.content}</p>
              <p>{item.date}</p>
              <p>{item.comment}</p>
              <p>{item.like}</p>
            </div>
          </form>
        );
      });
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <header>
        <Menu />
      </header>
      <h2>Fil Actu</h2>
      <button onClick={getPost}>Actualiser mon fil</button>
      <div>{renderActu()}</div>
      <Footer />
    </div>
  );
}
export default Actu;
