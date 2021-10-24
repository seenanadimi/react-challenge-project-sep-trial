import React, { useState, useEffect } from "react";
import { Template } from "../../components";
import { SERVER_IP } from "../../private";
import OrdersList from "./ordersList";
import "./viewOrders.css";

export default function ViewOrders(props) {
  const [orders, setOrders] = useState([]);
  const [newOrderList, setNewOrderList] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_IP}/api/current-orders`)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setOrders(response.orders);
          setNewOrderList(...orders);
        } else {
          console.log("Error getting orders");
        }
      });
  }, [newOrderList]);
  
  // useEffect(() => {
  //   let isMounted = true;
  //   const fetchData = async () => {
  //     const response = await fetch(`${SERVER_IP}/api/current-orders`);
  //     const newData = await response.json();
  //     if (isMounted) {
  //       setOrders(newData.orders);
  //       setNewList(...orders);
  //     }
  //   };
  //   fetchData();
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [newList]);

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
