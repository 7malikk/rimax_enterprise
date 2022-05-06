import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 relative bottom-0 w-full bg-white shadow md:flex md:items-center justify-center sm:flex-col md:p-6 dark:bg-gray-800">
      <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <Link to="/" className="hover:underline">
          Rimax Enterprise™
        </Link>
        . All Rights Reserved.
      </div>
      <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Created by
        <a
          className="text-black hover:text-white"
          href="https://github.com/7malikk">
          Malikk
        </a>
      </div>
    </footer>
  );
};

export default Footer;
