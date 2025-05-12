function EntryPopup(props) {
  return props.trigger ? (
    <div className="flex flex-col items-center text-zinc-200 bg-zinc-900 p-6 rounded-2xl ring-1 ring-zinc-800">
      <img src={props.imgURL} className="" />
      <div>
        <p>{props.title}</p>
        <p>{props.date}</p>
        <p>{props.caption}</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default EntryPopup;
