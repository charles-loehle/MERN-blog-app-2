import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className='Navbar navbar navbar-dark bg-dark navbar-expand-lg mb-4'>
      <Link to="/" className="navbar-brand" >Yoga Blog App</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blogs" className="nav-link">Yoga Blogs</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blogs/new" className="nav-link">New Yoga Blog Post</Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;