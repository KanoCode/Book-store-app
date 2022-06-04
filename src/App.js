import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import './App.css';
import Categories from './components/pages/Categories';
import BooksPage from './components/pages/Default';

function App() {
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
