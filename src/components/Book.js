import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const DeleteBook = () => {
    dispatch(deleteBook(id));
  };
  return (
    <>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={DeleteBook} type="button">
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
