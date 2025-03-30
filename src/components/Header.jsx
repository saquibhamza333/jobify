import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { HiMenu, HiX, HiUserCircle } from "react-icons/hi"; 

export const Header = () => {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-950 shadow-md py-4 px-6 fixed top-0 w-full z-20 border-b border-gray-700">
      <div className="flex justify-between items-center">
        
        
        <Link to="/" className="text-2xl font-bold text-white cursor-pointer">
          Jobify
        </Link>

        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/profile" className="flex items-center gap-2 text-white text-sm font-medium cursor-pointer">
            <HiUserCircle className="w-6 h-6 text-blue-500" />
            {user.username}
          </Link>

          <Link 
            to="/applications"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Applied Jobs
          </Link>
        </div>

        
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl cursor-pointer">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      
      {menuOpen && (
        <ul className="md:hidden bg-gray-900 mt-4 p-4 flex flex-col gap-4 rounded-lg">
          <li>
            <Link 
              to="/profile" 
              className="flex items-center gap-2 text-white text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <HiUserCircle className="w-6 h-6 text-blue-500" />
              {user.username}
            </Link>
          </li>

          <li>
            <Link 
              to="/applications"
              className="block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Applied Jobs
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};
