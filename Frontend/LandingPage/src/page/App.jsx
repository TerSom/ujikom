import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Employee from "../page/Employee";
import Department from "./Department";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/departments" element={<Department />} />
    </Routes>
  );
} 

export default App;
