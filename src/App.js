import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import AboutMe from "./routes/AboutMe";
import Work from "./routes/Work";
import * as ReactDOM from "react-dom/client";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/aboutme",
          element: <AboutMe />,
        },
        {
          path: "/work",
          element: <Work />,
        },
      ],
    },
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
