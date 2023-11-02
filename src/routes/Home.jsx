import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "../components/Hero";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};
export default Home;
