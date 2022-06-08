import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

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
    dispatch(addBook(uuidv4(), Title, Author));
    // reset local state
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>ADD NEW BOOK</h2>
      <label htmlFor="title">
        Title:
        <input
          id="title"
          onChange={onChangeTitle}
          value={Title}
          type="text"
          className="title"
        />
      </label>
      <label htmlFor="author">
        Author:
        <input
          id="author"
          onChange={onChangeAuthor}
          value={Author}
          type="text"
          className="author"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default AddBook;
