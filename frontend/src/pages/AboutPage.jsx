import Lottie from "lottie-react";
import doggyAnimation from "../assets/lotties/doggy.json";
import yumiPlaceholder from "../assets/images/profilePic.png";

function AboutPage() {
  return (
    <div>
      <div>
        <img src={yumiPlaceholder} />
        <p>
          this app was inspired by my dog, yumi. our lives are fleeting,
          especially for our dogs whose lives are much shorter than ours. as
          such, i thought that it would be nice if i could start journalling our
          moments together, so that when she passes on, i would have a
          repositary containing our memories together and of her
        </p>
      </div>

      <div>
        <div className="w-56 md:w-[100%] md:max-w-108">
          <Lottie animationData={doggyAnimation} loop={true} />
        </div>
        <p>
          from a practical point of view, there are already many existing apps
          out there that allow users to journal, like notion. however, my other
          objective was for this project to serve as a way for me to put my SWE
          skills into practice, and build a personal portfolio that i can show
          to future employers
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
