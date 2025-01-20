import React, { useState } from "react";
import Navebar from "./components/Navebar";
import Homepage from "./components/Homepage";
import data from "./data";
import Form from "./components/form";
import { Route, Routes } from "react-router-dom"; // Fix: Ensure you're using "react-router-dom"
import UserCard from "./components/UserCard";

export default function App() {
  const [user, setuser] = useState({}); // Initializing with an empty object

  return (
    <div>
      <Navebar />
      <Routes>
        <Route path="/" element={<Homepage data={data} setuser={setuser} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/user" element={<UserCard user={user} />} />
      </Routes>
    </div>
  );
}
