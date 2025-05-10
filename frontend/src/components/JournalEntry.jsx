import { useState } from "react";

function JournalEntry({ title, date, imgURL, caption }) {
  const [entryOpen, setEntryOpen] = useState(false);

  return (
    <div>
      <div
        className={`bg-zinc-800 hover:bg-zinc-900 flex justify-between items-center px-4 py-2 my-4 rounded-2xl
        cursor-pointer ${entryOpen ? "ring-1 ring-zinc-400" : "ring-0"}`}
        onClick={() => setEntryOpen(!entryOpen)}
      >
        <div className="flex flex-col mr-2 w-[80%] md:">
          <p className="font-semibold">{title}</p>
          <div className="flex gap-3">
            <p className="text-zinc-400 ">{date}</p>
            <p className="text-zinc-400 truncate flex-1">{caption}</p>
          </div>
        </div>
        <img src={imgURL} className="rounded-2xl" />
      </div>
    </div>
  );
}

export default JournalEntry;
