import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">My Review Site</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/reviews" className="hover:underline">Reviews</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

