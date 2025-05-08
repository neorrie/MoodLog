import { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-6">
      {/* desktop view */}
      <div className="flex justify-between items-center">
        <div className="text-2xl text-zinc-200 cursor-pointer flex">
          <Link to={"/"}>
            M<box-icon name="book-reader" color="white"></box-icon>dLog
          </Link>
        </div>
        <ul className="hidden md:flex text-zinc-200">
          <li className="mx-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="mx-4">
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li className="mx-4">
            <Link to={"/login"}>Sign in</Link>
          </li>
        </ul>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center px-4 py-2"
        >
          <box-icon
            name="menu"
            color="grey"
            className="cursor-pointer"
          ></box-icon>
        </button>
      </div>

      {/* mobile hamburger popup */}
      <div
        className={`md:hidden fixed bg-zinc-900 inset-x-4 top-20 z-100 rounded-3xl p-6 ring-1 ring-zinc-800
          transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <ul className="divide-y divide-zinc-800 text-zinc-200">
          <li className="p-2 hover:text-zinc-400">
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="p-2 hover:text-zinc-400">
            <Link to={"/about"} onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="p-2 hover:text-zinc-400">
            <Link to={"/gallery"} onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>
          <li className="p-2 hover:text-zinc-400">
            <Link to={"/login"} onClick={() => setMenuOpen(false)}>
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
