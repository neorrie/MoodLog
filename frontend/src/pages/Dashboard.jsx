import DashboardNavBar from "../components/DashboardNavBar";
import "boxicons";

function Dashboard() {
  return (
    <div className="text-zinc-200">
      <DashboardNavBar></DashboardNavBar>
      <div className="lg:flex lg:gap-x-4 m-6">
        <div className="p-8 lg:w-[50%]">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">Entries</p>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-2xl font-semibold cursor-pointer
          transition ease-in-out duration-200"
            >
              + New Entry
            </button>
          </div>
          <div className="bg-zinc-800 mt-4 mb-8 px-4 py-2 w-full rounded-2xl grid grid-cols-[7%_93%]">
            <box-icon name="search-alt-2" color="grey"></box-icon>
            <input
              type="text"
              className="w-full outline-0"
              placeholder="Search"
            />
          </div>
          {/* journal entries go in this <div> */}

          <div
            className="bg-zinc-800 hover:bg-zinc-900 flex justify-between items-center px-4 py-2 my-4 rounded-2xl
        cursor-pointer transition ease-in-out duration-200"
          >
            <div className="grid grid-cols-[30%_70%] mr-2 ">
              <p className="col-span-2 font-semibold">
                Exploring Nature Trails
              </p>
              <p className="text-zinc-400">2025-05-05</p>
              <p className="truncate text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                aperiam sed voluptas corporis ratione deleniti esse praesentium
                tenetur, quidem vero odio repellendus dolor? Impedit similique
                doloribus consequuntur ducimus eveniet voluptate?
              </p>
            </div>
            <img src="https://placehold.co/55x55" className="rounded-2xl" />
          </div>
          {/* extra journal entries start here */}
          <div
            className="bg-zinc-800 hover:bg-zinc-900 flex justify-between items-center px-4 py-2 my-4 rounded-2xl
        cursor-pointer transition ease-in-out duration-200"
          >
            <div className="grid grid-cols-[30%_70%] mr-2 ">
              <p className="col-span-2 font-semibold">
                Exploring Nature Trails
              </p>
              <p className="text-zinc-400">2025-05-05</p>
              <p className="truncate text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                aperiam sed voluptas corporis ratione deleniti esse praesentium
                tenetur, quidem vero odio repellendus dolor? Impedit similique
                doloribus consequuntur ducimus eveniet voluptate?
              </p>
            </div>
            <img src="https://placehold.co/55x55" className="rounded-2xl" />
          </div>
          <div
            className="bg-zinc-800 hover:bg-zinc-900 flex justify-between items-center px-4 py-2 my-4 rounded-2xl
        cursor-pointer transition ease-in-out duration-200"
          >
            <div className="grid grid-cols-[30%_70%] mr-2 ">
              <p className="col-span-2 font-semibold">
                Exploring Nature Trails
              </p>
              <p className="text-zinc-400">2025-05-05</p>
              <p className="truncate text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                aperiam sed voluptas corporis ratione deleniti esse praesentium
                tenetur, quidem vero odio repellendus dolor? Impedit similique
                doloribus consequuntur ducimus eveniet voluptate?
              </p>
            </div>
            <img src="https://placehold.co/55x55" className="rounded-2xl" />
          </div>
          <div
            className="bg-zinc-800 hover:bg-zinc-900 flex justify-between items-center px-4 py-2 my-4 rounded-2xl
        cursor-pointer transition ease-in-out duration-200"
          >
            <div className="grid grid-cols-[30%_70%] mr-2 ">
              <p className="col-span-2 font-semibold">
                Exploring Nature Trails
              </p>
              <p className="text-zinc-400">2025-05-05</p>
              <p className="truncate text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                aperiam sed voluptas corporis ratione deleniti esse praesentium
                tenetur, quidem vero odio repellendus dolor? Impedit similique
                doloribus consequuntur ducimus eveniet voluptate?
              </p>
            </div>
            <img src="https://placehold.co/55x55" className="rounded-2xl" />
          </div>
          <div
            className="bg-zinc-800 hover:bg-zinc-900 flex justify-between items-center px-4 py-2 my-4 rounded-2xl
        cursor-pointer transition ease-in-out duration-200"
          >
            <div className="grid grid-cols-[30%_70%] mr-2 ">
              <p className="col-span-2 font-semibold">
                Exploring Nature Trails
              </p>
              <p className="text-zinc-400">2025-05-05</p>
              <p className="truncate text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                aperiam sed voluptas corporis ratione deleniti esse praesentium
                tenetur, quidem vero odio repellendus dolor? Impedit similique
                doloribus consequuntur ducimus eveniet voluptate?
              </p>
            </div>
            <img src="https://placehold.co/55x55" className="rounded-2xl" />
          </div>
          <div
            className="bg-zinc-800 hover:bg-zinc-900 flex justify-between items-center px-4 py-2 my-4 rounded-2xl
        cursor-pointer transition ease-in-out duration-200"
          >
            <div className="grid grid-cols-[30%_70%] mr-2 ">
              <p className="col-span-2 font-semibold">
                Exploring Nature Trails
              </p>
              <p className="text-zinc-400">2025-05-05</p>
              <p className="truncate text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                aperiam sed voluptas corporis ratione deleniti esse praesentium
                tenetur, quidem vero odio repellendus dolor? Impedit similique
                doloribus consequuntur ducimus eveniet voluptate?
              </p>
            </div>
            <img src="https://placehold.co/55x55" className="rounded-2xl" />
          </div>
          <div
            className="bg-zinc-800 hover:bg-zinc-900 flex justify-between items-center px-4 py-2 my-4 rounded-2xl
        cursor-pointer transition ease-in-out duration-200"
          >
            <div className="grid grid-cols-[30%_70%] mr-2 ">
              <p className="col-span-2 font-semibold">
                Exploring Nature Trails
              </p>
              <p className="text-zinc-400">2025-05-05</p>
              <p className="truncate text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                aperiam sed voluptas corporis ratione deleniti esse praesentium
                tenetur, quidem vero odio repellendus dolor? Impedit similique
                doloribus consequuntur ducimus eveniet voluptate?
              </p>
            </div>
            <img src="https://placehold.co/55x55" className="rounded-2xl" />
          </div>
          <div
            className="bg-zinc-800 hover:bg-zinc-900 flex justify-between items-center px-4 py-2 my-4 rounded-2xl
        cursor-pointer transition ease-in-out duration-200"
          >
            <div className="grid grid-cols-[30%_70%] mr-2 ">
              <p className="col-span-2 font-semibold">
                Exploring Nature Trails
              </p>
              <p className="text-zinc-400">2025-05-05</p>
              <p className="truncate text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                aperiam sed voluptas corporis ratione deleniti esse praesentium
                tenetur, quidem vero odio repellendus dolor? Impedit similique
                doloribus consequuntur ducimus eveniet voluptate?
              </p>
            </div>
            <img src="https://placehold.co/55x55" className="rounded-2xl" />
          </div>
          <div
            className="bg-zinc-800 hover:bg-zinc-900 flex justify-between items-center px-4 py-2 my-4 rounded-2xl
        cursor-pointer transition ease-in-out duration-200"
          >
            <div className="grid grid-cols-[30%_70%] mr-2 ">
              <p className="col-span-2 font-semibold">
                Exploring Nature Trails
              </p>
              <p className="text-zinc-400">2025-05-05</p>
              <p className="truncate text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                aperiam sed voluptas corporis ratione deleniti esse praesentium
                tenetur, quidem vero odio repellendus dolor? Impedit similique
                doloribus consequuntur ducimus eveniet voluptate?
              </p>
            </div>
            <img src="https://placehold.co/55x55" className="rounded-2xl" />
          </div>
          {/* extra journal entries end here */}
        </div>
        <div className="hidden lg:flex flex-col p-8 w-[50%] gap-8 bg-zinc-800 rounded-3xl">
          <img src="https://placehold.co/600x400" />
          <p className="font-bold text-3xl">Exploring Nature Trails</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            commodi ad animi adipisci tenetur ipsam blanditiis, optio assumenda
            facere provident explicabo nostrum nemo eum quidem corrupti, quo
            tempore aspernatur eligendi?Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Modi, commodi ad animi adipisci tenetur ipsam
            blanditiis, optio assumenda facere provident explicabo nostrum nemo
            eum quidem corrupti, quo tempore aspernatur eligendi?Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Modi, commodi ad animi
            adipisci tenetur ipsam blanditiis, optio assumenda facere provident
            explicabo nostrum nemo eum quidem corrupti, quo tempore aspernatur
            eligendi?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Modi, commodi ad animi adipisci tenetur ipsam blanditiis, optio
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            commodi ad animi adipisci tenetur ipsam blanditiis, optio assumenda
            facere provident explicabo nostrum nemo eum quidem corrupti, quo
            tempore aspernatur eligendi?Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Modi, commodi ad animi adipisci tenetur ipsam
            blanditiis, optio assumenda facere provident explicabo nostrum nemo
            eum quidem corrupti, quo tempore aspernatur eligendi?Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Modi, commodi ad animi
            adipisci tenetur ipsam blanditiis, optio assumenda facere provident
            explicabo nostrum nemo eum quidem corrupti, quo tempore aspernatur
            eligendi?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Modi, commodi ad animi adipisci tenetur ipsam blanditiis, optio
          </p>
          <p className="italic font-bold text-sm">2025-05-05</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
