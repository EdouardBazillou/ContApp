import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Post() {
  const [post, setPost] = useState([""]);
  const [newPost, setNewPost] = useState([]);

  const addPost = (e) => {
    e.preventDefault();
    console.log(post);
    setNewPost([...newPost, post]);
    setPost("");
  };
  const deletePost = (index) => {
    setNewPost(newPost.filter((_, i) => i !== index));
  };

  const render = () => {
    if (newPost.length >= 0) {
      return newPost.map((item, index) => {
        return (
          <div key={item}>
            {item}
            {""}
            <button onClick={() => deletePost(index)}>Supprimer</button>
          </div>
        );
      });
    }
  };
  return (
    <div>
      <form onSubmit={addPost}>
        <h1>Publier</h1>
        <p>
          <input
            type="text"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Titre"
          ></input>
          <button>Valider</button>
        </p>
        {render()}
      </form>
    </div>
  );
}
export default Post;
