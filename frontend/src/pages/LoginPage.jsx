import Lottie from "lottie-react";
import zenAnimation from "../assets/lotties/zen.json";
import NavBar from "../components/NavBar.jsx";

function LoginPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="h-[85dvh] text-zinc-200 flex flex-col items-center justify-center">
        <div className="w-56">
          <Lottie animationData={zenAnimation} loop={true} />
        </div>

        <div>
          <p className="text-2xl font-bold text-center my-2">
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
              className="my-2 bg-indigo-500 hover:bg-indigo-600 w-76 py-4 rounded-full font-semibold"
            >
              Login
            </button>
          </form>

          <p className="text-center">
            Don't have an account?{" "}
            <span className="text-indigo-500 hover:text-indigo-600">
              Register!
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
