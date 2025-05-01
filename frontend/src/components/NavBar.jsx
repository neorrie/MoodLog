import landingLogo from "../assets/book.png";
import "boxicons";

function NavBar() {
  return (
    <div className="bg-red-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl cursor-pointer">
          <img className="h-10 inline" src={landingLogo} />
          MoodLog
        </div>
        <div>
          <box-icon name="menu" className="cursor-pointer"></box-icon>
        </div>
      </div>

      <div className="z-[-1] absolute bg-blue-400 w-full left-0 pt-3 pl-7">
        <p className="text-xl mx-4 my-4">Home</p>
        <p className="text-xl mx-4 my-4">About</p>
        <p className="text-xl mx-4 my-4">Gallery</p>
      </div>
    </div>
  );
}

export default NavBar;
