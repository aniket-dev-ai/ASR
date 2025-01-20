import  { useState, useEffect } from "react";
import Navebar from "./components/Navebar";
import Homepage from "./components/Homepage";
import { getIndianGirls } from "./data";
import Form from "./components/form";
import { Route, Routes } from "react-router-dom";
import UserCard from "./components/UserCard";

export default function App() {
  const [user, setuser] = useState({}); // Initializing with an empty object
  const [indianGirls, setIndianGirls] = useState([]); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIndianGirls();
      setIndianGirls(data); // Update state with fetched data
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navebar />
      <Routes>
        <Route
          path="/"
          element={<Homepage data={indianGirls} setuser={setuser} />}
        />
        <Route path="/form" element={<Form />} />
        <Route path="/user" element={<UserCard user={user} />} />
      </Routes>
    </div>
  );



  
}
