import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <span><img src="" alt="" className=""/></span>
          <a className="navbar-brand" href="/">Mia Demirdal</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Me!</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/info">My Information</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Direct Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;