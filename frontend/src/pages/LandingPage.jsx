import NavBar from "../components/NavBar";
import landingImg from "../assets/landingImg.png";

function LandingPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="h-[85dvh] flex flex-col items-center justify-center mx-10 lg:flex-row lg:mx-20">
        <div className="max-w-2xl my-6 lg:order-3">
          <img src={landingImg} />
        </div>
        <div className="flex flex-col items-center lg:order-1 lg:items-start">
          <div>
            <p className="text-zinc-300 text-center my-4 text-3xl font-bold md:text-4xl lg:text-left lg:mb-12">
              Reflect <p className="inline text-emerald-600">Simply,</p> Grow{" "}
              <p className="inline text-emerald-600">Mindfully</p>
            </p>
            <p
              className="text-zinc-300 text-center my-4 md:text-lg 
            lg:text-left lg:mb-8"
            >
              {/* A clean, intuitive journaling app designed to help you pause,
              reflect, and track your thoughts — anytime, anywhere. */}
              A clean, intuitive journaling app designed to help you pause,
              reflect, and track your thoughts — anytime, anywhere. Whether
              you're capturing a fleeting idea, processing your day, or setting
              mindful intentions, our seamless experience supports your mental
              clarity and personal growth.
            </p>
          </div>
          <div className="flex space-x-4 mt-6 lg:space-x-10">
            <button className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-full py-3 px-12 lg:px-20">
              Get Started
            </button>
            <button className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-full py-3 px-12 lg:px-20">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
