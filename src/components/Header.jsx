/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Logo_B from "../assets/asset 13.svg";
import Logo_w from "../assets/logo-s-white.svg";
import Menu_b from "../assets/Menu_b.svg";
import Menu_w from "../assets/Menu_w.svg";
import Cross_b from "../assets/cross_b.svg";
import Cross_w from "../assets/cross_w.svg";
import Profile from "../assets/asset 0.png";
import Pen_b from "../assets/asset 17.svg";
import Pen_white from "../assets/pen.svg";
import Hashnode_B from "../assets/logo-standard.jpg";
import Hashnode_W from "../assets/logo_white.svg";
import Search_b from "../assets/search_b.svg";
import Search_w from "../assets/search_w.svg";
import Notification from "../assets/asset 41.svg";
import Notif_w from "../assets/bell_white.svg";
import Light from "../assets/moon.svg";
import Sun from "../assets/sun.svg";
import Rix from "../assets/Rix_1.svg";
import Down_b from "../assets/black_cross.svg";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";

export default function Header({ onThemeChange, isDarkTheme }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const handleThemeClick = () => {
    onThemeChange(); // Call the callback function from App.jsx
    // console.log("executed");
    // setIsDarkTheme(!isDarkTheme);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isBellOpen, setIsBellOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown1 = () => {
    setIsBellOpen(!isBellOpen);
  };

  const dropdownRef = useRef(null);
  const bellDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the profile dropdown if clicked outside
      }
      if (
        bellDropdownRef.current &&
        !bellDropdownRef.current.contains(event.target)
      ) {
        setIsBellOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notifIcon = isDarkTheme ? Notif_w : Notification;
  const Logo = isDarkTheme ? Logo_w : Logo_B;
  const Hashnode = isDarkTheme ? Hashnode_W : Hashnode_B;
  const Toggle = isDarkTheme ? Sun : Light;
  const Pen = isDarkTheme ? Pen_white : Pen_b;
  const Menu = isDarkTheme ? Menu_w : Menu_b;
  const Search = isDarkTheme ? Search_w : Search_b;
  const Cross = isDarkTheme ? Cross_w : Cross_b;

  return (
    <>
      <nav className="flex lg:px-10 dark:bg-[#0f172a] justify-between px-4 py-3 lg:py-4 dark:border-slate-900 border-b-2 bg-whiteoverflow-hidden">
        <div className="flex gap-3">
          <img src={Menu} className="xl:hidden" onClick={toggleNavbar} />
          {isNavbarOpen && (
            <div className="fixed top-0 bottom-0 left-0 flex flex-col z-50 w-[323px] bg-white dark:bg-slate-900 radix-state-open:duration-200 radix-state-open:ease-in radix-state-open:animate-in radix-state-open:slide-in-from-left radix-state-closed:duration-200 radix-state-closed:animate-out radix-state-closed:slide-out-to-left radix-state-closed:ease-out">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 p-4 min-h-[75px]">
                <img src={Hashnode} alt="" className="h-7" />
                <img
                  src={Cross}
                  alt=""
                  className="h-7"
                  onClick={toggleNavbar}
                />
              </div>
              <ul className="py-4 px-3 border-b border-slate-200 dark:border-slate-800">
                <li className="flex flex-row justify-between items-center gap-2 w-full py-2 px-3 rounded-lg font-sans cursor-pointer transition-colors duration-150 ease-in-out active:bg-slate-100 dark:active:bg-slate-800 md:hover:bg-slate-100 md:dark:hover:bg-slate-800 focus:outline-none text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  {" "}
                  <Link to="/myfeed">My feed</Link>
                </li>
                <li className="flex flex-row justify-between items-center gap-2 w-full py-2 px-3 rounded-lg font-sans cursor-pointer transition-colors duration-150 ease-in-out active:bg-slate-100 dark:active:bg-slate-800 md:hover:bg-slate-100 md:dark:hover:bg-slate-800 focus:outline-none text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  <Link to="/explore">Explore</Link>
                </li>
                <li className="flex flex-row justify-between items-center gap-2 w-full py-2 px-3 rounded-lg font-sans cursor-pointer transition-colors duration-150 ease-in-out active:bg-slate-100 dark:active:bg-slate-800 md:hover:bg-slate-100 md:dark:hover:bg-slate-800 focus:outline-none text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  <Link to="https://hashnode.com/onboard">Bookmarks</Link>
                </li>
                <li className="flex flex-row justify-between items-center gap-2 w-full py-2 px-3 rounded-lg font-sans cursor-pointer transition-colors duration-150 ease-in-out active:bg-slate-100 dark:active:bg-slate-800 md:hover:bg-slate-100 md:dark:hover:bg-slate-800 focus:outline-none text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  <Link to="/more">More </Link>
                  <img src={Down_b} className="h-7" alt="" />{" "}
                </li>
              </ul>
              <div className="py-2 px-3">
                <button className="flex flex-row items-center gap-2 w-full py-2 px-3 rounded-lg font-sans cursor-pointer transition-colors duration-150 ease-in-out active:bg-slate-100 dark:active:bg-slate-800 md:hover:bg-slate-100 md:dark:hover:bg-slate-800 focus:outline-none text-slate-600 dark:text-slate-300 text-lg font-semibold">
                  <Link
                    className="flex"
                    to="https://hashnode.com/rix?source=nav"
                  >
                    {" "}
                    Rix
                  </Link>
                  <img src={Rix} alt="" className="h-5" />
                  {/* <Rix></Rix> */}
                </button>
              </div>
            </div>
          )}
          <img
            src={Logo}
            className={` h-8 mt-1 sm:h-9 lg:hidden ${
              isNavbarOpen ? "hidden" : ""
            }`}
          />

          <Link to="/">
            <img src={Hashnode} className="h-7 mt-2 lg:block hidden" />
          </Link>
        </div>
        <div className="xl:flex gap-8 hidden">
          <button className="hover:opacity-50 rounded-full px-4 py-1 text-sm font-semibold">
            <Link to="/myfeed">My feed</Link>
          </button>
          <button className="hover:opacity-50 rounded-full px-4 py-1 text-sm font-semibold">
            <Link to="/explore">Explore</Link>
          </button>
          <button className="hover:opacity-50 rounded-full px-4 py-1 text-sm font-semibold">
            <Link to="https://hashnode.com/onboard">Bookmarks</Link>
          </button>
          <button className="hover:opacity-50 flex rounded-full px-4 py-2.5 text-sm font-semibold">
            <Link to="/more">More</Link>
            <img src={Down_b} className="" alt="" />
          </button>
          <button
            className="flex gap-2 hover:opacity-50 rounded-full px-4 py-1 mt-1.5
           text-sm font-semibold"
          >
            <span>
              <Link to="https://hashnode.com/rix?source=nav">Rix</Link>
            </span>{" "}
            <span className="bg-blue-600 rounded-full text-xs py-0.5 px-2 text-white">
              New
            </span>
          </button>
          {/* <button className="rounded-full bg-white px-5">
            RIX <span className="text-xs text-blue-700">BETA</span>
          </button> */}
        </div>
        <div className="flex gap-5 lg:gap-6">
          <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <img
              src={Search}
              onClick={toggleModal}
              alt=""
              className="h-6 lg:block hidden mt-2"
            />
          </motion.a>
          {modal && <SearchModal onClose={toggleModal} />}

          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="py-2 hidden bg-blue-600 rounded-full px-4 text-white lg:flex gap-2"
          >
            <img src={Pen_white} className="h-6" />
            Write
          </motion.a>
          <img src={Pen} className="h-6 lg:hidden mt-2" />
          <motion.a
            className="lg:block hidden"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <img
              src={Toggle}
              alt="Theme"
              className="h-6 mt-2 lg:block "
              onClick={handleThemeClick}
            />
          </motion.a>
          <motion.a
            className="lg:block hidden"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <img
              src={notifIcon}
              ref={bellDropdownRef}
              className="h-6 lg:block hidden mt-2 "
              onClick={toggleDropdown1}
            />
          </motion.a>
          {isBellOpen && (
            <div className="fixed top-20 right-18">
              <div className=" z-50 min-w-[198px] flex flex-col gap-2 h-auto bg-white  rounded-xl shadow-xl w-[280px] py-2 outline-none dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="p-4">
                  <img src={Profile} className="h-16 mx-auto mb-5" alt="" />
                  <h2 className="mb-2 ml-1 text-2xl text-start font-bold font-heading text-slate-700 dark:text-slate-200 ">
                    Sign in to see notifications from your favorite tech
                    writers!
                  </h2>
                  <h3 className="mb-5 ml-1 text-base text-slate-600 dark:text-slate-300">
                    Learn insights from developers and people in tech from
                    around the world. Grow 1% every day.
                  </h3>

                  <Link
                    to="https://hashnode.com/onboard"
                    className="px-[18px] w-full py-2.5 rounded-full text-white text-sm font-medium flex items-center justify-center gap-2 bg-blue-600 "
                  >
                    Let&apos;s Start
                  </Link>
                </div>
              </div>
            </div>
          )}
          {/* <img
            src={Notif_w}
            className="h-6  mt-2 lg:block hidden dark:block"
            alt=""
          /> */}
          <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <img
              src={Profile}
              ref={dropdownRef}
              className="h-10"
              onClick={toggleDropdown}
            />
          </motion.a>
          {isOpen && (
            <div className="fixed top-20 right-5">
              <div className=" z-50 min-w-[198px] flex flex-col gap-2 h-auto bg-white  rounded-xl shadow-xl w-[260px] py-2 outline-none dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="p-3">
                  <img src={Profile} className="h-16 mx-auto mb-5" alt="" />
                  <h2 className="mb-2 text-xl font-bold font-heading text-slate-700 dark:text-slate-200 text-center">
                    Sign up or log in to your Hashnode account
                  </h2>
                  <h3 className="mb-5 text-center text-base text-slate-600 dark:text-slate-300">
                    Takes only a few seconds
                  </h3>
                  <div className="space-y-3">
                    <Link
                      to="https://hashnode.com/onboard"
                      className="px-[18px] w-full py-2.5 rounded-full text-white text-sm font-medium flex items-center justify-center gap-2 bg-blue-600 "
                    >
                      Sign up
                    </Link>
                    <Link
                      to="https://hashnode.com/onboard"
                      className="px-[18px] text-blue-600 w-full py-2.5 rounded-full  text-sm font-medium flex items-center justify-center gap-2 border border-blue-600 hover:bg-blue-50 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
Header.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
};

{
  /* <img
                alt="Profile"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659089761812/fsOct5gl6.png"
                decoding="async"
                data-nimg="fill"
                className="h-10"
              /> */
}
