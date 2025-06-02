import Lottie from "lottie-react";
import writingAnimation from "../assets/lotties/writing.json";
import codingAnimation from "../assets/lotties/coding.json";
import walkingAnimation from "../assets/lotties/walking.json";
import thinkingAnimation from "../assets/lotties/thinking.json";
import NavBar from "../components/NavBar";
import { motion, useInView } from "motion/react";

function AboutPage() {
  return (
    <div className="text-zinc-200">
      <NavBar></NavBar>
      <motion.p
        className="font-bold text-4xl md:text-5xl lg:text-6xl text-center p-4"
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
        ABOUT THE PROJECT
      </motion.p>
      <motion.div
        className="flex flex-col p-10 gap-20 lg:gap-30 m-[5%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.9,
          duration: 1,
        }}
      >
        <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
          <Lottie animationData={writingAnimation} loop={true} />
          <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="font-bold text-2xl md:text-4xl lg:text-3xl">
              project introduction
            </p>
            <p className="text-sm md:text-lg text-zinc-400 text-center lg:text-left">
              MoodLog is a lightweight journaling app built with the MERN stack.
              It's designed to help users capture and reflect on meaningful
              moments in their daily lives
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
          <Lottie
            animationData={codingAnimation}
            loop={true}
            className="lg:order-2"
          />
          <div className="flex flex-col items-center lg:items-start gap-5 lg:order-1">
            <p className="font-bold text-2xl md:text-4xl lg:text-3xl">
              why i built it
            </p>
            <p className="text-sm md:text-lg text-zinc-400 text-center lg:text-left">
              As someone new to software development, I wanted a project that
              combined personal value with technical learning. Thus, this was
              definitely an opportunity to sharpen my skills while building
              something that could grow into a tool I’d actually use in my own
              life
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
          <Lottie
            animationData={thinkingAnimation}
            loop={true}
            className="max-w-108"
          />
          <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="font-bold text-2xl md:text-4xl lg:text-3xl">
              what can it do?
            </p>
            <p className="text-sm md:text-lg text-zinc-400 text-center lg:text-left">
              For now, users can create, edit, and delete journal entries, all
              protected by a simple authentication system. Each entry includes a
              title, caption, and date—making it easy to track and organize
              thoughts over time
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
          <Lottie
            animationData={walkingAnimation}
            loop={true}
            className="lg:order-2 max-w-108"
          />
          <div className="flex flex-col items-center lg:items-start gap-5 lg:order-1">
            <p className="font-bold text-2xl md:text-4xl lg:text-3xl">
              what's next
            </p>
            <p className="text-sm md:text-lg text-zinc-400 text-center lg:text-left">
              The project is still a work in progress. I'm planning to add
              features like image uploads and reminders to help users stay
              consistent with journaling. As I keep learning, I hope to keep
              evolving MoodLog into something more personalized and useful.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;
