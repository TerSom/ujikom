import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Employee from "../page/Employee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee" element={<Employee />} />
    </Routes>
  );
}

export default App;
