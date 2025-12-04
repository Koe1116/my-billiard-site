import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Orders from "./pages/Orders.jsx";

// Зөвхөн нэг default export
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}
