import Feed from "./assets/asset 38.svg";
import Save from "./assets/asset 39.svg";
import Search from "./assets/asset 40.svg";
import Notification from "./assets/asset 41.svg";

function BottomNav() {
  return (
    <>
      <nav className="sticky lg:hidden bottom-0 flex justify-around overflow-hidden border-t  bg-white px-4 py-3">
        <img src={Feed} />
        <img src={Save} />
        <img src={Search} />
        <img src={Notification} />
      </nav>
    </>
  );
}

export default BottomNav;
