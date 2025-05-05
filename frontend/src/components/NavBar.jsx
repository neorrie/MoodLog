import { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-6">
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
        </ul>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center px-4 py-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <box-icon
            name={menuOpen ? "x" : "menu"}
            color="grey"
            className="cursor-pointer"
          ></box-icon>
        </button>
      </div>

      {/* mobile hamburger menu */}
      <div
        className={`flex flex-col fixed bg-zinc-900 inset-x-4 top-4 z-50 rounded-3xl p-6 ring-1 ring-zinc-800 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center mb-6 p-2">
          <p className="text-zinc-400 font-medium">Navigation</p>
          <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
            <box-icon name="x" color="grey"></box-icon>
          </button>
        </div>
        <ul className="divide-y divide-zinc-800 text-zinc-200">
          <li className="p-2">
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link to={"/about"} onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="p-2">
            <Link to={"/gallery"} onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
