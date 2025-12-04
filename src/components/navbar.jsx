import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{textAlign:"center", margin:"20px"}}>
      <Link to="/admin">Admin</Link> | 
      <Link to="/menu">Menu</Link> | 
      <Link to="/orders">Orders</Link>
    </nav>
  );
}
