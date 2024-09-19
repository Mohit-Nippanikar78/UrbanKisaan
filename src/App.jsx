import React from "react";
import { Hero } from "./components/Hero";
import BigLoader from "./components/BigLoader";
import Navbar from "./components/NavbarMain";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <BigLoader/> */}
    </div>
  );
};

export default App;
