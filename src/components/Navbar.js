import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

function NavBar() {
  return (
    <>
      <nav>
        <h1>
          Book Store CMS
          <span><ImUser /></span>
        </h1>
        <div>
          <div>
            {' '}
            <Link to="/books">Books</Link>
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
