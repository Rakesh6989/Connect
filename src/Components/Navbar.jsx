import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <div className="w-screen bg-[#f7f7f7] fixed top-0 ">
      <nav className="  sticky top-0 z-50 mx-auto   main-container ">
        <div className=" mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold font-primay">
            Connect
          </Link>
          <div className="hidden md:flex space-x-6 items-center text-gray-800">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/short-clips" className="hover:text-blue-500">
             Short Clips
            </Link>
            <Link to="/marketplace" className="hover:text-blue-500">
              Marketplace
            </Link>
            <Link to="/profile" className="hover:text-blue-500">
              Profile
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Login
              </Link>
            )}
          </div>
          <button className="md:hidden text-gray-800" onClick={toggleMenu}>
            {menuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white px-6 py-4 shadow space-y-3">
            <Link
              onClick={toggleMenu}
              to="/"
              className="block hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              onClick={toggleMenu}
              to="/short-clips"
              className="block hover:text-blue-500"
            >
              Reels
            </Link>
            <Link
              onClick={toggleMenu}
              to="/marketplace"
              className="block hover:text-blue-500"
            >
              Marketplace
            </Link>
            <Link
              onClick={toggleMenu}
              to="/profile"
              className="block hover:text-blue-500"
            >
              Profile
            </Link>

            {isLoggedIn ? (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toggleMenu();
                }}
                className="w-full text-left bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            ) : (
              <Link
                onClick={toggleMenu}
                to="/login"
                className="block bg-blue-500 text-white px-3 py-1 rounded"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
