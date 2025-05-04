import "boxicons";

function NavBar() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl text-zinc-200 cursor-pointer flex items-center">
          M<box-icon name="book-reader" color="white"></box-icon>dLog
        </div>
        <button className="flex items-center px-4 py-2">
          <box-icon
            name="menu"
            color="grey"
            className="cursor-pointer"
          ></box-icon>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
