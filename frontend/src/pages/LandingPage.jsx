import NavBar from "../components/NavBar";
import landingImgPlaceholder from "../assets/images/landingImg.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function LandingPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div
        className="h-[85svh] flex flex-col items-center justify-center mx-[10%]
      lg:flex-row lg:mx-[20%]"
      >
        <motion.img
          className="max-w-108 lg:min-w-108 lg:max-w-2xl my-6 lg:order-3"
          src={landingImgPlaceholder}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
            delay: 0.8,
            duration: 1.5,
          }}
        />

        <div className="flex flex-col items-center lg:order-1 lg:items-start">
          <div>
            <motion.h1
              className="text-zinc-200 text-center my-4 text-3xl font-bold md:text-4xl lg:text-left lg:mb-12"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 25,
                delay: 1,
                duration: 1.5,
              }}
            >
              reflect <span className="text-indigo-500">simply</span>, grow{" "}
              <span className="text-indigo-500">mindfully</span>
            </motion.h1>

            <motion.p
              className="text-zinc-200 text-center my-4 md:text-lg 
            lg:text-left lg:mb-8"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 25,
                delay: 1.2,
                duration: 1.5,
              }}
            >
              A clean, intuitive journaling app designed to help you pause,
              reflect, and track your thoughts — anytime, anywhere.
            </motion.p>
          </div>
          <motion.div
            className="flex gap-4 mt-4 lg:gap-10"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 25,
              delay: 1.4,
              duration: 1.5,
            }}
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
