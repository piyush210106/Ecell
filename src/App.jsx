import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Grid from "./Components/grid";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Grid />
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
