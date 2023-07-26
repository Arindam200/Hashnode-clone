/* eslint-disable react/prop-types */
import Feed_b from "../assets/Feed_b.svg";
import Feed_w from "../assets/Feed_w.svg";
import Bookmark_b from "../assets/Bookmark_b.svg";
import Bookmark_w from "../assets/Bookmark_w.svg";
import Search_b from "../assets/search_b.svg";
import Search_w from "../assets/search_w.svg";
import Notification from "../assets/asset 41.svg";
import Notif_w from "../assets/bell_white.svg";

function BottomNav({ isDarkTheme }) {
  const notifIcon = isDarkTheme ? Notif_w : Notification;
  const Search = isDarkTheme ? Search_w : Search_b;
  const Feed = isDarkTheme ? Feed_w : Feed_b;
  const Bookmark = isDarkTheme ? Bookmark_w : Bookmark_b;
  return (
    <>
      <nav className="sticky lg:hidden bottom-0 flex justify-around overflow-hidden border-t dark:bg-[#0f172a] bg-white px-4 py-3">
        <img src={Feed} />
        <img src={Bookmark} />
        <img src={Search} />
        <img src={notifIcon} />
      </nav>
    </>
  );
}

export default BottomNav;
