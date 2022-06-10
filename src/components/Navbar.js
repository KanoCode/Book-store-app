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
        <div className="links">
          <div>
            {' '}
            <Link to="/books">BOOKS</Link>
          </div>
          <div>
            {' '}
            <Link to="/categories">CATEGORIES</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
