import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav>
        <h1>Book Store CMS</h1>
        <div>
          <div>
            {' '}
            <Link to="/Books">Books</Link>
          </div>
          <div>
            {' '}
            <Link to="/categories">Categories</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
