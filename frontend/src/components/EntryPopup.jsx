import { motion, AnimatePresence } from "motion/react";

function EntryPopup(props) {
  return props.trigger ? (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-zinc-900/60 text-zinc-200 z-10 flex justify-center items-center p-10"
        onClick={() => props.setEntryOpen(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
      >
        <div
          className="flex flex-col items-center  bg-zinc-900 p-6 rounded-2xl ring-1 ring-zinc-800
      max-h-[85dvh] overflow-scroll"
        >
          <img src={props.imgURL} />
          <div className="my-6">
            <p className="font-bold text-2xl">{props.title}</p>
            <p className="italic text-sm my-4 text-zinc-400">{props.date}</p>
            <p className="">{props.caption}</p>
          </div>
          <button
            className="my-2 bg-indigo-500 hover:bg-indigo-600 w-full py-4 rounded-full font-semibold
              transition ease-in-out duration-250 cursor-pointer"
          >
            Edit
          </button>
          <button
            className="my-2 bg-indigo-500 hover:bg-indigo-600 w-full py-4 rounded-full font-semibold
              transition ease-in-out duration-250 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  ) : (
    ""
  );
}

export default EntryPopup;
