import PostAndGetEndPoint from '../../utils/ApiData';

// Actions
const ADD_BOOK = 'bookstore/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/REMOVE_BOOK';
const LOAD_BOOKS = 'bookstore/LOAD_BOOKS';

// Reducer
export default function reducer(
  STATE = {
    books: [],
  },
  action,
) {
  switch (action.type) {
    case LOAD_BOOKS:
      return { books: action.payload };
    case ADD_BOOK:
      // const
      return { ...STATE, books: [...STATE.books, action.payload] };
    case REMOVE_BOOK:
      return { ...STATE, books: [...STATE.books].filter((book) => book.id !== action.id) };
    default:
      return STATE;
  }
}

// Action Creators
export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book,
  };
}

// LOAD BOOKS
const booksLoader = (arr) => ({ type: LOAD_BOOKS, payload: arr });

export const loadBooks = () => async (dispatch) => {
  const resp = await fetch(PostAndGetEndPoint);
  const booksObjData = await resp.json();
  const booksKeys = Object.keys(booksObjData);
  const booksObj = booksObjData;
  //   // Organize array
  let organizedArr = [];
  booksKeys.forEach((a) => {
    organizedArr = organizedArr.concat({ id: a, ...booksObj[a][0] });
  });

  //   // organise the data
  dispatch(booksLoader(organizedArr));
};

// // POST BOOKS ACTION
export const postBook = (book) => async (dispatch) => {
  const { id, title, author } = addBook(book).payload;
  await fetch(PostAndGetEndPoint,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${id}`,
        title: `${title}`,
        author: `${author}`,
        category: 'Fiction',
      }),
    });
  dispatch(addBook(book));
};

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}

// DELETE BOOK

export const deleteBook = (id) => async (dispatch) => {
  const DeleteEndPoint = `${PostAndGetEndPoint}/${id}`;
  await fetch(DeleteEndPoint,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${id}`,
      }),
    });
  dispatch(removeBook(id));
};
