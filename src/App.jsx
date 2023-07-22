import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import BottomNav from "./components/Bottom-nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyFeed from "./Myfeed";
import Explore from "./Explore";
import Bookmarks from "./Bookmarks";
import More from "./More";
import Rix from "./Rix";

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
          <Routes>
            <Route
              exact
              path="/"
              element={<Home theme={theme} toggle={toggleTheme} />}
            />
            <Route exact path="/myfeed" element={<MyFeed />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/bookmarks" element={<Bookmarks />} />
            <Route exact path="/more" element={<More />} />
            <Route exact path="/rix" element={<Rix />} />
          </Routes>

          <BottomNav isDarkTheme={theme === "dark"} />
        </div>
      </div>
    </>
  );
}
