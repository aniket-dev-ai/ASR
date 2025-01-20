import Navebar from "./components/Navebar";
import Homepage from "./components/Homepage";
import data from "./data";
import Form from "./components/form";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <div>
      <Navebar />
      <Routes>
        <Route path="/" element={<Homepage data={data} />} />
        <Route path="/form" element={<Form></Form>} />
      </Routes>
    </div>
  );
}
