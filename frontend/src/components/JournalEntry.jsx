import EntryPopup from "./EntryPopup";

function JournalEntry(props) {
  const isOpen = props.entryOpen === props.id;
  const formattedDate = new Date(props.date).toDateString();

  return (
    <div>
      <div
        className={`bg-zinc-800 hover:bg-zinc-900 flex px-4 py-2 my-4 rounded-2xl
        cursor-pointer transition ease-in-out duration-250 ${
          isOpen ? "ring-1 ring-zinc-400" : "ring-0"
        }`}
        onClick={() => props.setEntryOpen(isOpen ? null : props.id)}
      >
        <div className="flex flex-col mr-2 w-full">
          <p className="font-semibold">{props.title}</p>
          <div className="flex gap-3">
            <p className="text-zinc-400">{formattedDate}</p>
            <p className="text-zinc-400 truncate flex-1">{props.caption}</p>
          </div>
        </div>
      </div>

      <EntryPopup
        trigger={isOpen}
        title={props.title}
        date={props.date}
        caption={props.caption}
        setEntryOpen={props.setEntryOpen}
      />
    </div>
  );
}

export default JournalEntry;
