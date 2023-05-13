import { Link, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <div className="postOptions">
              <button className="buttonLike" onClick={postLike}>
                🖤
              </button>
              <button className="buttonComment">👁️‍🗨️</button>
            </div>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const postLike = async () => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("@userToken"),
      },
      body: JSON.stringify({
        postId: post[0]._id,
      }),
    };
    const response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/post/like`,
      options
    );
    const data = await response.json();
    console.log("data", data);

    console.log("je marche");
    alert("Et 1 like de plus! ");
  };

  useEffect(() => {
    postLike();
  }, []);

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
      <div className="actuContainer">
        <h3>Mon fil d'actus</h3>
        <button className="buttonGetPost" onClick={getPost}>
          actus
        </button>
      </div>
      <div>{renderActu()}</div>
      <Footer />
    </div>
  );
}
export default Actu;
