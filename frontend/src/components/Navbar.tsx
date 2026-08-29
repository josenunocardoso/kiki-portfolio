import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white border-b border-gray-100">
      <Link to="/" className="text-xl font-bold tracking-tighter uppercase">
        Kiki Portfolio
      </Link>
      <div className="flex gap-6 text-sm uppercase tracking-wider text-gray-500">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/about" className="hover:text-black">About</Link>
        <Link to="/gallery" className="hover:text-black">Gallery</Link>
        <Link to="/contact" className="hover:text-black">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
