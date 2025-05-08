import "boxicons";
import { useState } from "react";
import { Link } from "react-router-dom";

function DashboardNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-end">
        <box-icon
          name="dots-vertical-rounded"
          color="white"
          className="sm:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        ></box-icon>
      </div>

      <div
        className={`sm:hidden bg-zinc-900 p-6 fixed inset-x-4 top-20 z-100 rounded-3xl ring-1 ring-zinc-800
      transition-all duration-300 ease-in-out ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      >
        <ul className="divide-y divide-zinc-800">
          <li className="p-2 hover:text-zinc-400">Profile</li>
          <li className="p-2 hover:text-zinc-400">
            <Link to={"/login"} onClick={() => setMenuOpen(false)}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardNavBar;
