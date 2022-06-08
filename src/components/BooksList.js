import { useSelector } from 'react-redux';
import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (books.map((a) => (<Book key={2} id={a.id} author={a.title} title={a.author} />)));
};
export default BookList;
