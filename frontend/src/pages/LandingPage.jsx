import NavBar from "../components/NavBar";
import landingImgPlaceholder from "../assets/images/landingImg.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div
        className="h-[85svh] flex flex-col items-center justify-center mx-10
      lg:flex-row lg:mx-46"
      >
        <div className="max-w-96 lg:max-w-2xl my-6 lg:order-3">
          <img src={landingImgPlaceholder} />
        </div>
        <div className="flex flex-col items-center lg:order-1 lg:items-start">
          <div>
            <p className="text-zinc-200 text-center my-4 text-3xl font-bold md:text-4xl lg:text-left lg:mb-12">
              reflect <span className="text-indigo-500">simply</span>, grow{" "}
              <span className="text-indigo-500">mindfully</span>
            </p>

            <p
              className="text-zinc-200 text-center my-4 md:text-lg 
            lg:text-left lg:mb-8"
            >
              A clean, intuitive journaling app designed to help you pause,
              reflect, and track your thoughts — anytime, anywhere.
            </p>
          </div>
          <div className="flex gap-4 mt-4 lg:gap-10">
            <Link to={"/register"}>
              <button
                className="bg-zinc-800 text-zinc-200 hover:bg-zinc-900 rounded-full py-3 w-44
            transition ease-in-out duration-250 cursor-pointer"
              >
                Get Started
              </button>
            </Link>

            <Link to={"/login"}>
              <button
                className="bg-zinc-800 text-zinc-200 hover:bg-zinc-900 rounded-full py-3 w-44
              transition ease-in-out duration-250 cursor-pointer"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
