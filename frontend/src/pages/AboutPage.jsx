import Lottie from "lottie-react";
import doggyAnimation from "../assets/lotties/doggy.json";
import profilePicPlaceholder from "../assets/images/profilePic.png";
import NavBar from "../components/NavBar";

function AboutPage() {
  return (
    <div className="text-zinc-200 ">
      <NavBar></NavBar>

      <div className="flex flex-col p-10 gap-30 md:gap-25 lg:gap-10">
        <p className="font-bold text-4xl md:text-5xl lg:text-6xl">
          ABOUT MY MOTIVATION
        </p>
        <div className="flex flex-col md:flex-row md:gap-20 md:mx-30 items-center justify-center ">
          <div className="w-76 md:w-1/2">
            <Lottie animationData={doggyAnimation} loop={true} />
          </div>
          <p className="md:w-1/2">
            This app was born out of love for my dog, Yumi. Our time with our
            pets is heartbreakingly brief, and I wanted a way to preserve the
            fleeting moments we share. So, I created a space where I could
            journal our memories—her quirks, our adventures, and the little
            things I’ll one day miss. When she’s no longer by my side, this app
            will be a digital keepsake of her life and our journey together.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:gap-20 md:flex-row md:mx-30">
          <img
            src={profilePicPlaceholder}
            className="w-56 md:w-1/2 md:order-2 md:max-w-108"
          />
          <p className="my-10 md:order-1 md:w-1/2">
            While platforms like Notion already offer journalling features, I
            wanted to build something more personal—and hands-on. This project
            isn't just a tribute to Yumi; it's also a sandbox for me to sharpen
            my software engineering skills and craft a meaningful addition to my
            portfolio. It’s a blend of passion and practice, with a purpose
            beyond the technical.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
