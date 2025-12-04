import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./pages/orders.jsx";

// Зөвхөн нэг default export
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/orders" element={<Orders />} />
        {/* Бусад route-ууд */}
      </Routes>
    </Router>
  );
}
