import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Post() {
  const [post, setPost] = useState([]);

  const addUser = async () => {
    console.log("test", post);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer token",
      },

      body: JSON.stringify({
        title: post.title,
        content: post.content,
      }),
    };

    console.log(options);
    let response = await fetch(
      `https://social-network-api.osc-fr1.scalingo.io/contapp/register`,
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
  return (
    <div>
      <h2>Fil Actu</h2>
      <nav>
        <Link to="/compte">Mon Compte</Link>
        <Link to="/">Me Connecter</Link>
      </nav>
      <h3>Post</h3>
      <div>
        <input placeholder="title" />
      </div>
      <div>
        <input placeholder="content" />
      </div>
      <button onClick={addUser}>Envoyer</button>
    </div>
  );
}
export default Post;
