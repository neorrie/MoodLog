import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilePicPlaceholder from "../assets/images/profilePic.png";

function DashboardNavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const onLogout = () => {
    localStorage.removeItem("accessToken"); // clear token
    setMenuOpen(false); // close menu
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="p-6 text-zinc-200">
      <div className="flex justify-end">
        <img
          src={profilePicPlaceholder}
          className="max-w-10"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <div
        className={`bg-zinc-900 p-4 fixed w-52 top-20 right-5 z-100 rounded-2xl ring-1 ring-zinc-800
      transition-all duration-300 ease-in-out ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      >
        <ul className="divide-y divide-zinc-800">
          <li className="p-2 hover:text-zinc-400 cursor-pointer">My Profile</li>
          <li
            className="p-2 hover:text-zinc-400 cursor-pointer"
            onClick={onLogout}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardNavBar;
