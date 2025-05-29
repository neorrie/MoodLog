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
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 5c1.73 0 3 1.27 3 3s-1.27 3-3 3-3-1.27-3-3 1.27-3 3-3m0 13a7.98 7.98 0 0 1-5.48-2.18C7.33 16.16 9.03 15 11 15h2c1.97 0 3.66 1.16 4.47 2.82A7.94 7.94 0 0 1 12 20"></path>
              </svg>
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
                <path d="M20 4H4c-1.1 0-2 .9-2 2v.25l10 7.5 10-7.5V6c0-1.1-.9-2-2-2"></path>
                <path d="M12 16c-.21 0-.42-.07-.6-.2L2 8.75V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8.75l-9.4 7.05c-.18.13-.39.2-.6.2"></path>
              </svg>
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
                duration: 0.8,
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
              duration: 0.8,
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
