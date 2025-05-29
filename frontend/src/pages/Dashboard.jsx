import DashboardNavBar from "../components/DashboardNavBar.jsx";
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
          <div className="bg-zinc-800 mt-4 mb-8 px-4 py-2 w-full rounded-2xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill={"#a1a1aa"}
              viewBox="0 0 24 24"
            >
              <path d="m14.25,13.6c1.08-1.23,1.74-2.84,1.74-4.6,0-3.86-3.14-7-7-7S1.99,5.14,1.99,9s3.14,7,7,7c1.76,0,3.37-.66,4.6-1.74l1.34,2.8,5,5,2.12-2.12-5-5-2.8-1.34Z"></path>
            </svg>
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
