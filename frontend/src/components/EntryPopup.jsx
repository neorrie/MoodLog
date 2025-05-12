function EntryPopup(props) {
  return props.trigger ? (
    <div className="text-red-500 bg-amber-400">
      <p>{props.title}</p>
      <p>{props.date}</p>
      <p>{props.caption}</p>
      <img src={props.imgURL} />
      <button>close</button>
    </div>
  ) : (
    ""
  );
}

export default EntryPopup;
