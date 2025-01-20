import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "", // Updated to match the backend field name
    img: "", // Updated to match the backend field name
    phoneNo: "",
    email: "",
    role: "",
    bio: "", // Added bio field
    gender: "",
    age: "", // Added age field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/get/register", formData);
      alert("User registered successfully!");
      location.reload();
    } catch (err) {
      console.error("Error registering user:", err);
      alert("Failed to register user.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-[600px] flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Registration Form
        </h1>

        {/* Username Field */}
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Gender Field */}
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Image URL Field */}
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Image URL:</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Phone Number Field */}
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Phone Number:</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email Field */}
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

        {/* Job Role Field */}
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

        {/* Bio Field */}
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        {/* Age Field */}
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="p-3 mt-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
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
