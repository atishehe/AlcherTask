import { useState } from "react";
import logo from "../assets/plex-logo.svg";
import searchIcon from "../assets/search.png";
import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/icons8-home.svg";
import { Bookmark, Home, Tv, PlayCircle, Compass } from "lucide-react";

export function TopNav() {
  const [searchBar, setSearchBar] = useState("");

  const handleInput = (e) => setSearchBar(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchBar("");
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-l from-black via-gray-800 to-gray-500 py-1">
      {/* left side */}
      <div className="flex items-center gap-4">
        <div className="h-8 w-28">
          <img src={logo} alt="Plex" className="w-full h-full"/>
        </div>
        <form onSubmit={handleSubmit} className="flex bg-white rounded-2xl items-center">
          <div className="px-2 bg-transparent">
            <img src={searchIcon} className="w-4 h-4" alt="Search" />
          </div>
          <input
            type="search"
            value={searchBar}
            onChange={handleInput}
            className="h-8 w-64 focus:outline-none focus:ring-0 focus:border-none placeholder:text-sm rounded-r-2xl px-2"
            placeholder="Find Movies and TV"
          />
        </form>

        <NavLink
          to="/home"
          className={({ isActive }) =>
            `hover:bg-gray-700 flex items-center gap-2 p-2 rounded-full text-white font-semibold transition-colors ${
              isActive ? "border border-white" : ""
            }`
          }
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/Live-TV"
          className={({ isActive }) =>
            `hover:bg-gray-700 flex items-center gap-2 p-2 rounded-full text-white font-semibold transition-colors ${
              isActive ? "border border-white" : ""
            }`
          }
        >
          <Tv className="w-5 h-5" />
          <span>Live TV</span>
        </NavLink>
        <NavLink
          to="/on-demand"
          className={({ isActive }) =>
            `hover:bg-gray-700 flex items-center gap-2 p-2 rounded-full text-white font-semibold transition-colors ${
              isActive ? "border border-white" : ""
            }`
          }
        >
          <PlayCircle className="w-5 h-5" />
          <span>On Demand</span>
        </NavLink>
        <NavLink
          to="/discover"
          className={({ isActive }) =>
            `hover:bg-gray-700 flex items-center gap-2 p-2 rounded-full text-white font-semibold transition-colors ${
              isActive ? "border border-white" : ""
            }`
          }
        >
          <Compass className="w-5 h-5" />
          <span>Discover</span>
        </NavLink>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-white hover:text-gray-300 transition-colors">
          <Bookmark className="w-5 h-5" />
        </button>
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            `hover:bg-gray-700 flex items-center gap-2 p-2 rounded-full text-white font-semibold transition-colors ${
              isActive ? "border border-white" : ""
            }`
          }
        >
          <span>Sign In</span>
        </NavLink>
      </div>
    </div>
  );
}