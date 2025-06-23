import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/addBlog">Add Blog</Link></li>
          <li><Link to="/updateblog">Updata Blog</Link></li>
          {/* <li><Link to="/updateBlog">Upd</Link></li> */}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
