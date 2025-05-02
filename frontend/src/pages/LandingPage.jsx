import NavBar from "../components/NavBar";
import landingImg from "../assets/landingImg.png";

function LandingPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col items-center px-6">
        <div>
          <img src={landingImg} />
        </div>
        <div>
          <p className="text-zinc-300 text-center text-4xl my-4">
            Reflect Simply. Grow Mindfully.
          </p>
          <p className="text-zinc-300 text-center my-4">
            A clean, intuitive journaling app designed to help you pause,
            reflect, and track your thoughts — anytime, anywhere.
          </p>
        </div>
        <div>
          <button className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-full py-3 px-16 mb-4">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
