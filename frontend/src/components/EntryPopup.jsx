function EntryPopup(props) {
  return props.trigger ? (
    <div className="flex flex-col items-center text-zinc-200 bg-zinc-900 p-6 rounded-2xl ring-1 ring-zinc-800">
      <img src={props.imgURL} className="" />
      <div className="my-6">
        <p className="font-bold text-2xl">{props.title}</p>
        <p className="italic text-sm my-4 text-zinc-400">{props.date}</p>
        <p className="">{props.caption}</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default EntryPopup;
