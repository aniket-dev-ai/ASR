import React from "react";
import { NavLink } from "react-router-dom"; // Correct import for NavLink

function HomeCard({ person, setuser }) {
  // Click handler to set the user data
  function handleClick() {
    setuser(person); // Update the user state with the clicked person data
  }

  return (
    <NavLink to="/user">
      <div
        onClick={handleClick} // Trigger handleClick to update the user state
        className="bg-white text-gray-800 p-6 rounded-2xl shadow-xl w-80 mx-auto transform hover:scale-105 hover:shadow-2xl duration-300"
      >
        <img
          src={person.imageUrl}
          alt={`${person.name}`}
          className="w-28 h-28 mx-auto rounded-full border-4 border-gray-300 mb-4 object-cover"
        />
        <h1 className="text-xl font-semibold text-center mb-2">{person.name}</h1>
        <h2 className="text-lg text-center text-gray-600 mb-2">{person.jobRole}</h2>
        <p className="text-md text-center text-gray-500">{person.age} years old</p>
      </div>
    </NavLink>
  );
}

export default HomeCard;
