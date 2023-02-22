import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";

function Post() {
  const [post, setPost] = useState([""]);
  const [newPost, setNewPost] = useState([]);

  const deletePost = (item) => {
    setNewPost(newPost.filter((_, i) => i !== item));
  };

  const addPost = async (e) => {
    e.preventDefault();
    console.log(post);
    setNewPost([...newPost, post]);
    setPost("");
    console.log("test", post);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer token",
      },

      body: JSON.stringify({
        title: "",
        content: "",
      }),
    };

    // //Changement de syntaxe
    // console.log(options);
    // await fetch(
    //   `https://social-network-api.osc-fr1.scalingo.io/contapp/post`,
    //   options
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((response) => {
    //     console.log("response", response);
    //   });

    let response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/post`,
      options
    );

    let data = await response.json();
    console.log("data", data);

    setPost(data);

    console.log("je marche");
  };

  useEffect(() => {
    console.log("post", post);
  }, []);

  const render = () => {
    if (newPost.length >= 0) {
      return newPost.map((item, index) => {
        return (
          <div className="returnPost" key={item}>
            {item}
            {""}
            <button className="deleteButton" onClick={() => deletePost(index)}>
              Supprimer
            </button>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <header>
        <Menu />
      </header>
      <div>
        <form className="postContainer" onSubmit={addPost}>
          <h1 className="titlePost">Je publie</h1>
          <div className="newPosts">
            <textarea
              type="text"
              rows="15"
              cols="60"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              placeholder="mon post"
            ></textarea>
          </div>
          <div>
            <button className="displayButton">Valider</button>
          </div>
          <div className="renderPost">{render()}</div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Post;
