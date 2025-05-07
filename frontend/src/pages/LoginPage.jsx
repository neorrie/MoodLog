import Lottie from "lottie-react";
import zenAnimation from "../assets/lotties/zen.json";
import NavBar from "../components/NavBar.jsx";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="h-[85dvh] text-zinc-200 flex flex-col md:flex-row md:gap-20 md:mx-10 items-center justify-center">
        <div className="w-56 md:w-[100%] md:max-w-108">
          <Lottie animationData={zenAnimation} loop={true} />
        </div>

        <div>
          <p className="text-2xl md:text-3xl font-bold text-center my-2">
            Welcome to MoodLog
          </p>

          <form action="" className="flex flex-col items-center">
            <div className="grid grid-cols-[15%_85%] my-3 items-center bg-zinc-800 rounded-full w-76">
              <box-icon
                type="solid"
                name="user"
                color="grey"
                className="justify-self-center"
              ></box-icon>
              <input
                type="text"
                placeholder="Username"
                className="px-2 py-4 outline-0"
              />
            </div>
            <div className="grid grid-cols-[15%_85%] my-3 items-center bg-zinc-800 rounded-full w-76">
              <box-icon
                type="solid"
                name="lock"
                color="grey"
                className="justify-self-center"
              ></box-icon>
              <input
                type="text"
                placeholder="Password"
                className="px-2 py-4 outline-0"
              />
            </div>
            <button
              type="submit"
              className="my-2 bg-indigo-500 hover:bg-indigo-600 w-76 py-4 rounded-full font-semibold
              transition ease-in-out duration-250 cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span className="text-indigo-500 hover:text-indigo-600 transition ease-in-out duration-250">
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
