import React, { useEffect } from "react";

function UserCard({ user }) {
  useEffect(() => {
    console.log(user); // Log user details when user data changes
  }, [user]);

  return (
    <div className="min-h-[92.3vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <img
            src={user.imageUrl}
            alt={user.name}
            className="w-48 h-48 rounded-full border-4 border-gray-300"
          />
          <div className="ml-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{user.name}</h1>
            <p className="text-xl text-gray-600 mb-2">{user.jobRole}</p>
            <p className="text-lg text-gray-500">{user.age} years old</p>
            <p className="text-md text-gray-600 mt-4">{user.email}</p>
            <p className="text-md text-gray-600">{user.phoneNumber}</p>
          </div>
        </div>
         
      </div>
    </div>
  );
}

export default UserCard;
