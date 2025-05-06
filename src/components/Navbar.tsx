
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Product Palace
        </Link>
        <div className="text-sm text-gray-600">Your premier product finder</div>
      </div>
    </nav>
  );
};

export default Navbar;
