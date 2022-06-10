import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

const AddBook = () => {
  // local state
  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  const dispatch = useDispatch();

  // handle changes in local state
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (Title !== '' && Author !== '') {
      const newBook = { id: uuidv4(), title: Title, author: Author };
      dispatch(postBook(newBook));
    }
    // reset local state
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>ADD NEW BOOK</h2>
      <label className="title" htmlFor="title">
        <input
          id="title"
          onChange={onChangeTitle}
          value={Title}
          type="text"
          placeholder="Book title"
        />
      </label>
      <label className="author" htmlFor="author">
        <input
          id="author"
          onChange={onChangeAuthor}
          value={Author}
          type="text"
          placeholder="Author"
        />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
};
export default AddBook;
