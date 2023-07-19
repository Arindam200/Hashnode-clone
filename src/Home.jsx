import React from "react";
import ProBanner from "./components/ProBanner";
import Hero from "./components/Hero";
import FeatArticles from "./components/FeatArticles";
import Features from "./components/Features";

const Home = (props) => {
  return (
    <div>
      <div className="flex ">
        <div className=" w-full overflow-hidden">
          <ProBanner />
          <Hero />
          <FeatArticles />
          <Features isDarkTheme={props.theme} toggleTheme={props.toggle} />
        </div>
      </div>
    </div>
  );
};

export default Home;
