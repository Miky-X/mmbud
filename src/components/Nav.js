import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onClose = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">O nas</Link>
          </li>
          <li>
          <Link to="Air">Osuszanie</Link>
          </li>
          <li>
          <Link to="/">Współpraca</Link>
          </li>
          <li>
            <Link to="/Portfolio">Realizacje</Link>
          </li>
          <li>
            <Link to="/Contact">Kontakt</Link>
          </li>
        </ul>
      </div>
      <a
        className="close"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
        href="#menu"
      >
        Close
      </a>
    </nav>
  );
}
