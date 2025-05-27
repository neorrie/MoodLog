import DashboardNavBar from "../components/DashboardNavBar.jsx";
import "boxicons";
import JournalEntry from "../components/JournalEntry.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [searchEntry, setSearchEntry] = useState("");
  const [entryOpen, setEntryOpen] = useState(null);
  const [journalData, setJournalData] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await axios.get("http://localhost:8888/journals", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setJournalData(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="text-zinc-200">
      <DashboardNavBar></DashboardNavBar>
      <div className="m-6">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">Entries</p>
            <Link to={"/new"}>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-2xl font-semibold cursor-pointer
          transition ease-in-out duration-200"
              >
                + New Entry
              </button>
            </Link>
          </div>
          <div className="bg-zinc-800 mt-4 mb-8 px-4 py-2 w-full rounded-2xl flex gap-2">
            <box-icon name="search-alt-2" color="grey"></box-icon>
            <input
              type="text"
              className="grow outline-0"
              placeholder="Search"
              value={searchEntry}
              onChange={(event) => {
                setSearchEntry(event.target.value);
                setEntryOpen(null);
              }}
            />
          </div>
          {/* journal entries should go here */}
          {journalData.map((journal, index) => {
            return (
              journal.title.toLowerCase().includes(searchEntry) && (
                <JournalEntry
                  key={index}
                  id={index}
                  title={journal.title}
                  date={journal.date}
                  imgURL={journal.imgURL}
                  caption={journal.caption}
                  entryOpen={entryOpen}
                  setEntryOpen={setEntryOpen}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
