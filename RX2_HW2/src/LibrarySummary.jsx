import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from './actions';

const LibrarySummary = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const removeBookHandler = (isbn) => {
    dispatch(removeBook(isbn));
  };
  return (
    <>
      <h2>Library Summary</h2>
      <p>Total Books: {books.length}</p>
      <ul id="bookList">
        {books.map((book) => (
          <li key={book.isbn}>
            {book.title} by {book.author} (ISBN: {book.isbn}){' '}
            <button onClick={() => removeBookHandler(book.isbn)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LibrarySummary;
