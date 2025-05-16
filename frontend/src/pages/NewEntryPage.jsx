import DashboardNavBar from "../components/DashboardNavBar.jsx";
import imgPlaceholder from "../assets/images/cloud-computing.png";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function NewEntryPage() {
  const [coverImage, setCoverImage] = useState(imgPlaceholder);
  const imgRef = useRef();
  const uploadImg = () => {
    const cachedURL = URL.createObjectURL(imgRef.current.files[0]);
    setCoverImage(cachedURL);
  };

  return (
    <div>
      <DashboardNavBar></DashboardNavBar>

      <div className="h-[85svh] flex flex-col justify-center items-center">
        <form action="" className="bg-zinc-800 text-zinc-200 p-4 rounded-2xl">
          <Link to={"/dashboard"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={"currentColor"}
              viewBox="0 0 24 24"
              className="mb-2 w-8 md:mb-0 hover:bg-zinc-900 rounded-2xl transition ease-in-out duration-250"
            >
              <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z"></path>
            </svg>
          </Link>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* image input section */}
            <div className="bg-zinc-700 h-full w-full rounded-2xl">
              <label htmlFor="img">
                <input
                  type="file"
                  name="img"
                  id="img"
                  ref={imgRef}
                  accept="image/*"
                  className="hidden"
                  onChange={uploadImg}
                />
                <div
                  className="h-82 border-2 border-dotted rounded-2xl border-zinc-400 p-4
              flex flex-col justify-center items-center gap-4 cursor-pointer"
                >
                  <img src={coverImage} className="max-h-72" />
                  {coverImage === imgPlaceholder && (
                    <p className="opacity-40">
                      drag and drop or click here to upload image
                    </p>
                  )}
                </div>
              </label>
            </div>
            {/* text input section */}
            <div className="grid grid-cols-2 gap-4 my-4 w-full flex-grow">
              <div>
                <label htmlFor="title" className="block mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="bg-zinc-700 w-full rounded-sm px-2 py-2 focus:outline-1 outline-zinc-500"
                />
              </div>
              <div>
                <label htmlFor="date" className="block mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="bg-zinc-700 w-full rounded-sm px-2 py-2 focus:outline-1 outline-zinc-500"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="caption" className="block mb-1">
                  Caption
                </label>
                <textarea
                  id="caption"
                  name="caption"
                  className="bg-zinc-700 w-full rounded-sm px-2 py-2 focus:outline-1 outline-zinc-500
                resize-none"
                  rows="6"
                ></textarea>
              </div>
              <button className="bg-indigo-500 col-span-2 py-2 rounded-2xl">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewEntryPage;
