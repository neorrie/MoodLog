import Lottie from "lottie-react";
import zenAnimation from "../assets/lotties/zen.json";
import NavBar from "../components/NavBar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "motion/react";

function RegistrationPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8888/users", data);
      console.log("✅ Success:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("❌ Error submitting signup:", error);
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="h-[85dvh] text-zinc-200 flex flex-col md:flex-row md:gap-20 md:mx-10 items-center justify-center">
        <motion.div
          className="hidden md:block w-56 md:w-[100%] md:max-w-108"
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
            Get started for free
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
                  required: "Username is required",
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message:
                      "Username should only consist of alphanumeric characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Username cannot exceed 15 characters",
                  },
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
                delay: 0.6,
                duration: 1.2,
              }}
            >
              <box-icon
                type="solid"
                name="user-circle"
                color="grey"
                className="justify-self-center"
              ></box-icon>
              <input
                type="text"
                placeholder="Name"
                className="px-2 py-4 outline-0"
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Name should consist of only alphabets",
                  },
                  maxLength: {
                    value: 15,
                    message: "Username cannot exceed 15 characters",
                  },
                })}
              />
            </motion.div>
            <p className="text-red-400 text-sm">{errors.name?.message}</p>
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
                name="envelope"
                color="grey"
                className="justify-self-center"
              ></box-icon>
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-4 outline-0"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
            </motion.div>
            <p className="text-red-400 text-sm">{errors.email?.message}</p>
            <motion.div
              className="grid grid-cols-[15%_85%] my-3 items-center bg-zinc-800 rounded-full w-76"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.8,
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
                  required: "Enter a valid password",
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
              Register
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
              delay: 0.9,
              duration: 1.2,
            }}
          >
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-indigo-500 hover:text-indigo-600 transition ease-in-out duration-250">
                Sign in
              </span>
            </Link>
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
