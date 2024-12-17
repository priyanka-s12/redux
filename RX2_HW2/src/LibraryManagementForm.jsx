import { useState } from 'react';
import { addBook } from './actions';
import { useDispatch } from 'react-redux';

const LibraryManagementForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setISBN] = useState('');

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    console.log(title, author, isbn);
    if (title && author && isbn) {
      const book = {
        title,
        author,
        isbn,
      };

      dispatch(addBook(book));
    }
    setTitle('');
    setAuthor('');
    setISBN('');
  };

  return (
    <>
      <section>
        <h1>Library Management</h1>
        <form>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="author"
            id="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            id="isbn"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setISBN(e.target.value)}
          />
          <button id="addBookBtn" onClick={addBookHandler}>
            Add Book
          </button>
        </form>
      </section>
    </>
  );
};

export default LibraryManagementForm;
