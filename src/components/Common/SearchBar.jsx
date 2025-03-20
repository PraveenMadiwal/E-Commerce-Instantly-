import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Controlled input state
  const [isOpen, setIsOpen] = useState(false); // ✅ Controls search bar visibility

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // ✅ Prevents form refresh

    if (searchTerm.trim() !== "") {
      console.log("Search Term:", searchTerm); // ✅ Logs only when input is not empty
    } else {
      console.warn("Search term is empty"); // 🔴 Shows warning if input is empty
    }

    setIsOpen(false); // ✅ Closes search bar after submission
    setSearchTerm(""); // ✅ Clears input field after searching
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch} // ✅ Handles form submission
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // ✅ Updates state on input change
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            {/* 🔍 Search icon (Submit button) */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
          {/* ❌ Close button */}
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            onClick={handleSearchToggle}
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        /* 🔍 Open search bar button */
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
