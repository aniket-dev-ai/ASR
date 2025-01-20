import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    imgURL: "",
    phoneNo: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
      <form
        action="Post"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-[600px] flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Registration Form
        </h1>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Image URL:</label>
          <input
            type="text"
            name="imgURL"
            value={formData.imgURL}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">
            Phone Number:
          </label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Job Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
