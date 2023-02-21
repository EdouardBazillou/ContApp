import "./App.css";
import Error from "./components/error";
import Register from "./utilisateur/register";
import Compte from "./utilisateur/Compte";
import Actu from "./components/filActu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./utilisateur/Login";
import Post from "./components/Poster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/Compte",
    element: <Compte />,
    errorElement: <Error />,
  },
  {
    path: "/filActu",
    element: <Actu />,
    errorElement: <Error />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/Poster",
    element: <Post />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
