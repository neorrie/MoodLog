import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Log in", path: "/login" },
  ];

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
            duration: 0.8,
          }}
        >
          <Link to={"/"}>
            M
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill={"#ffffff"}
              viewBox="0 0 24 24"
              className="inline pb-1"
            >
              <path d="M12 2A3 3 0 1 0 12 8 3 3 0 1 0 12 2z"></path>
              <path d="m2,9v9.88c0,.27.11.53.31.72s.46.3.73.28c.04,0,3.93-.11,8.46,1.99v-12.09c-4.02-1.75-8.31-1.79-8.5-1.79-.55,0-1,.45-1,1Z"></path>
              <path d="m21,8c-.19,0-4.48.03-8.5,1.79v12.09c4.51-2.09,8.43-2,8.47-1.99.27.02.53-.09.73-.28.19-.19.3-.45.3-.72v-9.88c0-.55-.45-1-1-1Z"></path>
            </svg>
            dLog
          </Link>
        </motion.div>
        <ul className="hidden md:flex text-zinc-200 gap-x-8 mx-4">
          {navItems.map((item, index) => (
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
                duration: 0.8,
              }}
            >
              <Link to={item.path}>
                {item.label}
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
            duration: 0.8,
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
          {navItems.map((item, index) => (
            <li className="p-2 hover:text-zinc-400 font-medium" key={index}>
              <Link to={item.path} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}

export default NavBar;
