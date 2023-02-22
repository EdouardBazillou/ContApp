import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

    console.log(options);
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
      <nav>
        <Link to="/compte">Mon Compte</Link>
        <Link to="/">Me Connecter</Link>
      </nav>
      <form onSubmit={addPost}>
        <h1 className="titlePost">Publication</h1>
        <p className="newPosts">
          <textarea
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Post"
          ></textarea>
        </p>
        <button className="displayButton">Valider</button>
        {render()}
      </form>
    </div>
  );
}
export default Post;
