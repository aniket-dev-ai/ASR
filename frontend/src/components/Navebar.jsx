
import { NavLink } from "react-router-dom"; // Correct import path

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <NavLink to="/" exact>
          {/* Logo or Home Button */}
          <h1 className="text-2xl font-bold hover:underline cursor-pointer">Home</h1>
        </NavLink>

        <NavLink to="/form">
          <h1 className="text-2xl font-bold hover:underline cursor-pointer">Add User</h1>
        </NavLink>
        {/* Add User Button */}
      </div>
    </div>
  );
}

export default Navbar;
