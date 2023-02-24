import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../Assets/Menu";
import Footer from "../Assets/Footer";

function Post() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [newPost, setNewPost] = useState([]);

  // const deletePost = (item) => {
  //   setNewPost(newPost.filter((_, i) => i !== item));
  // };

  const addPost = async (e) => {
    e.preventDefault();
    console.log(post);

    setPost("");
    setTitle("");
    console.log("test", post);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("@userToken"),
      },

      body: JSON.stringify({
        title: title,
        content: post,
      }),
    };

    //Changement de syntaxe
    console.log(options);
    await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/post`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        getPost();
        console.log("response", response);
      });
  };

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

  //useEffect
  useEffect(() => {
    getPost();
  }, []);

  //Render
  const render = () => {
    if (newPost.length >= 0) {
      return newPost.map((item, index) => {
        return (
          <div className="returnPost" key={item}>
            <h3 className="TitlePost">{item.title}</h3>
            {"\n"}
            <br />
            <br />
            <p className="contentPost">{item.content}</p>
          </div>
        );
      });
    }
  };
  //Return de fin
  return (
    <div>
      <header>
        <Menu />
      </header>
      <div>
        <form className="postContainer" onSubmit={addPost}>
          <h1 className="titlePost">Je publie</h1>
          <div className="title">
            <textarea
              type="text"
              rows="3"
              cols="60"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre"
            ></textarea>
          </div>
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
