import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { fetchBooks, setSelectedBook } from "../features/bookSlice";
import BookDetails from "./BookDetails";

const paginateBooks = (books = [], currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return books.slice(startIndex, startIndex + pageSize);
};

const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;
  const dispatch = useDispatch();
  const { books, loading, searchTerm } = useSelector((state) => state.books);
  const selectedBook = useSelector((state) => state.books.selectedBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  useEffect(() => {
    dispatch(fetchBooks(searchTerm));
  }, [dispatch, searchTerm]);
  const filteredBooks = useMemo(() => {
    return books.filter(
      (book) =>
        book.title || book.title_suggest?.toLowerCase().includes(searchTerm)
    );
  }, [books, searchTerm]);

  const paginatedBooks = useMemo(
    () => paginateBooks(filteredBooks, currentPage, booksPerPage),
    [filteredBooks, currentPage]
  );

  const handleBookClick = (book) => {
    dispatch(setSelectedBook(book));
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-center text-blue-600">
        Welcome to Library📕📗📘📙
      </h1>

      <SearchBar books={paginatedBooks} />
      {selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-md">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <BookDetails />
            <button
              onClick={() => dispatch(setSelectedBook(null))}
              className="mt-4 px-4 py-2 bg-slate-400 text-white rounded-lg 
             hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center my-4 text-gray-700 dark:text-white">
        {loading ? (
          <p className="text-lg font-semibold animate-pulse">Loading...🔃</p>
        ) : null}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {paginatedBooks.length > 0 ? (
          paginatedBooks.map((book) => (
            <div
              className=" flex flex-col justigy-center text-center aligin max-w-sm p-6 text-black bg-indigo-200 shadow-lg rounded-xl 
            dark:border-gray-700 transition hover:scale-105"
              key={book.key}
            >
              <h1 className="font-large text-center">
                <b
                  onClick={() => handleBookClick(book)}
                  className="cursor-pointer text-violet-800 text-xl font-large hover:underline font-medium"
                >
                  Book Title:
                </b>
              </h1>{" "}
              {book.title || "No available Title"}
              <br /> <b>Author Name:</b> {book.author_name} --- Publish Year:{" "}
              {book.first_publish_year}
            </div>
          ))
        ) : books.length === 0 && !loading ? (
          <p>No books found. Try refining your search!</p>
        ) : null}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BookList;
