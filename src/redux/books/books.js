// widgets.js

// Actions
const ADD_BOOK = "bookstore/ADD_BOOK";
const REMOVE_BOOK = "bookstore/REMOVE_BOOK";


// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
    case "REMOVE_BOOK":
        return state.filter(book => book != action.book)
    default:
      return state;
  }
}

// Action Creators
export function addBook(book) {
  return { type: "ADD_BOOK", book };
}

export function removeBook(book) {
  return { type: "REMOVE_BOOK",book };
}

