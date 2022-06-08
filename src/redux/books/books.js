// Actions
const ADD_BOOK = 'bookstore/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/REMOVE_BOOK';

// Reducer
export default function reducer(
  state = [
    { id: 1, author: 'Kano Uzumaki', title: 'bakugan' },
    { id: 2, author: 'Napoleon Hill', title: 'Think and Grow Rich' },
    { id: 3, author: 'Suzanne Collins', title: 'The Hunger Games' },
    { id: 4, author: 'Naruto', title: 'Shipudden' },
  ],
  action,
) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Action Creators
export function addBook(id, title, author) {
  return {
    type: ADD_BOOK,
    book: {
      id,
      title,
      author,
    },
  };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
