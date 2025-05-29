import Lottie from "lottie-react";
import zenAnimation from "../assets/lotties/zen.json";
import NavBar from "../components/NavBar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "motion/react";

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
      console.log("✅ Logged in");
      localStorage.setItem("accessToken", accessToken);
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Error logging in:", error);
    }
  };

  return (
    <>
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
            duration: 1.2,
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
              duration: 1.2,
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
                duration: 1.2,
              }}
            >
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
                duration: 1.2,
              }}
            >
              <box-icon
                type="solid"
                name="lock"
                color="grey"
                className="justify-self-center"
              ></box-icon>
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
                duration: 1.2,
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
              duration: 1.2,
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
