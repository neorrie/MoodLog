function NewEntryPage() {
  return (
    <div className="m-0 h-[100svh] flex justify-center items-center">
      <form
        action=""
        className="flex flex-col justify-center items-center bg-zinc-800 text-zinc-200
        p-6 rounded-2xl"
      >
        <img src="https://placehold.co/600x400" className="max-w-74" />

        <div className="grid grid-cols-2 gap-4 my-4 w-full">
          <div>
            <label htmlFor="title" className="block">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-zinc-700 w-full rounded-sm px-2 py-2 outline-0"
            />
          </div>
          <div>
            <label htmlFor="date" className="block">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="bg-zinc-700 w-full rounded-sm px-2 py-2 outline-0"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="caption" className="block">
              Caption
            </label>
            <textarea
              id="caption"
              className="bg-zinc-700 w-full rounded-sm px-2 py-2 outline-0"
            ></textarea>
          </div>
          <button className="bg-indigo-500 col-span-2 py-2 rounded-2xl">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewEntryPage;
