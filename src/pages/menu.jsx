import { useEffect, useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then(res => res.json())
      .then(data => setMenu(data));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      {menu.map(item => (
        <div key={item._id}>{item.name} - {item.price}₮</div>
      ))}
    </div>
  );
}
