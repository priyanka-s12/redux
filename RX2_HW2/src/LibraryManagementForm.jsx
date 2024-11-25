import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './actions';

const LibraryManagementForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setISBN] = useState('');

  const dispatch = useDispatch();

  const addBookHandler = () => {
    if (title && author && isbn) {
      const bookObj = {
        title,
        author,
        isbn,
      };
      //   dispatch({ type: 'ADD_BOOK', payload: bookObj });
      dispatch(addBook(bookObj));
    }
    // dispatch({ type: 'CALCULATE_TOTAL_BOOKS' });
    setTitle('');
    setAuthor('');
    setISBN('');
  };

  return (
    <div>
      <h1>Library Management</h1>
      <input
        type="text"
        placeholder="Tiitle"
        id="title"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Author"
        id="author"
        onChange={(event) => setAuthor(event.target.value)}
        value={author}
      />
      <input
        type="text"
        placeholder="ISBN"
        id="isbn"
        onChange={(event) => setISBN(event.target.value)}
        value={isbn}
      />
      <button onClick={addBookHandler}>Add Book</button>
    </div>
  );
};
export default LibraryManagementForm;
