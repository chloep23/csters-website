import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../index.css';

export default function Navbar() {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isAlumniOpen, setIsAlumniOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="w-full bg-mainPurple shadow-md sticky top-0 z-50">
      <nav className="px-6 py-3 flex items-center justify-between w-full">
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-black">
          <Link to="/" className="text-xl font-semibold italic text-indigo mr-4">CSters</Link>

          <Link to="/about" className="hover:text-indigo">About</Link>

          <div className="relative"
            onMouseEnter={() => setIsEventsOpen(true)}
            onMouseLeave={() => setIsEventsOpen(false)}>
            <span className="cursor-pointer hover:text-indigo">Events ▾</span>
            {isEventsOpen && (
              <div className="absolute bg-white shadow-md rounded px-6 py-2 top-full left-0 z-10">
                <Link to="/events/upcoming" className="block hover:text-indigo">Upcoming</Link>
                <hr className="my-1 border-gray-200" />
                <Link to="/events/past" className="block hover:text-indigo">Past</Link>
              </div>
            )}
          </div>

          <Link to="/ghc" className="hover:text-indigo">GHC</Link>

          <div className="relative"
            onMouseEnter={() => setIsAlumniOpen(true)}
            onMouseLeave={() => setIsAlumniOpen(false)}>
            <span className="cursor-pointer hover:text-indigo">Alumni ▾</span>
            {isAlumniOpen && (
              <div className="absolute bg-white shadow-md rounded px-6 py-2 top-full left-0 z-10">
                <Link to="/alumni" className="block hover:text-indigo">Alumni</Link>
                <hr className="my-1 border-gray-200" />
                <Link to="/alumni/directory" className="block hover:text-indigo">Directory</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-indigo">Contact</Link>
        </div>

        <div className="flex md:hidden items-center justify-between w-full">
          <Link to="/" className="text-xl font-semibold italic text-indigo">CSters</Link>
          <button
            className="text-black"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {isMobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>

      </nav>

      {isMobileOpen && (
        <div className="md:hidden bg-mainPurple px-6 pb-4 flex flex-col space-y-3 text-sm font-medium text-black">
          <Link to="/about" onClick={() => setIsMobileOpen(false)} className="hover:text-indigo">About</Link>

          <div>
            <p className="font-semibold mb-1">Events</p>
            <Link to="/events/upcoming" onClick={() => setIsMobileOpen(false)} className="block pl-3 hover:text-indigo">Upcoming</Link>
            <Link to="/events/past" onClick={() => setIsMobileOpen(false)} className="block pl-3 hover:text-indigo">Past</Link>
          </div>

          <Link to="/ghc" onClick={() => setIsMobileOpen(false)} className="hover:text-indigo">GHC</Link>

          <div>
            <p className="font-semibold mb-1">Alumni</p>
            <Link to="/alumni" onClick={() => setIsMobileOpen(false)} className="block pl-3 hover:text-indigo">Alumni</Link>
            <Link to="/alumni/directory" onClick={() => setIsMobileOpen(false)} className="block pl-3 hover:text-indigo">Directory</Link>
          </div>

          <Link to="/contact" onClick={() => setIsMobileOpen(false)} className="hover:text-indigo">Contact</Link>
        </div>
      )}
    </div>
  );
}