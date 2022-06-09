import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navbar';
import './App.css';
import Categories from './components/pages/Categories';
import { loadBooks } from './redux/books/books';
import BooksPage from './components/pages/Default';

function App() {
  const dispatch = useDispatch();
  dispatch(loadBooks());
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
