// components/Navbar.jsx
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50 rounded-b-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-3xl font-extrabold text-white tracking-wide">
          NPTEL
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu (Optional if needed) */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 flex flex-col gap-3 transition-all duration-300 rounded-b-xl">
          {/* Add any additional mobile items here if needed */}
        </div>
      )}
    </header>
  );
}

export default Navbar;
