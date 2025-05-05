import { useSelector } from "react-redux";

const BookDetails = () => {
  const selectedBook = useSelector((state) => state.books.selectedBook);

  if (!selectedBook) return null; // Don't show anything if no book is selected

  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800">
      {selectedBook.cover_i && (
        <img
          src={`https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-L.jpg`}
          alt={selectedBook.title}
          className="w-60 h-60 object-cover rounded-md mx-auto mb-4"
        />
      )}
      <h2 className="text-xl font-bold">
        {selectedBook.title || "Unknown Title"}
      </h2>

      <p>
        <b>Author:</b>{" "}
        {selectedBook.author_name?.join(", ") || "Unknown Author"}
      </p>
      <p>
        <b>Published Year:</b> {selectedBook.first_publish_year || "N/A"}
      </p>
      <p>
        <b>Edition Count:</b> {selectedBook.edition_count || "N/A"}
      </p>
      <p>
        <b>E:Book: </b>
        {selectedBook.ebook_access}
      </p>
      {/* booklink online */}
      {selectedBook.ia && (
        <p>
          <b>E-Book:</b>{" "}
          <a
            href={`https://archive.org/details/${selectedBook.ia}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Read Online
          </a>
        </p>
      )}
    </div>
  );
};

export default BookDetails;
