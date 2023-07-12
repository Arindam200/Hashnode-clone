import ProBanner from "./ProBanner";
import Hero from "./Hero";
import FeatArticles from "./FeatArticles";
import Features from "./Features";

function Body() {
  return (
    <div className="flex">
      <div className=" w-full overflow-hidden">
        <ProBanner />
        <Hero />
        <FeatArticles />
        <Features />
      </div>
    </div>
  );
}

export default Body;
