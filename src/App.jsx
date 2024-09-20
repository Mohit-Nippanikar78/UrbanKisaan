import React from "react";
import { Hero } from "./components/Hero";
import BigLoader from "./components/BigLoader";
import Navbar from "./components/NavbarMain";
import Tooltip from "./components/Tooltip";
import Featured from "./components/Featured";
import Compo1 from "./components/Compo1";
import Compo2 from "./components/Compo2";
import Globe from "./components/GithubGlobe";

const App = () => {
  return (
    <div className=" dark:bg-black bg-white">
      <Hero />
      <Tooltip />
      <div className="bg-black">

      <Featured/>
      <Compo1/>
      <Compo2/>
      </div>
      {/* <Globe/>   */}
    </div>
  );
};

export default App;
