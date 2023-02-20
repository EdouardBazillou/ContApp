import "./App.css";
import Error from "./components/error";
import Login from "./utilisateur/login";
import Compte from "./utilisateur/Compte";
import Actu from "./components/filActu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
