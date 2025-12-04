import { useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const addOrder = () => {
    const newOrder = prompt("Захиалгын нэрийг бичнэ үү");
    if(newOrder) setOrders([...orders, newOrder]);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h2>Orders</h2>
      <button onClick={addOrder}>Захиалга нэмэх</button>
      <ul>
        {orders.map((o,i)=><li key={i}>{o}</li>)}
      </ul>
    </div>
  );
}
