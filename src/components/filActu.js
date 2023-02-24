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
          <div key={index} className="postContainer">
            <form>
              <div>
                <h1 className="title">{item.title}</h1>
                <p>{item.content}</p>
                <p>{item.date}</p>
                <p>{item.comment}</p>
                <p>{item.like}</p>
              </div>
            </form>
            <button onClick={postLike}>aimer</button>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const postLike = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("@userToken"),
      },
      body: JSON.stringify({
        postId: localStorage.setItem("@postId", post.id),
      }),
    };
    let response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/post/like`,
      options
    );
    let data = await response.json();
    console.log("data", data);

    console.log("je marche");
    alert("vous avez liker le post ! ");
  };

  // const [comment, setComment] = useState([]);

  // const handleInput = (e) => {
  //   setComment({ [e.target.name]: e.target.value });
  //   setUser({ ...comment, [e.target.name]: e.target.value });
  // };

  // // Commentaires
  // const addComment = async (e) => {
  //   e.preventDefault();

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "bearer " + localStorage.getItem("@userToken"),
  //     },

  //     body: JSON.stringify({
  //       postId: localStorage.getItem("id", post._id),
  //       content: { setComments },
  //     }),
  //   };

  //   //Changement de syntaxe
  //   console.log(options);
  //   await fetch(
  //     `https://social-network-api.osc-fr1.scalingo.io/contapp/post/comment`,
  //     options
  //   ).then((response) => {
  //     return response.json();
  //   });

  //   setTypeComment(comments);
  // };

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
