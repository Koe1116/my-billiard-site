import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div style={{textAlign:"center"}}>
      <h2>Admin Panel</h2>
      <Link to="/menu">Menu</Link> | <Link to="/orders">Orders</Link>
    </div>
  );
}
