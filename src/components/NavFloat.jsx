import React from 'react';

const NavbarF = () => {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[1230px] bg-gray-900 p-2 z-50 rounded-3xl h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 md:space-x-6 text-white justify-center w-full md:w-auto">
          <li>
            <a href="#events" className="hover:text-yellow-500">Events</a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-yellow-500">Gallery</a>
          </li>
          <li>
            <a href="#history" className="hover:text-yellow-500">History</a>
          </li>
        </ul>
        <a href="#book-ticket" className="bg-yellow-500 text-white py-1 px-4 md:px-8 rounded hover:bg-yellow-600 ml-auto md:ml-0">
          Book your Tickets
        </a>
      </div>
    </nav>
  );
};

export default NavbarF;