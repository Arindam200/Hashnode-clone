import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import BottomNav from "./components/Bottom-nav";
import ProBanner from "./components/ProBanner";
import Hero from "./components/Hero";
import FeatArticles from "./components/FeatArticles";
import Features from "./components/Features";

export default function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="dark:bg-black dark:text-white">
        <div>
          <Header onThemeChange={toggleTheme} isDarkTheme={theme === "dark"} />
          <div className="flex ">
            <div className=" w-full overflow-hidden">
              <ProBanner />
              <Hero />
              <FeatArticles />
              <Features
                isDarkTheme={theme === "dark"}
                toggleTheme={toggleTheme}
              />
            </div>
          </div>
          <BottomNav isDarkTheme={theme === "dark"} />
        </div>
      </div>
    </>
  );
}
