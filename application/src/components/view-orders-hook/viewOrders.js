import React, { useState, useEffect } from "react";
import { Template } from "../../components";
import { SERVER_IP } from "../../private";
import OrdersList from "./ordersList";
import "./viewOrders.css";

export default function ViewOrders(props) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     fetch(`${SERVER_IP}/api/current-orders`)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         if (response.success) {
  //           setOrders(response.orders);
  //         } else {
  //           console.log("Error getting orders");
  //         }
  //       });
  //   }, [loading]);

  useEffect(() => {
    (async () => {
      const fetchData = await fetch(`${SERVER_IP}/api/current-orders`);
      const response = await fetchData.json();
      if (response.success) {
        setOrders(response.orders);
      } else {
        console.log("Error getting orders");
      }
    })();
  }, [loading]);

  return (
    <Template>
      <div className="container-fluid">
        <OrdersList orders={orders} setLoading={setLoading} loading={loading} />
      </div>
    </Template>
  );
}
