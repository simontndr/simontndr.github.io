import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const location = useLocation();

  const homeLink = location.pathname === '/' ? "#homeTop" : "/#homeTop";

  const menuItems = [
    { name: "about", to: location.pathname==="/" ? "#about" : "/#about" },
    { name: "projects", to: location.pathname==="/" ? "#projects" : "/#projects" },
    { name: "journey", to: "/journey/#journeyTop" },
    { name: "connect", to: location.pathname+"#connect" },
  ];

  return (
    <>
      {/* Main Navbar */}
      
      <nav className={`
        bg-dawn border-b border-midnight w-full sticky top-0 z-30
        transition-opacity duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-0 md:opacity-100' : 'opacity-100'}
      `}>
        <div className="px-8 lg:px-20">
          <div className="flex justify-between items-center p-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to={homeLink}>
                <img src={Logo} alt="Logo" className="w-[150px] md:w-[200px] mr-auto" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`text-midnight hover:underline ${item.name==='connect' ? 'font-bold font-syncopate uppercase text-xs' : 'font-courier'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Hamburger Menu Button for Mobile */}
            <button
              onClick={toggleMenu}
              className="text-midnight hover:text-blue-600 md:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Background overlay */}
        <div
          className={`fixed inset-0 transition-all duration-300 ${isMenuOpen ? 'bg-black bg-opacity-50' : 'bg-transparent'}`}
          onClick={closeMenu}
        ></div>

        {/* Mobile menu panel */}
        <div className={`
          fixed top-0 left-0 h-full w-2/3 bg-dawn shadow-xl 
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
            {/* Logo in mobile menu */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-midnight">

              <Link to={homeLink}>
                <img src={Logo} alt="Logo" className="w-[150px] md:w-[200px] mr-auto" />
              </Link>

              {/* Close button */}
              <button
                onClick={closeMenu}
                className="text-midnight hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile menu items */}
            <div className="px-6 py-4">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={closeMenu}
                     className={`block  mb-4 text-midnight hover:underline ${item.name==='connect' ? 'font-bold font-syncopate uppercase text-xs mt-1' : 'font-courier'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;