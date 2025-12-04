export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Hello React + Vite!</h1>
      <p>Таны project амжилттай ажиллаж байна.</p>
    </div>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Admin from "./pages/admin.jsx";
import Menu from "./pages/menu.jsx";
import Orders from "./pages/orders.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}
