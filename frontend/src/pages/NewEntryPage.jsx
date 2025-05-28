import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function NewEntryPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8888/journals", data);
      console.log("✅ Data sent to backend", console.log(response.data));
    } catch (error) {
      console.error("❌ Error:", error);
    }
  };

  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-800 text-zinc-200 p-4 rounded-2xl"
      >
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
                {...register("title")}
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
                {...register("date")}
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
                {...register("caption")}
              ></textarea>
            </div>
            <div>
              <label htmlFor="date" className="block mb-1">
                File upload
              </label>
              <input
                type="file"
                id="coverImg"
                name="coverImg"
                className="bg-zinc-700 w-full rounded-sm px-2 py-2 focus:outline-1 outline-zinc-500"
                {...register("coverImg")}
              />
            </div>
            <button className="bg-indigo-500 col-span-2 py-2 rounded-2xl">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewEntryPage;
