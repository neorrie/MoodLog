import Lottie from "lottie-react";
import zenAnimation from "../assets/lotties/zen.json";
import NavBar from "../components/NavBar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "motion/react";
import { Toaster, toast } from "sonner";

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8888/users/login",
        data
      );
      const accessToken = response.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later");
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <NavBar></NavBar>
      <div className="h-[85dvh] text-zinc-200 flex flex-col md:flex-row md:gap-20 md:mx-10 items-center justify-center">
        <motion.div
          className="w-56 md:w-[100%] md:max-w-108"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.7,
            duration: 0.8,
          }}
        >
          <Lottie animationData={zenAnimation} loop={true} />
        </motion.div>

        <div>
          <motion.p
            className="text-2xl md:text-3xl font-bold text-center my-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 0.8,
            }}
          >
            Welcome to MoodLog
          </motion.p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center"
          >
            <motion.div
              className="grid grid-cols-[15%_85%] my-3 items-center bg-zinc-800 rounded-full w-76"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.5,
                duration: 0.8,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill={"#a1a1aa"}
                viewBox="0 0 24 24"
                className="justify-self-center"
              >
                <path d="M12 2a5 5 0 1 0 0 10 5 5 0 1 0 0-10M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1"></path>
              </svg>
              <input
                type="text"
                placeholder="Username"
                className="px-2 py-4 outline-0"
                {...register("username", {
                  required: "Please enter your username",
                })}
              />
            </motion.div>
            <p className="text-red-400 text-sm">{errors.username?.message}</p>

            <motion.div
              className="grid grid-cols-[15%_85%] my-3 items-center bg-zinc-800 rounded-full w-76"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.7,
                duration: 0.8,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill={"#a1a1aa"}
                viewBox="0 0 24 24"
                className="justify-self-center"
              >
                <path d="M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9z"></path>
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="px-2 py-4 outline-0"
                {...register("password", {
                  required: "Please enter your password",
                })}
              />
            </motion.div>
            <p className="text-red-400 text-sm">{errors.password?.message}</p>

            <motion.button
              type="submit"
              className="my-2 bg-indigo-500 hover:bg-indigo-600 w-76 py-4 rounded-full font-semibold cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.9,
                duration: 0.8,
              }}
            >
              Login
            </motion.button>
          </form>

          <motion.p
            className="text-center text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 1,
              duration: 0.8,
            }}
          >
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span className="text-indigo-500 hover:text-indigo-600 transition ease-in-out duration-250">
                Register
              </span>
            </Link>
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
