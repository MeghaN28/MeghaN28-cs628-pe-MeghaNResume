import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#2c3e50', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>
            Home
          </Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/add-recipe" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>
            Add Recipe
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
