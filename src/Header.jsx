import Logo from "./assets/asset 13.svg";
import Menu from "./assets/asset 12.svg";
import Profile from "./assets/asset 0.png";
import Pen from "./assets/asset 17.svg";
import Pen_white from "./assets/pen.svg";
import Hashnode from "./assets/logo-standard.jpg";
import Search from "./assets/asset 40.svg";
import Notification from "./assets/asset 41.svg";
import Light from "./assets/moon.svg";

export default function Header() {
  return (
    <>
      <nav className="flex lg:px-10 justify-between px-4 py-3 lg:py-4 border-b-2 bg-white overflow-hidden">
        <div className="flex gap-3">
          {/* <svg fill="none" className="viewBox" width="24" height="24">
                <path
                  stroke="currentColor"
                  d="M20.989 11.997H3M20.989 18H3M21 6H3"
                ></path>
              </svg> */}
          <img src={Menu} className="xl:hidden" />
          <img src={Logo} className="h-9 lg:hidden" />
          <img src={Hashnode} className="h-7 mt-2 lg:block hidden" />
        </div>
        <div className="xl:flex gap-8 hidden">
          <button className="hover:opacity-50 rounded-full px-4 py-1 text-sm font-semibold">
            My feed
          </button>
          <button className="hover:opacity-50 rounded-full px-4 py-1 text-sm font-semibold">
            Explore
          </button>
          <button className="hover:opacity-50 rounded-full px-4 py-1 text-sm font-semibold">
            Bookmarks
          </button>
          <button className="hover:opacity-50 rounded-full px-4 py-1 text-sm font-semibold">
            More
          </button>
          <button
            className="flex gap-2 hover:opacity-50 rounded-full px-4 py-1 mt-1.5
           text-sm font-semibold"
          >
            <span>Rix</span>{" "}
            <span className="bg-blue-600 rounded-full text-xs py-0.5 px-2 text-white">
              New
            </span>
          </button>
          {/* <button className="rounded-full bg-white px-5">
            RIX <span className="text-xs text-blue-700">BETA</span>
          </button> */}
        </div>
        <div className="flex gap-5 lg:gap-6">
          {/* <img
                alt="Profile"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659089761812/fsOct5gl6.png"
                decoding="async"
                data-nimg="fill"
                className="h-10"
              /> */}
          <img src={Search} alt="" className="h-6 lg:block hidden mt-2" />
          <button className="py-2 hidden bg-blue-600 rounded-full px-4 text-white lg:flex gap-2">
            <img src={Pen_white} className="h-6" />
            Write
          </button>

          <img src={Light} alt="" className="h-6 mt-2 lg:block hidden" />
          <img src={Notification} className="h-6 lg:block hidden mt-2" />
          <img src={Pen} className="h-6 lg:hidden mt-2" />
          <img src={Profile} className="h-10" />
        </div>
      </nav>
    </>
  );
}
