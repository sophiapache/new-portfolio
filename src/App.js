import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import * as ReactDOM from "react-dom/client";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // children: [
      //   {
      //     path: "",
      //     element: <Home />,
      //   },
      //   {
      //     path: "contact-me",
      //     element: <ContactMe />,
      //   },
      // ],
    },
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
