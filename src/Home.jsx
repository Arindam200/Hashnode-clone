import React from "react";
import ProBanner from "./components/ProBanner";
import Hero from "./components/Hero";
import FeatArticles from "./components/FeatArticles";
import Features from "./components/Features";
// import Reveal from "./Reveal";

import { motion, MotionConfig } from "framer-motion";

const Home = (props) => {
  return (
    <div>
      <MotionConfig transition={{ duration: 1 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex ">
            <div className=" w-full overflow-hidden">
              {/* <Reveal> */}
              <ProBanner />
              <Hero />
              {/* </Reveal> */}
              {/* <Reveal> */}
              <FeatArticles />
              {/* </Reveal> */}
              <Features isDarkTheme={props.theme} toggleTheme={props.toggle} />
            </div>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  );
};

export default Home;
