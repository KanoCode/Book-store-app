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
    <div className="card">
      {' '}
      <div className="book-content-left">
        <h2>{title}</h2>
        <p>
          {author}
          {' '}
        </p>
        <button type="button">Comments</button>
        <button onClick={DeleteBook} type="button">
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
      <div className="container-1">
        <div className="mid-book-content">
          <div className="container">
            <div className="circular-progress">
              <div className="value-container">8%</div>
            </div>
            {' '}
          </div>
          <div className="mid-content-p">
            <p>8%</p>
            <p>completed</p>
          </div>
        </div>
        <div className="book-content-right">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 2: &quot;A Lesson Learned &quot;</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
