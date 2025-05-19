function EntryPopup(props) {
  return props.trigger ? (
    <div
      className="fixed inset-0 bg-zinc-700/60 z-10 flex justify-center items-center p-10"
      onClick={() => props.setEntryOpen(null)}
    >
      <div
        className="flex flex-col items-center text-zinc-200 bg-zinc-900 p-6 rounded-2xl ring-1 ring-zinc-800
      max-h-[85dvh] overflow-scroll"
      >
        <img src={props.imgURL} />
        <div className="my-6">
          <p className="font-bold text-2xl">{props.title}</p>
          <p className="italic text-sm my-4 text-zinc-400">{props.date}</p>
          <p className="">{props.caption}</p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default EntryPopup;
