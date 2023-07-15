/* eslint-disable react/prop-types */
import Feed from "./assets/asset 38.svg";
import Save from "./assets/asset 39.svg";
import Search from "./assets/asset 40.svg";
import Notification from "./assets/asset 41.svg";
import Notif_w from "./assets/bell_white.svg";

function BottomNav({ isDarkTheme }) {
  const notifIcon = isDarkTheme ? Notif_w : Notification;
  return (
    <>
      <nav className="sticky lg:hidden bottom-0 flex justify-around overflow-hidden border-t dark:bg-[#0f172a] bg-white px-4 py-3">
        <img src={Feed} />
        <img src={Save} />
        <img src={Search} />
        <img src={notifIcon} />
      </nav>
    </>
  );
}

export default BottomNav;
