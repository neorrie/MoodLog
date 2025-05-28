import { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import { motion } from "motion/react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-6">
      {/* desktop view */}
      <div className="flex justify-between items-center">
        <motion.div
          className="text-2xl text-zinc-200 cursor-pointer flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
        >
          <Link to={"/home"}>
            M<box-icon name="book-reader" color="white"></box-icon>dLog
          </Link>
        </motion.div>
        <ul className="hidden md:flex text-zinc-200 gap-x-8 mx-4">
          {["Home", "About", "Gallery", "Sign in"].map((item, index) => (
            <motion.li
              key={index}
              className="font-medium relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.5 + index * 0.2,
                duration: 1.2,
              }}
            >
              <Link to={`/${item.toLowerCase()}`}>
                {item}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-zinc-200 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center px-4 py-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
        >
          <box-icon
            name="menu"
            color="grey"
            className="cursor-pointer"
          ></box-icon>
        </motion.button>
      </div>

      {/* mobile hamburger popup */}
      <motion.div
        className={`md:hidden fixed bg-zinc-900 inset-x-4 top-20 z-100 rounded-3xl p-6 ring-1 ring-zinc-800
          transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <ul className="divide-y divide-zinc-800 text-zinc-200">
          {["Home", "About", "Gallery", "Sign in"].map((item, index) => (
            <li className="p-2 hover:text-zinc-400 font-medium" key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}

export default NavBar;
