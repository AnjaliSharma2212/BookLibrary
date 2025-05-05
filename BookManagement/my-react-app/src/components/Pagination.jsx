import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination flex justify-center text-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="m-3 mt-4 px-4 py-2 rounded-lg border border-gray-500 
                 bg-gray-200 dark:bg-gray-700 text-black dark:text-white
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            border: "1px solid grey",
          }}
          key={index + 1}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className=" m-3 mt-4 px-4 py-2 rounded-lg border border-gray-500 
                 bg-gray-200 dark:bg-gray-700 text-black dark:text-white
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
