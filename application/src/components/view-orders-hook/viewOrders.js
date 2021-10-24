import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Template } from "../../components";
import { SERVER_IP } from "../../private";
import OrdersList from "./ordersList";
import "./viewOrders.css";

export default function ViewOrders(props) {
  const [orders, setOrders] = useState([]);
  const bool = useSelector((state) => state.bool);

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
  }, [bool]);

  // useEffect(() => {
  //   (async () => {
  //     const fetchData = await fetch(`${SERVER_IP}/api/current-orders`);
  //     const response = await fetchData.json();
  //     if (response.success) {
  //       setOrders(response.orders);
  //     } else {
  //       console.log("Error getting orders");
  //     }
  //   })();
  // }, [loading]);

  return (
    <Template>
      <div className="container-fluid">
        <OrdersList orders={orders} />
      </div>
    </Template>
  );
}
