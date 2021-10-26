import React, { useState, useEffect } from "react";
import { Template } from "../../components";
import { SERVER_IP } from "../../private";
import OrdersList from "./ordersList";
import "./viewOrders.css";

export default function ViewOrders() {
  const [orders, setOrders] = useState([]);
  const [bool, setBoolean] = useState(false);

  useEffect(() => {
    fetch(`${SERVER_IP}/api/current-orders`)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setOrders(response.orders);
        } else {
          console.log("Error getting orders");
        }
      });
    setBoolean(false);
  }, [bool]);

  return (
    <Template>
      <div className="container-fluid">
        <OrdersList orders={orders} setBoolean={setBoolean} />
      </div>
    </Template>
  );
}
