import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../features/bookSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  const handleSearch = () => {
    const query = searchRef.current.value.trim();
    if (query) {
      dispatch(fetchBooks(query));
    }
  };
  return (
    <div>
      <input
        className="w-64 p-2 border border-gray-400 rounded-lg bg-gray-200 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        ref={searchRef}
        placeholder="Search Books..."
      />

      <button
        className=" m-3 mt-4 px-4 py-2 rounded-lg border border-gray-500 
                 bg-gray-200 dark:bg-gray-700 text-black dark:text-white
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        onClick={handleSearch}
      >
        🔍Search
      </button>
    </div>
  );
};

export default SearchBar;
