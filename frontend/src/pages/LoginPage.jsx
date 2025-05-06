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
          <p className="text-2xl font-bold mb-6 text-center">
            Welcome to MoodLog
          </p>

          <form action="" className="flex flex-col items-center">
            <div className="flex items-center mt-6 mb-3 bg-zinc-700 px-16 py-4 rounded-full">
              <box-icon type="solid" name="user" color="grey"></box-icon>
              <input type="text" placeholder="Username" />
            </div>
            <div className="flex items-center mb-6 mt-3 bg-zinc-700 px-16 py-4 rounded-full">
              <box-icon type="solid" name="lock" color="grey"></box-icon>
              <input type="password" placeholder="Password" />
            </div>
            <button
              type="submit"
              className="my-4 bg-zinc-800 px-8 py-4 rounded-full"
            >
              Login
            </button>
          </form>

          <p className="mt-20 text-center">
            Don't have an account?{" "}
            <span className="text-indigo-500">Register!</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
