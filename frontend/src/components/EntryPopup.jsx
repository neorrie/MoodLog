import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EntryPopup(props) {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEditing) {
      setValue("title", props.title);
      setValue("caption", props.caption);
      const tempDate = new Date(props.date).toISOString().split("T")[0];
      setValue("date", tempDate);
    }
  }, [isEditing, props.caption, props.date, props.title, setValue]);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      await axios.post(
        `http://localhost:8888/journals/${props.tempVar}`,
        data,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      console.log("✅ Successfully edited your journal entry");
      props.setEntryOpen(null);
      setIsEditing(false);
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Error editing journal entry", error);
    }
  };

  return (
    <AnimatePresence>
      {props.trigger && (
        <motion.div
          className="fixed inset-0 bg-zinc-700/70 text-zinc-200 z-10 flex justify-center items-center p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
        >
          <div
            className="flex flex-col bg-zinc-900 p-6 rounded-2xl ring-1 ring-zinc-800
      max-h-[85dvh]"
          >
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill={"#ffffff"}
                viewBox="0 0 24 24"
                className="cursor-pointer"
                onClick={() => {
                  props.setEntryOpen(null);
                  setIsEditing(false);
                }}
              >
                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
              </svg>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit(onSubmit)}>
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
                      {...register("title", {
                        required: "Enter a title",
                      })}
                    />
                    <p className="text-red-400 text-sm">
                      {errors.title?.message}
                    </p>
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
                      {...register("date", {
                        required: "Select a date",
                      })}
                    />
                    <p className="text-red-400 text-sm">
                      {errors.date?.message}
                    </p>
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
                      {...register("caption", {
                        required: "Write a caption",
                      })}
                    ></textarea>
                    <p className="text-red-400 text-sm">
                      {errors.caption?.message}
                    </p>
                  </div>
                  <button
                    className="bg-red-400 hover:bg-red-500 py-2 rounded-2xl cursor-pointer
                transition ease-in-out duration-250"
                    onClick={() => {
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-indigo-500 hover:bg-indigo-600 py-2 rounded-2xl cursor-pointer
                transition ease-in-out duration-250"
                    type="submit"
                  >
                    Edit
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <div className="my-6">
                  <p className="font-bold text-2xl">{props.title}</p>
                  <p className="italic text-sm my-4 text-zinc-400">
                    {props.formattedDate}
                  </p>
                  <p>{props.caption}</p>
                </div>

                <div className="w-full flex justify-end gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill={"#ffffff"}
                    viewBox="0 0 24 24"
                    className="cursor-pointer"
                    onClick={() => {
                      setIsEditing(true);
                    }}
                  >
                    <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path>
                    <path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill={"#ffffff"}
                    viewBox="0 0 24 24"
                    className="cursor-pointer"
                  >
                    <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path>
                    <path d="M9 10h2v8H9zM13 10h2v8h-2z"></path>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EntryPopup;
