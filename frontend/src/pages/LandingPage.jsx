import NavBar from "../components/NavBar";
import landingImg from "../assets/landingImg.png";

function LandingPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div
        className="h-[85dvh] flex flex-col items-center justify-center mx-10
      lg:flex-row lg:mx-46"
      >
        <div className="max-w-96 lg:max-w-2xl my-6 lg:order-3">
          <img src={landingImg} />
        </div>
        <div className="flex flex-col items-center lg:order-1 lg:items-start">
          <div>
            <p className="text-zinc-300 text-center my-4 text-3xl font-bold md:text-4xl lg:text-left lg:mb-12">
              reflect <p className="inline text-indigo-500">simply,</p> grow{" "}
              <p className="inline text-indigo-500">mindfully</p>
            </p>
            <p
              className="text-zinc-300 text-center my-4 md:text-lg 
            lg:text-left lg:mb-8"
            >
              A clean, intuitive journaling app designed to help you pause,
              reflect, and track your thoughts — anytime, anywhere.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 lg:space-x-10">
            <button className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-full py-3 px-12 transition ease-in-out duration-300">
              Get Started
            </button>
            <button className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-full py-3 px-12 transition ease-in-out duration-300">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
