import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../index.css'; 

export default function Navbar() {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isAlumniOpen, setIsAlumniOpen] = useState(false);

  return (
      <div 
        style={{ backgroundColor: "var(--color-mainPurple)" }}
        className="w-screen bg-mainPurple shadow-md fixed top-0 left-0 z-50">
        <nav className="px-6 py-3 flex flex-wrap items-center w-full">
        <div className="flex items-center space-x-6 text-sm font-medium text-black">
          <Link to="/" className="text-xl font-semibold italic text-indigo mr-4">CSters</Link>

          <Link to="/about" className="hover:text-indigo">About</Link>

          <div
            className="relative"
            onMouseEnter={() => setIsEventsOpen(true)}
            onMouseLeave={() => setIsEventsOpen(false)}
          >
            <span className="cursor-pointer hover:text-indigo">Events ▾</span>
            {isEventsOpen && (
              <div className="absolute bg-white shadow-md rounded px-6 py-2 top-full left-0 z-10">
                <Link to="/events" className="block hover:text-indigo">Events</Link>
              </div>
            )}
          </div>

          <Link to="/ghc" className="hover:text-indigo" >GHC</Link>

          <div
            className="relative"
            onMouseEnter={() => setIsAlumniOpen(true)}
            onMouseLeave={() => setIsAlumniOpen(false)}
          >
            <span className="cursor-pointer hover:text-indigo">Alumni ▾</span>
            {isAlumniOpen && (
              <div className="absolute bg-white shadow-md rounded px-6 py-2 top-full left-0 z-10">
                <Link to="/alumni" className="block hover:text-indigo">Alumni</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-indigo">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
