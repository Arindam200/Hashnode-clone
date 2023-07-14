import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import BottomNav from "./Bottom-nav";
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
          <Header onThemeChange={toggleTheme} />
          <Body />
          <BottomNav />
        </div>
      </div>
    </>
  );
}
