import React from 'react';
import BookList from '../BooksList';
import AddBook from '../AddBook';

function BooksPage() {
  return (
    <>
      <BookList />
      <hr />
      <AddBook />
    </>
  );
}

export default BooksPage;
