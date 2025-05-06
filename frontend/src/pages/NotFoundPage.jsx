import NavBar from "../components/NavBar.jsx";
import errorImg from "../assets/astrofish.png";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="h-[85dvh] flex flex-col items-center justify-center mx-10">
        <div className="text-zinc-200 text-center mb-4">
          <p className="font-semibold text-8xl">4 0 4</p>
          <p className="text-2xl mt-4">PAGE NOT FOUND</p>
          <p className="opacity-0">
            Oops! You’ve wandered off to a page that doesn’t exist.
          </p>
        </div>
        <div>
          <img src={errorImg} className="max-w-60 mb-6" />
        </div>
        <div>
          <Link to={"/"}>
            <button
              className="text-zinc-300 bg-zinc-800 hover:bg-zinc-700 px-6 py-4 rounded-full
          transition ease-in-out duration-300 cursor-pointer"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
