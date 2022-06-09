import { useSelector } from 'react-redux';
import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer.books);

  return books.map((a) => (
    <Book key={1} id={a.id} author={a.author} title={a.title} />
  ));
};
export default BookList;
