import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [userName, setUserName] = useState("");

  const handleSearch = () => {
    localStorage.setItem("userName", userName);
    console.log(userName);

    // updateParentProp();
  };

  return (
    <>
      <header className="mt-[2rem] flex flex-col justify-center items-center">
        <h1 className="text-[3rem] font-mono text-slate-300">Git Searcher</h1>

        <div className="flex flex-row w-full mt-8 justify-between gap-[1rem] rounded-xl bg-[#0f2150] p-[1rem]">
          <div className="flex flex-row justify-around gap-3 items-center  w-2/3">
            <div className="text-white text-2xl cursor-pointer">
              <FaSearch />
            </div>
            <input
              type="search"
              required
              value={userName}
              placeholder="Your Github Username Here..."
              onChange={(e) => setUserName(e.target.value)}
              className="outline-none  bg-transparent w-[500px] text-white  text-2xl"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 w-1/3  text-white font-bold shadow-lg px-1 py-3 text-xl rounded-xl"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
